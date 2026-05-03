import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { api } from "@/api/api";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Check, ChevronLeft, ChevronRight, Clock, MapPin, Calendar, Sparkles, AlertCircle } from "lucide-react";
import { toast } from "sonner";
import { useAuthStore } from "@/stores/auth-store";
import { Calendar as CalendarUI } from "@/components/ui/calendar";

export const Route = createFileRoute("/book/reschedule/$appointmentId")({
  component: RescheduleWizard,
});

function RescheduleWizard() {
  const { appointmentId } = Route.useParams();
  const navigate = useNavigate();
  const qc = useQueryClient();
  const { user } = useAuthStore();
  
  const { data: appointment, isLoading: isLoadingAppt } = useQuery({
    queryKey: ["appointment", appointmentId],
    queryFn: async () => {
      const appts = await api.listAppointments();
      return appts.find(a => a.id === appointmentId);
    }
  });

  const [step, setStep] = useState(0);
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);

  // Mock slots
  const slots = ["09:00 AM", "10:00 AM", "11:00 AM", "02:00 PM", "03:00 PM", "04:00 PM"];

  const steps = [
    { title: "Choose New Date", id: "date" },
    { title: "Choose New Time", id: "time" },
    { title: "Confirm Change", id: "confirm" },
  ];

  const nextStep = () => setStep(s => s + 1);
  const prevStep = () => setStep(s => s - 1);

  const updateBooking = useMutation({
    mutationFn: async () => {
      if (!date || !selectedSlot || !appointment || !appointment.service) return;
      
      const timeParts = selectedSlot.match(/(\d+):(\d+)\s(AM|PM)/);
      if (!timeParts) return;
      
      let hours = parseInt(timeParts[1]);
      const minutes = parseInt(timeParts[2]);
      if (timeParts[3] === "PM" && hours < 12) hours += 12;
      if (timeParts[3] === "AM" && hours === 12) hours = 0;
      
      const start = new Date(date);
      start.setHours(hours, minutes, 0, 0);
      const end = new Date(start.getTime() + (appointment.service.duration_minutes || 30) * 60000);

      return api.updateAppointment(appointment.id, {
        start_at: start.toISOString(),
        end_at: end.toISOString(),
        status: "confirmed", // Reset to confirmed on reschedule
      });
    },
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["appointments"] });
      toast.success("Appointment rescheduled successfully!");
      navigate({ to: "/profile" });
    },
    onError: (e: Error) => toast.error(e.message),
  });

  if (isLoadingAppt) return <div className="p-20 text-center">Loading...</div>;
  if (!appointment) return <div className="p-20 text-center">Appointment not found.</div>;
  if (appointment.status === "cancelled") return (
    <div className="p-20 text-center space-y-4">
      <AlertCircle className="h-12 w-12 text-destructive mx-auto" />
      <h2 className="text-xl font-bold">Cannot Reschedule</h2>
      <p className="text-muted-foreground">This appointment has already been cancelled.</p>
      <Button onClick={() => navigate({ to: "/profile" })}>Back to Profile</Button>
    </div>
  );

  return (
    <div className="min-h-screen bg-muted/30 pb-20">
      <header className="border-b bg-background/80 backdrop-blur sticky top-0 z-10">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Button variant="ghost" size="sm" onClick={() => navigate({ to: "/profile" })}>
            <ChevronLeft className="h-4 w-4 mr-2" /> Back to Profile
          </Button>
          <div className="text-sm font-medium">Rescheduling {appointment.service?.name}</div>
          <div className="w-24" />
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-xl">
        <div className="mb-8">
           <div className="flex items-center gap-4 p-4 bg-amber-50 border border-amber-200 rounded-xl text-amber-800 mb-6">
              <AlertCircle className="h-5 w-5 shrink-0" />
              <div className="text-sm">
                 You are changing your appointment currently set for <b>{new Date(appointment.start_at).toLocaleDateString()}</b> at <b>{new Date(appointment.start_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</b>.
              </div>
           </div>

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
              <div className="flex flex-col items-center">
                <CalendarUI
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  disabled={(d) => d < new Date(new Date().setHours(0,0,0,0))}
                  className="rounded-md border shadow-sm"
                />
              </div>
            )}

            {step === 1 && (
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
            )}

            {step === 2 && (
              <div className="space-y-6">
                <div className="bg-muted/50 p-5 rounded-xl space-y-4">
                  <div className="flex items-center gap-3">
                    <Calendar className="h-5 w-5 text-primary" />
                    <div>
                      <div className="text-xs text-muted-foreground uppercase font-bold">New Date</div>
                      <div className="font-bold">{date?.toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-primary" />
                    <div>
                      <div className="text-xs text-muted-foreground uppercase font-bold">New Time</div>
                      <div className="font-bold">{selectedSlot}</div>
                    </div>
                  </div>
                  <div className="border-t pt-4 flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-primary" />
                    <div>
                      <div className="text-xs text-muted-foreground uppercase font-bold">Venue</div>
                      <div className="font-bold">{appointment.service?.location || "Online Appointment"}</div>
                    </div>
                  </div>
                </div>
                
                <p className="text-sm text-center text-muted-foreground">
                  Confirming this change will update your appointment immediately.
                </p>
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
                  (step === 0 && !date) ||
                  (step === 1 && !selectedSlot)
                }
              >
                Continue <ChevronRight className="h-4 w-4 ml-2" />
              </Button>
            ) : (
              <Button className="w-full sm:w-auto" onClick={() => updateBooking.mutate()} disabled={updateBooking.isPending}>
                {updateBooking.isPending ? "Updating..." : "Confirm New Schedule"}
              </Button>
            )}
          </CardFooter>
        </Card>
      </main>
    </div>
  );
}