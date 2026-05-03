import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "@/api/api";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Calendar, dateFnsLocalizer, type View } from "react-big-calendar";
import { format, parse, startOfWeek, getDay } from "date-fns";
import { enUS } from "date-fns/locale/en-US";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { AppointmentDrawer } from "@/components/appointment-drawer";
import { fmtDateTime, fmtMoney } from "@/lib/format";
import { Search, Filter, CheckCircle, XCircle, ChevronDown, ChevronUp, BarChart } from "lucide-react";
import { toast } from "sonner";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export const Route = createFileRoute("/app/appointments")({ component: Appointments });

const locales = { "en-US": enUS };
const localizer = dateFnsLocalizer({ format, parse, startOfWeek, getDay, locales });

function Appointments() {
  const qc = useQueryClient();
  const { data: appts = [] } = useQuery({ queryKey: ["appointments"], queryFn: api.listAppointments });
  const [selected, setSelected] = useState<any>(null);
  const [drawer, setDrawer] = useState(false);
  const [search, setSearch] = useState("");
  const [view, setView] = useState<View>("week");
  const [date, setDate] = useState(new Date());
  const [statusFilter, setStatusFilter] = useState("all");
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const confirm = useMutation({
    mutationFn: (id: string) => api.updateAppointment(id, { status: "confirmed" }),
    onSuccess: () => { qc.invalidateQueries({ queryKey: ["appointments"] }); toast.success("Booking confirmed"); },
  });

  const cancel = useMutation({
    mutationFn: (id: string) => api.updateAppointment(id, { status: "cancelled" }),
    onSuccess: () => { qc.invalidateQueries({ queryKey: ["appointments"] }); toast.success("Booking cancelled"); },
  });

  const filtered = appts.filter((a: any) => {
    const q = search.toLowerCase();
    const matchesSearch = !q ||
      a.customer?.name?.toLowerCase().includes(q) ||
      a.service?.name?.toLowerCase().includes(q) ||
      a.status.toLowerCase().includes(q);
    
    const matchesStatus = statusFilter === "all" || a.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });

  const events = filtered.map((a: any) => ({
    id: a.id,
    title: `${a.customer?.name ?? "Walk-in"} · ${a.service?.name ?? ""}`,
    start: new Date(a.start_at),
    end: new Date(a.end_at),
    resource: a,
  }));

  const open = (a: any) => { setSelected(a); setDrawer(true); };

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Meetings</h1>
          <p className="text-sm text-muted-foreground">See all bookings across all appointment types.</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative w-64">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search customers..." className="pl-9" />
          </div>
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-[140px]">
              <Filter className="h-4 w-4 mr-2" />
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="confirmed">Confirmed</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="cancelled">Cancelled</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <Tabs defaultValue="table">
        <TabsList>
          <TabsTrigger value="table">List</TabsTrigger>
          <TabsTrigger value="calendar">Calendar</TabsTrigger>
          <TabsTrigger value="graph" disabled className="opacity-50">
             <BarChart className="h-4 w-4 mr-2" /> Graph
          </TabsTrigger>
        </TabsList>

        <TabsContent value="table" className="mt-4">
          <Card>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="border-b text-left text-muted-foreground">
                  <tr>
                    <th className="px-4 py-3 font-medium w-10"></th>
                    <th className="px-4 py-3 font-medium">Customer</th>
                    <th className="px-4 py-3 font-medium">Service</th>
                    <th className="px-4 py-3 font-medium">Date & Time</th>
                    <th className="px-4 py-3 font-medium">Status</th>
                    <th className="px-4 py-3 font-medium text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {filtered.length === 0 && (
                    <tr><td colSpan={6} className="px-4 py-8 text-center text-muted-foreground">No appointments yet.</td></tr>
                  )}
                  {filtered.map((a: any) => (
                    <React.Fragment key={a.id}>
                      <tr className="hover:bg-muted/30 transition-colors">
                        <td className="px-4 py-3">
                           <Button 
                             size="icon" 
                             variant="ghost" 
                             className="h-6 w-6" 
                             onClick={() => setExpandedId(expandedId === a.id ? null : a.id)}
                           >
                             {expandedId === a.id ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                           </Button>
                        </td>
                        <td className="px-4 py-3 font-medium">{a.customer?.name ?? "Walk-in"}</td>
                        <td className="px-4 py-3">{a.service?.name ?? "—"}</td>
                        <td className="px-4 py-3 text-muted-foreground">{fmtDateTime(a.start_at)}</td>
                        <td className="px-4 py-3">
                          <Badge variant={a.status === "confirmed" ? "default" : a.status === "pending" ? "secondary" : "destructive"} className="capitalize">
                            {a.status}
                          </Badge>
                        </td>
                        <td className="px-4 py-3 text-right">
                          <div className="flex items-center justify-end gap-1">
                            {a.status === "pending" && (
                              <Button size="icon" variant="ghost" className="h-8 w-8 text-success" onClick={() => confirm.mutate(a.id)} title="Confirm">
                                <CheckCircle className="h-4 w-4" />
                              </Button>
                            )}
                            <Button size="icon" variant="ghost" className="h-8 w-8 text-destructive" onClick={() => cancel.mutate(a.id)} title="Cancel">
                              <XCircle className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="sm" onClick={() => open(a)}>Details</Button>
                          </div>
                        </td>
                      </tr>
                      {expandedId === a.id && (
                        <tr className="bg-muted/10">
                          <td colSpan={6} className="px-12 py-4">
                            <div className="grid gap-4 md:grid-cols-2">
                              <div className="space-y-1">
                                <span className="text-[10px] font-bold uppercase text-muted-foreground">Booking Answers</span>
                                <div className="text-sm border rounded-lg p-3 bg-background">
                                  {a.notes || "No additional answers provided."}
                                </div>
                              </div>
                              <div className="space-y-1">
                                <span className="text-[10px] font-bold uppercase text-muted-foreground">Financials</span>
                                <div className="text-sm flex justify-between border rounded-lg p-3 bg-background">
                                   <span>Price Paid</span>
                                   <span className="font-bold">{fmtMoney(a.price_cents)}</span>
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>
                      )}
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="calendar" className="mt-4">
          <Card className="p-4">
            <div style={{ height: 650 }}>
              <Calendar
                localizer={localizer}
                events={events}
                view={view}
                date={date}
                onView={setView}
                onNavigate={setDate}
                views={["month", "week", "day", "agenda"]}
                onSelectEvent={(e: any) => open(e.resource)}
                style={{ height: "100%" }}
              />
            </div>
          </Card>
        </TabsContent>
      </Tabs>

      <AppointmentDrawer appointment={selected} open={drawer} onOpenChange={setDrawer} />
    </div>
  );
}

import React from "react";
