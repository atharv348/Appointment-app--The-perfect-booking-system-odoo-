import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { api } from "@/api/api";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarDays, Users, DollarSign, TrendingUp } from "lucide-react";
import { fmtMoney, fmtDateTime } from "@/lib/format";
import { Badge } from "@/components/ui/badge";
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

export const Route = createFileRoute("/app/")({ component: Overview });

function Overview() {
  const { data: appts = [] } = useQuery({ queryKey: ["appointments"], queryFn: api.listAppointments });
  const { data: customers = [] } = useQuery({ queryKey: ["customers"], queryFn: api.listCustomers });
  const { data: payments = [] } = useQuery({ queryKey: ["payments"], queryFn: api.listPayments });

  const now = new Date();
  const monthStart = new Date(now.getFullYear(), now.getMonth(), 1);
  const todayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const todayEnd = new Date(todayStart.getTime() + 86400000);

  const todayAppts = appts.filter((a) => {
    const d = new Date(a.start_at);
    return d >= todayStart && d < todayEnd;
  });
  const monthRevenue = payments
    .filter((p) => new Date(p.created_at) >= monthStart)
    .reduce((sum, p) => sum + p.amount_cents, 0);

  // Build last 14 days revenue chart
  const chart = Array.from({ length: 14 }).map((_, i) => {
    const d = new Date(todayStart.getTime() - (13 - i) * 86400000);
    const next = new Date(d.getTime() + 86400000);
    const total = payments
      .filter((p) => { const pd = new Date(p.created_at); return pd >= d && pd < next; })
      .reduce((s, p) => s + p.amount_cents, 0) / 100;
    return { date: d.toLocaleDateString(undefined, { month: "short", day: "numeric" }), revenue: total };
  });

  const upcoming = appts
    .filter((a) => new Date(a.start_at) >= now)
    .slice(0, 5);

  const stats = [
    { label: "Today's appointments", value: todayAppts.length, icon: CalendarDays },
    { label: "Customers", value: customers.length, icon: Users },
    { label: "Revenue this month", value: fmtMoney(monthRevenue), icon: DollarSign },
    { label: "Total bookings", value: appts.length, icon: TrendingUp },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Overview</h1>
        <p className="text-sm text-muted-foreground">A snapshot of your studio.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((s) => (
          <Card key={s.label}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">{s.label}</CardTitle>
              <s.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{s.value}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <CardHeader><CardTitle>Revenue · last 14 days</CardTitle></CardHeader>
          <CardContent className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chart}>
                <defs>
                  <linearGradient id="rev" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="var(--color-primary)" stopOpacity={0.4} />
                    <stop offset="95%" stopColor="var(--color-primary)" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
                <XAxis dataKey="date" stroke="var(--color-muted-foreground)" fontSize={11} />
                <YAxis stroke="var(--color-muted-foreground)" fontSize={11} />
                <Tooltip contentStyle={{ background: "var(--color-card)", border: "1px solid var(--color-border)", borderRadius: 8 }} />
                <Area type="monotone" dataKey="revenue" stroke="var(--color-primary)" fill="url(#rev)" />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader><CardTitle>Upcoming</CardTitle></CardHeader>
          <CardContent className="space-y-3">
            {upcoming.length === 0 && <p className="text-sm text-muted-foreground">No upcoming appointments.</p>}
            {upcoming.map((a: any) => (
              <div key={a.id} className="flex items-start justify-between border-b pb-3 last:border-0 last:pb-0">
                <div>
                  <p className="text-sm font-medium">{a.customer?.name ?? "Walk-in"}</p>
                  <p className="text-xs text-muted-foreground">{a.service?.name ?? "Service"}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{fmtDateTime(a.start_at)}</p>
                </div>
                <Badge variant="secondary">{a.status}</Badge>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
