import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { api } from "@/api/api";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, TrendingUp, Users, Clock, Calendar } from "lucide-react";
import { fmtMoney, downloadCsv } from "@/lib/format";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, LineChart, Line, Legend } from "recharts";

export const Route = createFileRoute("/app/reports")({ component: Reports });

function Reports() {
  const { data: appts = [] } = useQuery({ queryKey: ["appointments"], queryFn: api.listAppointments });
  const { data: payments = [] } = useQuery({ queryKey: ["payments"], queryFn: api.listPayments });

  // Bookings per day (last 7 days)
  const last7Days = Array.from({ length: 7 }).map((_, i) => {
    const d = new Date();
    d.setDate(d.getDate() - (6 - i));
    const count = appts.filter(a => new Date(a.start_at).toDateString() === d.toDateString()).length;
    return { name: d.toLocaleDateString(undefined, { weekday: "short" }), bookings: count };
  });

  // Bookings per type (last 30 days) - using mock logic for "type" if not present
  const last30Days = Array.from({ length: 30 }).map((_, i) => {
    const d = new Date();
    d.setDate(d.getDate() - (29 - i));
    const count = appts.filter(a => new Date(a.start_at).toDateString() === d.toDateString()).length;
    return { name: d.toLocaleDateString(undefined, { month: "short", day: "numeric" }), count };
  });

  // Peak Booking Hour
  const hourMap: Record<number, number> = {};
  appts.forEach(a => {
    const h = new Date(a.start_at).getHours();
    hourMap[h] = (hourMap[h] ?? 0) + 1;
  });
  const peakHour = Object.entries(hourMap).sort((a, b) => b[1] - a[1])[0]?.[0] || "—";
  const peakHourStr = peakHour !== "—" ? `${peakHour}:00` : "—";

  // Provider Utilisation (Mocked at 78%)
  const utilisation = "78%";

  const stats = [
    { label: "Total Appointments", value: appts.length, icon: Calendar, color: "text-blue-500" },
    { label: "Peak Booking Hour", value: peakHourStr, icon: Clock, color: "text-orange-500" },
    { label: "Provider Utilisation", value: utilisation, icon: TrendingUp, color: "text-green-500" },
  ];

  const exportAll = () => {
    downloadCsv("appointments_report.csv", appts.map((a: any) => ({
      date: a.start_at,
      customer: a.customer?.name ?? "",
      service: a.service?.name ?? "",
      status: a.status,
      price: (a.price_cents / 100).toFixed(2),
    })));
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Analytics & Reports</h1>
          <p className="text-sm text-muted-foreground">Deep dive into your business performance.</p>
        </div>
        <Button variant="outline" onClick={exportAll}><Download className="mr-2 h-4 w-4" /> Export Data</Button>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {stats.map((s) => (
          <Card key={s.label}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">{s.label}</CardTitle>
              <s.icon className={`h-4 w-4 ${s.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{s.value}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Daily Bookings · Last 7 Days</CardTitle>
          </CardHeader>
          <CardContent className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={last7Days}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--color-border)" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} fontSize={12} />
                <YAxis axisLine={false} tickLine={false} fontSize={12} />
                <Tooltip 
                  contentStyle={{ background: "var(--color-card)", border: "1px solid var(--color-border)", borderRadius: 8 }}
                  cursor={{ fill: "var(--color-muted)", opacity: 0.4 }}
                />
                <Bar dataKey="bookings" fill="var(--color-primary)" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Booking Volume · Last 30 Days</CardTitle>
          </CardHeader>
          <CardContent className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={last30Days}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--color-border)" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} fontSize={10} interval={5} />
                <YAxis axisLine={false} tickLine={false} fontSize={12} />
                <Tooltip contentStyle={{ background: "var(--color-card)", border: "1px solid var(--color-border)", borderRadius: 8 }} />
                <Line type="monotone" dataKey="count" stroke="var(--color-primary)" strokeWidth={2} dot={{ r: 4 }} activeDot={{ r: 6 }} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
