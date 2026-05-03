import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { api, type Service } from "@/api/api";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Plus, Pencil, Trash2, Clock, MapPin, Users, Settings2, HelpCircle, Share2 } from "lucide-react";
import { toast } from "sonner";
import { fmtMoney } from "@/lib/format";

export const Route = createFileRoute("/app/services")({ component: Services });

function Services() {
  const qc = useQueryClient();
  const { data: services = [] } = useQuery({ queryKey: ["services"], queryFn: api.listServices });
  const [editing, setEditing] = useState<Service | null>(null);
  const [open, setOpen] = useState(false);
  const blank = { 
    name: "", 
    description: "", 
    duration_minutes: 30, 
    price_cents: 0, 
    category: "", 
    active: true,
    type: "user",
    location: "",
    assignment_mode: "auto",
    manual_confirmation: false,
    advance_payment: false,
    schedule_type: "weekly",
    max_bookings: 1
  };
  const [form, setForm] = useState<any>(blank);

  const save = useMutation({
    mutationFn: async () => {
      const data = { ...form, price_cents: Math.round(Number(form.price_cents) * 100) };
      if (editing) return api.updateService(editing.id, data);
      return api.createService(data);
    },
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["services"] });
      toast.success(editing ? "Updated" : "Created");
      setOpen(false); setEditing(null); setForm(blank);
    },
    onError: (e: Error) => toast.error(e.message),
  });

  const del = useMutation({
    mutationFn: (id: string) => api.deleteService(id),
    onSuccess: () => { qc.invalidateQueries({ queryKey: ["services"] }); toast.success("Deleted"); },
  });

  const edit = (s: Service) => {
    setEditing(s);
    setForm({ ...s, price_cents: s.price_cents / 100 });
    setOpen(true);
  };

  const copyShareLink = (id: string) => {
    const url = `${window.location.origin}/book/${id}`;
    navigator.clipboard.writeText(url);
    toast.success("Private share link copied!");
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Appointments</h1>
          <p className="text-sm text-muted-foreground">Manage your appointment types and booking rules.</p>
        </div>
        <Dialog open={open} onOpenChange={(o) => { setOpen(o); if (!o) { setEditing(null); setForm(blank); } }}>
          <DialogTrigger asChild>
            <Button><Plus className="mr-1 h-4 w-4" /> New appointment</Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader><DialogTitle>{editing ? "Edit" : "New"} appointment type</DialogTitle></DialogHeader>
            <Tabs defaultValue="general" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="general">General</TabsTrigger>
                <TabsTrigger value="rules">Booking Rules</TabsTrigger>
                <TabsTrigger value="questions">Questions</TabsTrigger>
              </TabsList>
              
              <TabsContent value="general" className="space-y-4 pt-4">
                <div className="space-y-2"><Label>Title</Label><Input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="e.g. 1:1 Strategy Session" /></div>
                <div className="space-y-2"><Label>Description</Label><Textarea value={form.description ?? ""} onChange={(e) => setForm({ ...form, description: e.target.value })} /></div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2"><Label>Duration (min)</Label>
                    <Select value={String(form.duration_minutes)} onValueChange={(v) => setForm({ ...form, duration_minutes: Number(v) })}>
                      <SelectTrigger><SelectValue /></SelectTrigger>
                      <SelectContent>
                        {[15, 30, 45, 60, 90, 120].map(m => <SelectItem key={m} value={String(m)}>{m} min</SelectItem>)}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2"><Label>Price (₹)</Label><Input type="number" step="0.01" value={form.price_cents} onChange={(e) => setForm({ ...form, price_cents: e.target.value })} /></div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2"><Label>Type</Label>
                    <Select value={form.type} onValueChange={(v) => setForm({ ...form, type: v })}>
                      <SelectTrigger><SelectValue /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="user">Staff-based</SelectItem>
                        <SelectItem value="resource">Resource-based</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2"><Label>Schedule Type</Label>
                    <Select value={form.schedule_type} onValueChange={(v) => setForm({ ...form, schedule_type: v })}>
                      <SelectTrigger><SelectValue /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="weekly">Weekly (Recurring)</SelectItem>
                        <SelectItem value="flexible">Flexible (Manual)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="space-y-2"><Label>Location</Label><Input value={form.location ?? ""} onChange={(e) => setForm({ ...form, location: e.target.value })} placeholder="Leave blank for Online Appointment" /></div>
              </TabsContent>

              <TabsContent value="rules" className="space-y-4 pt-4">
                <div className="flex items-center justify-between rounded-lg border p-4">
                  <div className="space-y-0.5">
                    <Label>Advance Payment</Label>
                    <p className="text-xs text-muted-foreground">Require payment before booking confirmation</p>
                  </div>
                  <Switch checked={form.advance_payment} onCheckedChange={(v) => setForm({ ...form, advance_payment: v })} />
                </div>
                <div className="flex items-center justify-between rounded-lg border p-4">
                  <div className="space-y-0.5">
                    <Label>Manual Confirmation</Label>
                    <p className="text-xs text-muted-foreground">Bookings stay "Reserved" until you confirm them</p>
                  </div>
                  <Switch checked={form.manual_confirmation} onCheckedChange={(v) => setForm({ ...form, manual_confirmation: v })} />
                </div>
                <div className="space-y-2"><Label>Assignment Mode</Label>
                  <Select value={form.assignment_mode} onValueChange={(v) => setForm({ ...form, assignment_mode: v })}>
                    <SelectTrigger><SelectValue /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="auto">Automatically (System picks first available)</SelectItem>
                      <SelectItem value="byVisitor">By Visitor (Customer selects preferred provider)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Max Bookings per Slot</Label>
                  <Input type="number" min="1" value={form.max_bookings} onChange={(e) => setForm({ ...form, max_bookings: Number(e.target.value) })} />
                </div>
                <div className="flex items-center justify-between rounded-lg border p-3 bg-muted/50">
                  <Label>Published (Visible to customers)</Label>
                  <Switch checked={form.active} onCheckedChange={(v) => setForm({ ...form, active: v })} />
                </div>
              </TabsContent>

              <TabsContent value="questions" className="pt-4 text-center py-10">
                 <HelpCircle className="mx-auto h-12 w-12 text-muted-foreground/20" />
                 <p className="mt-2 text-sm text-muted-foreground">Custom question builder coming soon.</p>
              </TabsContent>
            </Tabs>
            <DialogFooter className="mt-6">
              <Button variant="outline" onClick={() => setOpen(false)}>Cancel</Button>
              <Button onClick={() => save.mutate()} disabled={!form.name || save.isPending}>Save Appointment</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.length === 0 && (
          <Card className="col-span-full p-12 text-center text-muted-foreground">
            No appointments yet. Click "New appointment" to add one.
          </Card>
        )}
        {services.map((s) => (
          <Card key={s.id} className="overflow-hidden transition-all hover:shadow-md">
            <div className="h-3 bg-primary" style={{ opacity: s.active ? 1 : 0.2 }} />
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between gap-2">
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <CardTitle className="truncate text-lg">{s.name}</CardTitle>
                    {!s.active && <Badge variant="outline">Draft</Badge>}
                  </div>
                  <div className="mt-1 flex items-center gap-2 text-xs text-muted-foreground">
                    <Badge variant="secondary" className="capitalize">{s.type || "user"}</Badge>
                    <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {s.duration_minutes}m</span>
                  </div>
                </div>
                <div className="flex gap-1 shrink-0">
                  <Button size="icon" variant="ghost" onClick={() => copyShareLink(s.id)} title="Copy private link"><Share2 className="h-4 w-4" /></Button>
                  <Button size="icon" variant="ghost" onClick={() => edit(s)}><Pencil className="h-4 w-4" /></Button>
                  <Button size="icon" variant="ghost" onClick={() => del.mutate(s.id)}><Trash2 className="h-4 w-4 text-destructive" /></Button>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pb-4">
               <p className="text-sm text-muted-foreground line-clamp-2 min-h-[2.5rem]">
                 {s.description || "No description provided."}
               </p>
               <div className="mt-4 grid grid-cols-2 gap-2">
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground border rounded p-1.5">
                    <MapPin className="h-3 w-3" />
                    <span className="truncate">{s.location || "Online"}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground border rounded p-1.5">
                    <Users className="h-3 w-3" />
                    <span>{s.assignment_mode === "auto" ? "Auto" : "By Visitor"}</span>
                  </div>
               </div>
            </CardContent>
            <div className="flex items-center justify-between border-t bg-muted/30 px-5 py-3 text-sm font-semibold">
              <span className="text-muted-foreground">Price</span>
              <span>{fmtMoney(s.price_cents)}</span>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
