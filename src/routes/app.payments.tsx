import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { api } from "@/api/api";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Plus, Download } from "lucide-react";
import { toast } from "sonner";
import { fmtMoney, fmtDateTime, downloadCsv } from "@/lib/format";

export const Route = createFileRoute("/app/payments")({ component: Payments });

function Payments() {
  const qc = useQueryClient();
  const { data: payments = [] } = useQuery({ queryKey: ["payments"], queryFn: api.listPayments });
  const { data: appts = [] } = useQuery({ queryKey: ["appointments"], queryFn: api.listAppointments });

  const [open, setOpen] = useState(false);
  const blank = { appointment_id: "", amount_cents: 0, method: "cash", status: "paid" };
  const [form, setForm] = useState<any>(blank);

  const save = useMutation({
    mutationFn: () => api.createPayment({
      ...form,
      amount_cents: Math.round(Number(form.amount_cents) * 100),
      appointment_id: form.appointment_id || null,
    }),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["payments"] });
      toast.success("Payment recorded");
      setOpen(false); setForm(blank);
    },
    onError: (e: Error) => toast.error(e.message),
  });

  const total = payments.reduce((s, p) => s + p.amount_cents, 0);

  const exportCsv = () => {
    downloadCsv("payments.csv", payments.map((p: any) => ({
      date: p.created_at,
      amount: (p.amount_cents / 100).toFixed(2),
      method: p.method,
      status: p.status,
      customer: p.appointment?.customer?.name ?? "",
      service: p.appointment?.service?.name ?? "",
    })));
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Payments</h1>
          <p className="text-sm text-muted-foreground">Total recorded: <span className="font-semibold text-foreground">{fmtMoney(total)}</span></p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" onClick={exportCsv}><Download className="mr-1 h-4 w-4" /> Export CSV</Button>
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild><Button><Plus className="mr-1 h-4 w-4" /> Record payment</Button></DialogTrigger>
            <DialogContent>
              <DialogHeader><DialogTitle>Record payment</DialogTitle></DialogHeader>
              <div className="space-y-3">
                <div className="space-y-2">
                  <Label>Linked appointment (optional)</Label>
                  <Select value={form.appointment_id} onValueChange={(v) => {
                    const a: any = appts.find((x) => x.id === v);
                    setForm({ ...form, appointment_id: v, amount_cents: a ? a.price_cents / 100 : form.amount_cents });
                  }}>
                    <SelectTrigger><SelectValue placeholder="None" /></SelectTrigger>
                    <SelectContent>
                      {appts.map((a: any) => (
                        <SelectItem key={a.id} value={a.id}>{a.customer?.name ?? "Walk-in"} · {fmtDateTime(a.start_at)}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2"><Label>Amount ($)</Label><Input type="number" step="0.01" value={form.amount_cents} onChange={(e) => setForm({ ...form, amount_cents: e.target.value })} /></div>
                <div className="space-y-2">
                  <Label>Method</Label>
                  <Select value={form.method} onValueChange={(v) => setForm({ ...form, method: v })}>
                    <SelectTrigger><SelectValue /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="cash">Cash</SelectItem>
                      <SelectItem value="card">Card</SelectItem>
                      <SelectItem value="transfer">Transfer</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setOpen(false)}>Cancel</Button>
                <Button onClick={() => save.mutate()} disabled={!form.amount_cents || save.isPending}>Save</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <Card>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="border-b text-left text-muted-foreground">
              <tr>
                <th className="px-4 py-3 font-medium">Date</th>
                <th className="px-4 py-3 font-medium">Customer</th>
                <th className="px-4 py-3 font-medium">Service</th>
                <th className="px-4 py-3 font-medium">Method</th>
                <th className="px-4 py-3 font-medium">Status</th>
                <th className="px-4 py-3 font-medium text-right">Amount</th>
              </tr>
            </thead>
            <tbody>
              {payments.length === 0 && <tr><td colSpan={6} className="px-4 py-8 text-center text-muted-foreground">No payments yet.</td></tr>}
              {payments.map((p: any) => (
                <tr key={p.id} className="border-b last:border-0">
                  <td className="px-4 py-3">{fmtDateTime(p.created_at)}</td>
                  <td className="px-4 py-3">{p.appointment?.customer?.name ?? "—"}</td>
                  <td className="px-4 py-3">{p.appointment?.service?.name ?? "—"}</td>
                  <td className="px-4 py-3 capitalize">{p.method}</td>
                  <td className="px-4 py-3"><Badge variant="secondary">{p.status}</Badge></td>
                  <td className="px-4 py-3 text-right font-medium">{fmtMoney(p.amount_cents)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
