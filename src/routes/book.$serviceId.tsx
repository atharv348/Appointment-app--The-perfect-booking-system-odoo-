import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { api } from "@/api/api";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Check, ChevronLeft, ChevronRight, Clock, MapPin, Calendar, CreditCard, Sparkles } from "lucide-react";
import { toast } from "sonner";
import { fmtMoney } from "@/lib/format";
import { useAuthStore } from "@/stores/auth-store";
import { Calendar as CalendarUI } from "@/components/ui/calendar";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export const Route = createFileRoute("/book/$serviceId")({
  component: BookingWizard,
});

function BookingWizard() {
  const { serviceId } = Route.useParams();
  const navigate = useNavigate();
  const qc = useQueryClient();
  const { user, profile } = useAuthStore();
  
  const { data: service, isLoading: isLoadingService } = useQuery({
    queryKey: ["service", serviceId],
    queryFn: async () => {
      const services = await api.listServices();
      return services.find(s => s.id === serviceId);
    }
  });

  const [step, setStep] = useState(0);
  const [selectedProvider, setSelectedProvider] = useState<string | null>(null);
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [capacity, setCapacity] = useState(1);
  const [answers, setAnswers] = useState<Record<string, any>>({});
  const [resetOpen, setResetOpen] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [confirmedBooking, setConfirmedBooking] = useState<any>(null);
  const [paymentMethod, setPaymentMethod] = useState("card");

  // Mock providers
  const providers = [
    { id: "p1", name: "Alex Rivera", role: "Senior Stylist", badge: "A1" },
    { id: "p2", name: "Sam Chen", role: "Specialist", badge: "A2" },
  ];

  // Mock slots
  const slots = ["09:00 AM", "10:00 AM", "11:00 AM", "02:00 PM", "03:00 PM", "04:00 PM"];

  const steps = [
    { title: "Provider", id: "provider" },
    { title: "Date", id: "date" },
    { title: "Time", id: "time" },
    { title: "Details", id: "details" },
    { title: "Review", id: "review" },
  ];

  // Logic to skip provider step if auto-assign
  const assignmentMode = service?.assignment_mode || "auto";

  const nextStep = () => {
    if (step === 0 && assignmentMode === "auto") {
      setStep(1);
    } else {
      setStep(s => s + 1);
    }
  };

  const prevStep = () => {
    if (step === 1 && assignmentMode === "auto") {
      setStep(0);
    } else {
      setStep(s => s - 1);
    }
  };

  const createBooking = useMutation({
    mutationFn: async () => {
      if (!date || !selectedSlot || !service) return;
      
      // Double-booking prevention check (Mock)
      const isTaken = Math.random() > 0.95; // 5% chance
      if (isTaken) {
        throw new Error("This slot was just taken. Please pick another time.");
      }

      const timeParts = selectedSlot.match(/(\d+):(\d+)\s(AM|PM)/);
      if (!timeParts) return;
      
      let hours = parseInt(timeParts[1]);
      const minutes = parseInt(timeParts[2]);
      if (timeParts[3] === "PM" && hours < 12) hours += 12;
      if (timeParts[3] === "AM" && hours === 12) hours = 0;
      
      const start = new Date(date);
      start.setHours(hours, minutes, 0, 0);
      const end = new Date(start.getTime() + service.duration_minutes * 60000);

      const bookingData = {
        customer_id: user?.id || null,
        service_id: service.id,
        start_at: start.toISOString(),
        end_at: end.toISOString(),
        status: service.manual_confirmation ? "pending" : "confirmed",
        notes: JSON.stringify({ ...answers, capacity }),
        price_cents: service.price_cents,
      };

      return api.createAppointment(bookingData);
    },
    onSuccess: (data) => {
      qc.invalidateQueries({ queryKey: ["appointments"] });
      setConfirmedBooking(data);
      setIsConfirmed(true);
      toast.success("Booking confirmed!");
    },
    onError: (e: Error) => {
      toast.error(e.message);
      if (e.message.includes("taken")) {
        setStep(2); 
        setSelectedSlot(null);
      }
    }
  });

  if (isLoadingService) return <div className="p-20 text-center">Loading...</div>;
  if (!service) return <div className="p-20 text-center">Service not found.</div>;

  if (isConfirmed) {
    return (
      <div className="min-h-screen bg-muted/30 pb-20 flex flex-col items-center justify-center p-4">
        <Card className="max-w-md w-full shadow-2xl border-t-4 border-t-primary animate-in zoom-in-95 duration-300">
          <CardHeader className="text-center pb-2">
            <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <Check className="h-8 w-8 text-primary" strokeWidth={3} />
            </div>
            <CardTitle className="text-2xl font-bold">Booking Confirmed!</CardTitle>
            <p className="text-muted-foreground">Your appointment is scheduled.</p>
          </CardHeader>
          <CardContent className="space-y-6 pt-4">
            <div className="bg-muted/50 rounded-xl p-5 space-y-4">
               <div className="flex items-start gap-3">
                  <Calendar className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <div className="font-bold">{new Date(confirmedBooking.start_at).toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</div>
                    <div className="text-sm text-muted-foreground">{new Date(confirmedBooking.start_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</div>
                  </div>
               </div>
               <div className="flex items-start gap-3">
                  <Sparkles className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <div className="font-bold">{service.name}</div>
                    <div className="text-sm text-muted-foreground">{service.duration_minutes} Minutes</div>
                  </div>
               </div>
               <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <div className="font-bold">Venue / Location</div>
                    <div className="text-sm text-muted-foreground">{service.location || "Online Appointment"}</div>
                  </div>
               </div>
               <div className="border-t pt-4 mt-2">
                  <div className="text-xs uppercase font-bold text-muted-foreground mb-1">Status</div>
                  <Badge variant={service.manual_confirmation ? "secondary" : "default"} className="px-3 py-1">
                    {service.manual_confirmation ? "Reserved - Pending Confirmation" : "Confirmed"}
                  </Badge>
               </div>
            </div>

            <div className="text-center text-sm text-muted-foreground italic px-4">
              "A confirmation email has been sent to your registered address."
            </div>
          </CardContent>
          <CardFooter className="flex flex-col gap-2 pt-2">
             <Button className="w-full" onClick={() => navigate({ to: "/profile" })}>
                View My Bookings
             </Button>
             <Button variant="outline" className="w-full" onClick={() => navigate({ to: "/" })}>
                Back to Home
             </Button>
          </CardFooter>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-muted/30 pb-20">
      <header className="border-b bg-background/80 backdrop-blur sticky top-0 z-10">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Button variant="ghost" size="sm" onClick={() => navigate({ to: "/" })}>
            <ChevronLeft className="h-4 w-4 mr-2" /> Cancel
          </Button>
          <div className="text-sm font-medium">Booking {service.name}</div>
          <div className="w-20" /> {/* Spacer */}
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-2xl">
        {/* Progress bar */}
        <div className="mb-8">
          <div className="flex justify-between mb-2">
            {steps.map((s, i) => (
              <div key={s.id} className="flex flex-col items-center gap-1">
                <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center text-xs font-bold transition-colors ${i <= step ? "bg-primary border-primary text-primary-foreground" : "bg-background border-muted text-muted-foreground"}`}>
                  {i < step ? <Check className="h-4 w-4" /> : i + 1}
                </div>
                <span className={`text-[10px] uppercase tracking-wider font-bold ${i <= step ? "text-primary" : "text-muted-foreground"}`}>{s.title}</span>
              </div>
            ))}
          </div>
          <div className="h-1 bg-muted rounded-full overflow-hidden">
            <div 
              className="h-full bg-primary transition-all duration-300" 
              style={{ width: `${(step / (steps.length - 1)) * 100}%` }} 
            />
          </div>
        </div>

        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle>{steps[step].title}</CardTitle>
          </CardHeader>
          <CardContent className="min-h-[300px]">
            {step === 0 && (
              <div className="grid gap-4">
                <p className="text-sm text-muted-foreground mb-2">Choose your preferred service provider</p>
                {providers.map(p => (
                  <div 
                    key={p.id}
                    onClick={() => setSelectedProvider(p.id)}
                    className={`flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all ${selectedProvider === p.id ? "border-primary bg-primary/5" : "border-muted hover:border-muted-foreground/30"}`}
                  >
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary">
                      {p.badge}
                    </div>
                    <div className="flex-1">
                      <div className="font-bold">{p.name}</div>
                      <div className="text-xs text-muted-foreground">{p.role}</div>
                    </div>
                    {selectedProvider === p.id && <Check className="h-5 w-5 text-primary" />}
                  </div>
                ))}
              </div>
            )}

            {step === 1 && (
              <div className="flex flex-col items-center">
                <CalendarUI
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  disabled={(d) => d < new Date(new Date().setHours(0,0,0,0)) || d.getDay() === 0 || d.getDay() === 6}
                  className="rounded-md border shadow-sm"
                />
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {slots.map(slot => (
                    <Button
                      key={slot}
                      variant={selectedSlot === slot ? "default" : "outline"}
                      className="h-12 font-medium"
                      onClick={() => setSelectedSlot(slot)}
                    >
                      {slot}
                    </Button>
                  ))}
                </div>

                {service.max_bookings && service.max_bookings > 1 && selectedSlot && (
                  <div className="pt-6 border-t animate-in fade-in slide-in-from-top-2">
                    <Label className="text-base font-bold mb-3 block">Number of Guests / Capacity</Label>
                    <div className="flex items-center gap-4">
                      <Button 
                        variant="outline" 
                        size="icon" 
                        onClick={() => setCapacity(Math.max(1, capacity - 1))}
                        disabled={capacity <= 1}
                      >
                        -
                      </Button>
                      <span className="text-xl font-bold w-8 text-center">{capacity}</span>
                      <Button 
                        variant="outline" 
                        size="icon" 
                        onClick={() => setCapacity(Math.min(service.max_bookings || 1, capacity + 1))}
                        disabled={capacity >= (service.max_bookings || 1)}
                      >
                        +
                      </Button>
                      <span className="text-sm text-muted-foreground ml-2">
                        Max {service.max_bookings} people
                      </span>
                    </div>
                  </div>
                )}
              </div>
            )}

            {step === 3 && (
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label>Full Name</Label>
                  <Input defaultValue={profile?.full_name || ""} />
                </div>
                <div className="space-y-2">
                  <Label>Email Address</Label>
                  <Input defaultValue={profile?.email || ""} disabled />
                </div>
                <div className="space-y-2">
                  <Label>Phone Number</Label>
                  <Input placeholder="+91 98765 43210" />
                </div>
                
                {/* Dynamic Questions Rendering */}
                {service.questions?.map((q: any, i: number) => (
                  <div key={i} className="space-y-2 pt-2">
                    <Label>{q.label} {q.required && <span className="text-destructive">*</span>}</Label>
                    {q.type === "text" && (
                      <Input 
                        placeholder={q.placeholder} 
                        required={q.required}
                        value={answers[q.id] || ""}
                        onChange={(e) => setAnswers({ ...answers, [q.id]: e.target.value })}
                      />
                    )}
                    {q.type === "multiline" && (
                      <Textarea 
                        placeholder={q.placeholder} 
                        required={q.required}
                        value={answers[q.id] || ""}
                        onChange={(e) => setAnswers({ ...answers, [q.id]: e.target.value })}
                      />
                    )}
                  </div>
                ))}

                {!service.questions?.length && (
                  <div className="space-y-2 pt-4 border-t">
                    <Label>Anything we should know?</Label>
                    <Textarea 
                      placeholder="Optional notes for the provider" 
                      value={answers["notes"] || ""}
                      onChange={(e) => setAnswers({ ...answers, ["notes"]: e.target.value })}
                    />
                  </div>
                )}
              </div>
            )}

            {step === 4 && (
              <div className="space-y-6">
                <div className="bg-muted/50 p-4 rounded-xl space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Service</span>
                    <span className="font-bold">{service.name}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Provider</span>
                    <span className="font-bold">{providers.find(p => p.id === selectedProvider)?.name || "Auto-assigned"}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Date & Time</span>
                    <span className="font-bold">{date?.toLocaleDateString()} at {selectedSlot}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Location / Venue</span>
                    <span className="font-bold">{service.location || "Online Appointment"}</span>
                  </div>
                  {capacity > 1 && (
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Guests</span>
                      <span className="font-bold">{capacity} People</span>
                    </div>
                  )}
                  <div className="border-t pt-2 flex justify-between font-bold text-lg">
                    <span>Total</span>
                    <span>{fmtMoney(service.price_cents)}</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <Label>Payment Method</Label>
                  <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod} className="grid grid-cols-2 gap-4">
                    <div className="flex items-center space-x-2 border p-3 rounded-lg cursor-pointer">
                      <RadioGroupItem value="card" id="card" />
                      <Label htmlFor="card" className="cursor-pointer">Credit/Debit</Label>
                    </div>
                    <div className="flex items-center space-x-2 border p-3 rounded-lg cursor-pointer">
                      <RadioGroupItem value="upi" id="upi" />
                      <Label htmlFor="upi" className="cursor-pointer">UPI</Label>
                    </div>
                  </RadioGroup>
                  
                  {paymentMethod === "card" && (
                    <div className="space-y-3 p-4 border rounded-xl bg-muted/20">
                      <div className="space-y-1">
                        <Label className="text-[10px] uppercase font-bold text-muted-foreground">Card Number</Label>
                        <Input placeholder="#### #### #### ####" />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1">
                          <Label className="text-[10px] uppercase font-bold text-muted-foreground">Expiry</Label>
                          <Input placeholder="MM/YY" />
                        </div>
                        <div className="space-y-1">
                          <Label className="text-[10px] uppercase font-bold text-muted-foreground">CVV</Label>
                          <Input type="password" placeholder="***" />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </CardContent>
          <CardFooter className="flex justify-between border-t p-6">
            <Button variant="outline" disabled={step === 0} onClick={prevStep}>
              Back
            </Button>
            {step < steps.length - 1 ? (
              <Button 
                onClick={nextStep} 
                disabled={
                  (step === 0 && !selectedProvider && assignmentMode === "byVisitor") ||
                  (step === 1 && !date) ||
                  (step === 2 && !selectedSlot)
                }
              >
                Continue <ChevronRight className="h-4 w-4 ml-2" />
              </Button>
            ) : (
              <Button className="bg-primary hover:bg-primary/90" onClick={() => createBooking.mutate()} disabled={createBooking.isPending}>
                {createBooking.isPending ? "Processing..." : `Pay & Confirm ${fmtMoney(service.price_cents)}`}
              </Button>
            )}
          </CardFooter>
        </Card>
      </main>
    </div>
  );
}