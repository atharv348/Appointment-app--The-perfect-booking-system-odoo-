import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { api } from "@/api/api";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Check, ChevronLeft, ChevronRight, GripVertical } from "lucide-react";
import { DragDropContext, Droppable, Draggable, type DropResult } from "@hello-pangea/dnd";
import { toast } from "sonner";
import { fmtMoney } from "@/lib/format";

export const Route = createFileRoute("/app/booking")({ component: Booking });

const defaultQuestions = [
  "How did you hear about us?",
  "Any allergies or sensitivities?",
  "Preferred contact method?",
  "Anything we should know in advance?",
];

function Booking() {
  const navigate = useNavigate();
  const qc = useQueryClient();
  const { data: services = [] } = useQuery({ queryKey: ["services"], queryFn: api.listServices });
  const { data: customers = [] } = useQuery({ queryKey: ["customers"], queryFn: api.listCustomers });

  const [step, setStep] = useState(0);
  const [serviceId, setServiceId] = useState("");
  const [customerId, setCustomerId] = useState("");
  const [newCustomer, setNewCustomer] = useState({ name: "", email: "", phone: "" });
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [questions, setQuestions] = useState(defaultQuestions);
  const [answers, setAnswers] = useState<Record<number, string>>({});

  const service = useMemo(() => services.find((s) => s.id === serviceId), [services, serviceId]);

  const create = useMutation({
    mutationFn: async () => {
      let custId = customerId;
      if (!custId && newCustomer.name) {
        const c = await api.createCustomer(newCustomer);
        custId = c.id;
      }
      const start = new Date(`${date}T${time}`);
      const end = new Date(start.getTime() + (service?.duration_minutes ?? 30) * 60000);
      const notes = questions.map((q, i) => answers[i] ? `${q}\n${answers[i]}` : "").filter(Boolean).join("\n\n");
      return api.createAppointment({
        customer_id: custId || null,
        service_id: serviceId || null,
        start_at: start.toISOString(),
        end_at: end.toISOString(),
        status: "confirmed",
        notes,
        price_cents: service?.price_cents ?? 0,
      });
    },
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["appointments"] });
      toast.success("Booking created");
      navigate({ to: "/app/appointments" });
    },
    onError: (e: Error) => toast.error(e.message),
  });

  const onDragEnd = (r: DropResult) => {
    if (!r.destination) return;
    const arr = Array.from(questions);
    const [m] = arr.splice(r.source.index, 1);
    arr.splice(r.destination.index, 0, m);
    setQuestions(arr);
  };

  const steps = ["Service", "Customer", "Date & time", "Intake", "Review"];

  const canNext =
    (step === 0 && !!serviceId) ||
    (step === 1 && (!!customerId || newCustomer.name.length > 0)) ||
    (step === 2 && !!date && !!time) ||
    step === 3 || step === 4;

  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">New booking</h1>
        <p className="text-sm text-muted-foreground">Build the booking step by step.</p>
      </div>

      <div className="flex items-center gap-2">
        {steps.map((s, i) => (
          <div key={s} className="flex flex-1 items-center">
            <div className={`flex h-8 w-8 items-center justify-center rounded-full border text-xs font-medium ${i <= step ? "border-primary bg-primary text-primary-foreground" : "border-border bg-muted text-muted-foreground"}`}>
              {i < step ? <Check className="h-4 w-4" /> : i + 1}
            </div>
            <span className={`ml-2 hidden text-xs sm:inline ${i === step ? "font-medium" : "text-muted-foreground"}`}>{s}</span>
            {i < steps.length - 1 && <div className="mx-2 h-px flex-1 bg-border" />}
          </div>
        ))}
      </div>

      <Card>
        <CardHeader><CardTitle>{steps[step]}</CardTitle></CardHeader>
        <CardContent className="space-y-4">
          {step === 0 && (
            <div className="grid gap-3 sm:grid-cols-2">
              {services.length === 0 && <p className="text-sm text-muted-foreground">No services yet. Add one in Services first.</p>}
              {services.map((s) => (
                <button key={s.id} onClick={() => setServiceId(s.id)}
                  className={`rounded-lg border p-4 text-left transition ${serviceId === s.id ? "border-primary ring-2 ring-primary/20" : "hover:border-foreground/30"}`}>
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="font-medium">{s.name}</p>
                      <p className="text-xs text-muted-foreground">{s.duration_minutes} min</p>
                    </div>
                    <Badge variant="secondary">{fmtMoney(s.price_cents)}</Badge>
                  </div>
                </button>
              ))}
            </div>
          )}

          {step === 1 && (
            <div className="space-y-4">
              <div className="space-y-2">
                <Label>Existing customer</Label>
                <Select value={customerId} onValueChange={(v) => { setCustomerId(v); setNewCustomer({ name: "", email: "", phone: "" }); }}>
                  <SelectTrigger><SelectValue placeholder="Select…" /></SelectTrigger>
                  <SelectContent>
                    {customers.map((c) => <SelectItem key={c.id} value={c.id}>{c.name}</SelectItem>)}
                  </SelectContent>
                </Select>
              </div>
              <div className="text-center text-xs text-muted-foreground">— or create new —</div>
              <div className="space-y-3">
                <Input placeholder="Name" value={newCustomer.name} onChange={(e) => { setNewCustomer({ ...newCustomer, name: e.target.value }); setCustomerId(""); }} />
                <Input placeholder="Email" value={newCustomer.email} onChange={(e) => setNewCustomer({ ...newCustomer, email: e.target.value })} />
                <Input placeholder="Phone" value={newCustomer.phone} onChange={(e) => setNewCustomer({ ...newCustomer, phone: e.target.value })} />
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="space-y-2">
                <Label>Date</Label>
                <Input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
              </div>
              <div className="space-y-2">
                <Label>Time</Label>
                <Input type="time" value={time} onChange={(e) => setTime(e.target.value)} />
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-3">
              <p className="text-xs text-muted-foreground">Drag to reorder. Answers are optional.</p>
              <DragDropContext onDragEnd={onDragEnd}>
                <Droppable droppableId="q">
                  {(p) => (
                    <div ref={p.innerRef} {...p.droppableProps} className="space-y-2">
                      {questions.map((q, i) => (
                        <Draggable key={q} draggableId={q} index={i}>
                          {(prov) => (
                            <div ref={prov.innerRef} {...prov.draggableProps} className="flex gap-2 rounded-lg border bg-card p-3">
                              <div {...prov.dragHandleProps} className="mt-2 text-muted-foreground"><GripVertical className="h-4 w-4" /></div>
                              <div className="flex-1">
                                <Label className="text-xs">{q}</Label>
                                <Input value={answers[i] ?? ""} onChange={(e) => setAnswers({ ...answers, [i]: e.target.value })} className="mt-1" />
                              </div>
                            </div>
                          )}
                        </Draggable>
                      ))}
                      {p.placeholder}
                    </div>
                  )}
                </Droppable>
              </DragDropContext>
            </div>
          )}

          {step === 4 && (
            <div className="space-y-3 text-sm">
              <Row label="Service" value={service ? `${service.name} · ${fmtMoney(service.price_cents)}` : "—"} />
              <Row label="Customer" value={customerId ? customers.find((c) => c.id === customerId)?.name ?? "—" : newCustomer.name || "—"} />
              <Row label="Date" value={date && time ? `${date} at ${time}` : "—"} />
              <Row label="Duration" value={`${service?.duration_minutes ?? 30} min`} />
            </div>
          )}
        </CardContent>
      </Card>

      <div className="flex justify-between">
        <Button variant="outline" disabled={step === 0} onClick={() => setStep((s) => s - 1)}>
          <ChevronLeft className="h-4 w-4" /> Back
        </Button>
        {step < steps.length - 1 ? (
          <Button disabled={!canNext} onClick={() => setStep((s) => s + 1)}>
            Next <ChevronRight className="h-4 w-4" />
          </Button>
        ) : (
          <Button disabled={create.isPending} onClick={() => create.mutate()}>
            {create.isPending ? "Creating…" : "Confirm booking"}
          </Button>
        )}
      </div>
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between border-b py-2 last:border-0">
      <span className="text-muted-foreground">{label}</span>
      <span className="font-medium">{value}</span>
    </div>
  );
}
