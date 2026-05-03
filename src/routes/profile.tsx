import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { api, type Appointment } from "@/api/api";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { CalendarDays, Clock, MapPin, ChevronRight, XCircle, RefreshCw, Sparkles } from "lucide-react";
import { toast } from "sonner";
import { useAuthStore } from "@/stores/auth-store";
import { fmtDateTime, fmtMoney } from "@/lib/format";
import { Link } from "@tanstack/react-router";

export const Route = createFileRoute("/profile")({ component: CustomerProfile });

function CustomerProfile() {
  const qc = useQueryClient();
  const { user, profile } = useAuthStore();
  const [form, setForm] = useState({ full_name: "", phone: "" });

  const { data: allAppointments = [] } = useQuery({ 
    queryKey: ["appointments"], 
    queryFn: api.listAppointments 
  });

  // Filter for current customer's bookings
  const myBookings = allAppointments.filter(a => a.customer_id === user?.id || a.owner_id === user?.id); // owner_id check for mock simplicity

  const upcoming = myBookings.filter(a => new Date(a.start_at) >= new Date() && a.status !== "cancelled");
  const past = myBookings.filter(a => new Date(a.start_at) < new Date() || a.status === "cancelled");

  useEffect(() => {
    if (profile) setForm({
      full_name: profile.full_name ?? "",
      phone: profile.phone ?? "",
    });
  }, [profile]);

  const saveProfile = useMutation({
    mutationFn: () => api.updateProfile(form),
    onSuccess: () => { qc.invalidateQueries({ queryKey: ["profile"] }); toast.success("Profile updated"); },
  });

  const cancelBooking = useMutation({
    mutationFn: (id: string) => api.updateAppointment(id, { status: "cancelled" }),
    onSuccess: () => { qc.invalidateQueries({ queryKey: ["appointments"] }); toast.success("Booking cancelled"); },
  });

  const initials = (form.full_name || user?.email || "U").slice(0, 2).toUpperCase();

  return (
    <div className="min-h-screen bg-muted/30">
      <header className="border-b bg-background/80 backdrop-blur sticky top-0 z-10">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <Sparkles className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">Appointmate</span>
          </Link>
          <Button variant="outline" size="sm" onClick={() => useAuthStore.getState().signOut()}>Sign out</Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="grid gap-8 md:grid-cols-[300px_1fr]">
          <div className="space-y-6">
            <Card>
              <CardHeader className="text-center pb-2">
                <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                  <Avatar className="h-20 w-20"><AvatarFallback className="text-2xl">{initials}</AvatarFallback></Avatar>
                </div>
                <CardTitle>{form.full_name || "My Account"}</CardTitle>
                <p className="text-xs text-muted-foreground">{user?.email}</p>
              </CardHeader>
              <CardContent className="space-y-4 pt-4">
                <div className="space-y-2">
                  <Label>Full Name</Label>
                  <Input value={form.full_name} onChange={(e) => setForm({ ...form, full_name: e.target.value })} />
                </div>
                <div className="space-y-2">
                  <Label>Phone</Label>
                  <Input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
                </div>
                <Button className="w-full" onClick={() => saveProfile.mutate()} disabled={saveProfile.isPending}>
                  Update Profile
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Tabs defaultValue="upcoming">
              <TabsList className="w-full justify-start border-b rounded-none h-auto p-0 bg-transparent">
                <TabsTrigger value="upcoming" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-6 py-3">
                  Upcoming Bookings
                </TabsTrigger>
                <TabsTrigger value="past" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-6 py-3">
                  Past & Cancelled
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="upcoming" className="pt-6 space-y-4">
                {upcoming.length === 0 ? (
                  <div className="text-center py-20 border rounded-xl bg-background">
                    <CalendarDays className="mx-auto h-12 w-12 text-muted-foreground/20" />
                    <p className="mt-2 text-muted-foreground">No upcoming bookings found.</p>
                    <Link to="/"><Button variant="link">Book something now</Button></Link>
                  </div>
                ) : (
                  upcoming.map(a => (
                    <BookingCard key={a.id} appointment={a} onCancel={() => cancelBooking.mutate(a.id)} canManage />
                  ))
                )}
              </TabsContent>

              <TabsContent value="past" className="pt-6 space-y-4">
                {past.length === 0 ? (
                  <div className="text-center py-20 border rounded-xl bg-background">
                    <p className="text-muted-foreground">No past bookings found.</p>
                  </div>
                ) : (
                  past.map(a => (
                    <BookingCard key={a.id} appointment={a} isPast />
                  ))
                )}
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
    </div>
  );
}

function BookingCard({ appointment: a, isPast, onCancel, canManage }: { 
  appointment: Appointment; 
  isPast?: boolean; 
  onCancel?: () => void;
  canManage?: boolean;
}) {
  return (
    <Card className={`overflow-hidden ${isPast ? "opacity-70" : ""}`}>
      <div className="flex flex-col sm:flex-row">
        <div className="flex-1 p-5">
          <div className="flex items-start justify-between gap-4 mb-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <h3 className="font-bold text-lg">{a.service?.name || "Service"}</h3>
                <Badge variant={a.status === "confirmed" ? "default" : a.status === "cancelled" ? "destructive" : "secondary"}>
                  {a.status}
                </Badge>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <span className="flex items-center gap-1"><CalendarDays className="h-3 w-3" /> {new Date(a.start_at).toLocaleDateString()}</span>
                <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {new Date(a.start_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
              </div>
            </div>
            <div className="text-right">
              <div className="font-bold text-lg">{fmtMoney(a.price_cents)}</div>
              <div className="text-xs text-muted-foreground">{a.service?.duration_minutes} min</div>
            </div>
          </div>
          
          <div className="flex items-center gap-4 pt-4 border-t text-sm">
            <div className="flex items-center gap-1.5 text-muted-foreground">
              <MapPin className="h-3 w-3" />
              {a.service?.location || "Online"}
            </div>
          </div>
        </div>
        
        {canManage && (
          <div className="bg-muted/50 border-t sm:border-t-0 sm:border-l p-4 flex sm:flex-col gap-2 justify-center min-w-[150px]">
            <Link to="/book/reschedule/$appointmentId" params={{ appointmentId: a.id }} className="w-full">
              <Button variant="outline" size="sm" className="w-full gap-2">
                <RefreshCw className="h-3 w-3" /> Reschedule
              </Button>
            </Link>
            <Button variant="ghost" size="sm" className="w-full gap-2 text-destructive hover:text-destructive hover:bg-destructive/10" onClick={onCancel}>
              <XCircle className="h-3 w-3" /> Cancel
            </Button>
          </div>
        )}
      </div>
    </Card>
  );
}