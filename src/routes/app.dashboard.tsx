import { createFileRoute } from "@tanstack/react-router";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { api, type Profile } from "@/api/api";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Users, UserCheck, Briefcase, CalendarCheck, ShieldAlert } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { useAuthStore } from "@/stores/auth-store";

export const Route = createFileRoute("/app/dashboard")({
  component: SystemDashboard,
});

function SystemDashboard() {
  const qc = useQueryClient();
  const { profile: currentProfile } = useAuthStore();

  // Fetch all profiles (only admins can do this via RLS, or we mock if RLS is tight)
  const { data: profiles = [], isLoading } = useQuery({
    queryKey: ["admin_profiles"],
    queryFn: async () => {
      const { data, error } = await supabase.from("profiles").select("*");
      if (error) throw error;
      return data as Profile[];
    }
  });

  const { data: services = [] } = useQuery({ queryKey: ["services"], queryFn: api.listServices });
  const { data: appointments = [] } = useQuery({ queryKey: ["appointments"], queryFn: api.listAppointments });

  const updateProfile = useMutation({
    mutationFn: async ({ id, updates }: { id: string; updates: Partial<Profile> }) => {
      const { data, error } = await supabase.from("profiles").update(updates).eq("id", id).select().single();
      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["admin_profiles"] });
      toast.success("Profile updated");
    },
    onError: (e: Error) => toast.error(e.message)
  });

  const stats = [
    { label: "Total Users", value: profiles.length, icon: Users },
    { label: "Total Providers", value: profiles.filter(p => p.role === "organiser").length, icon: UserCheck },
    { label: "Total Appointments", value: services.length, icon: Briefcase },
    { label: "Active Today", value: appointments.filter(a => new Date(a.start_at).toDateString() === new Date().toDateString()).length, icon: CalendarCheck },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight flex items-center gap-2">
          <ShieldAlert className="h-8 w-8 text-destructive" />
          System Dashboard
        </h1>
        <p className="text-sm text-muted-foreground">Global system management and user control.</p>
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

      <Card>
        <CardHeader>
          <CardTitle>User Management</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>User</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {profiles.map((p) => (
                <TableRow key={p.id}>
                  <TableCell>
                    <div className="flex flex-col">
                      <span className="font-medium">{p.full_name || "Unnamed"}</span>
                      <span className="text-xs text-muted-foreground">{p.email}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Select 
                      value={p.role || "customer"} 
                      onValueChange={(v) => updateProfile.mutate({ id: p.id, updates: { role: v as any } })}
                      disabled={p.id === currentProfile?.id}
                    >
                      <SelectTrigger className="w-[130px] h-8 text-xs capitalize">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="admin">Admin</SelectItem>
                        <SelectItem value="organiser">Organiser</SelectItem>
                        <SelectItem value="customer">Customer</SelectItem>
                      </SelectContent>
                    </Select>
                  </TableCell>
                  <TableCell>
                    <Badge variant={p.status === "active" ? "default" : "destructive"} className="capitalize">
                      {p.status || "active"}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex items-center justify-end gap-2">
                       <span className="text-xs text-muted-foreground">{p.status === "deactivated" ? "Deactivated" : "Active"}</span>
                       <Switch 
                         checked={p.status !== "deactivated"} 
                         onCheckedChange={(v) => updateProfile.mutate({ id: p.id, updates: { status: v ? "active" : "deactivated" } })}
                         disabled={p.id === currentProfile?.id}
                       />
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}