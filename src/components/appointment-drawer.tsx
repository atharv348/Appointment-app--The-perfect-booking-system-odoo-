import { useState, useEffect } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { api, type Appointment } from "@/api/api";
import {
  Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetFooter,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Trash2 } from "lucide-react";
import { toast } from "sonner";
import { fmtDateTime } from "@/lib/format";

type Props = {
  appointment: (Appointment & { customer?: any; service?: any }) | null;
  open: boolean;
  onOpenChange: (o: boolean) => void;
};

const toLocalInput = (iso: string) => {
  const d = new Date(iso);
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}T${pad(d.getHours())}:${pad(d.getMinutes())}`;
};

export function AppointmentDrawer({ appointment, open, onOpenChange }: Props) {
  const qc = useQueryClient();
  const { data: customers = [] } = useQuery({ queryKey: ["customers"], queryFn: api.listCustomers });
  const { data: services = [] } = useQuery({ queryKey: ["services"], queryFn: api.listServices });

  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [status, setStatus] = useState("confirmed");
  const [notes, setNotes] = useState("");
  const [customerId, setCustomerId] = useState<string>("");
  const [serviceId, setServiceId] = useState<string>("");

  useEffect(() => {
    if (appointment) {
      setStart(toLocalInput(appointment.start_at));
      setEnd(toLocalInput(appointment.end_at));
      setStatus(appointment.status);
      setNotes(appointment.notes ?? "");
      setCustomerId(appointment.customer_id ?? "");
      setServiceId(appointment.service_id ?? "");
    }
  }, [appointment]);

  const updateMut = useMutation({
    mutationFn: (data: any) => api.updateAppointment(appointment!.id, data),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["appointments"] });
      toast.success("Updated");
      onOpenChange(false);
    },
    onError: (e: Error) => toast.error(e.message),
  });

  const delMut = useMutation({
    mutationFn: () => api.deleteAppointment(appointment!.id),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["appointments"] });
      toast.success("Deleted");
      onOpenChange(false);
    },
  });

  if (!appointment) return null;

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="w-full sm:max-w-md">
        <SheetHeader>
          <SheetTitle>Appointment</SheetTitle>
          <SheetDescription>{fmtDateTime(appointment.start_at)}</SheetDescription>
        </SheetHeader>

        <div className="mt-6 space-y-4">
          <div className="space-y-2">
            <Label>Status</Label>
            <Select value={status} onValueChange={setStatus}>
              <SelectTrigger><SelectValue /></SelectTrigger>
              <SelectContent>
                <SelectItem value="confirmed">Confirmed</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
                <SelectItem value="cancelled">Cancelled</SelectItem>
              </SelectContent>
            </Select>
            <Badge variant={status === "completed" ? "default" : status === "cancelled" ? "destructive" : "secondary"}>{status}</Badge>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-2">
              <Label>Start</Label>
              <Input type="datetime-local" value={start} onChange={(e) => setStart(e.target.value)} />
            </div>
            <div className="space-y-2">
              <Label>End</Label>
              <Input type="datetime-local" value={end} onChange={(e) => setEnd(e.target.value)} />
            </div>
          </div>
          <div className="space-y-2">
            <Label>Customer</Label>
            <Select value={customerId} onValueChange={setCustomerId}>
              <SelectTrigger><SelectValue placeholder="Select customer" /></SelectTrigger>
              <SelectContent>
                {customers.map((c) => <SelectItem key={c.id} value={c.id}>{c.name}</SelectItem>)}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label>Service</Label>
            <Select value={serviceId} onValueChange={setServiceId}>
              <SelectTrigger><SelectValue placeholder="Select service" /></SelectTrigger>
              <SelectContent>
                {services.map((s) => <SelectItem key={s.id} value={s.id}>{s.name}</SelectItem>)}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label>Notes</Label>
            <Textarea value={notes} onChange={(e) => setNotes(e.target.value)} rows={4} />
          </div>
        </div>

        <SheetFooter className="mt-6 flex-row justify-between sm:justify-between">
          <Button variant="ghost" size="icon" onClick={() => delMut.mutate()}>
            <Trash2 className="h-4 w-4 text-destructive" />
          </Button>
          <div className="flex gap-2">
            <Button variant="outline" onClick={() => onOpenChange(false)}>Cancel</Button>
            <Button onClick={() => updateMut.mutate({
              start_at: new Date(start).toISOString(),
              end_at: new Date(end).toISOString(),
              status, notes,
              customer_id: customerId || null,
              service_id: serviceId || null,
            })}>Save</Button>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
