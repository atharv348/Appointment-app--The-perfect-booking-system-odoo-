import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { api } from "@/api/api";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { toast } from "sonner";
import { useAuthStore } from "@/stores/auth-store";

export const Route = createFileRoute("/app/profile")({ component: Profile });

function Profile() {
  const qc = useQueryClient();
  const user = useAuthStore((s) => s.user);
  const { data: profile } = useQuery({ queryKey: ["profile"], queryFn: api.getProfile });
  const [form, setForm] = useState({ full_name: "", business_name: "", phone: "" });

  useEffect(() => {
    if (profile) setForm({
      full_name: profile.full_name ?? "",
      business_name: profile.business_name ?? "",
      phone: profile.phone ?? "",
    });
  }, [profile]);

  const save = useMutation({
    mutationFn: () => api.updateProfile(form),
    onSuccess: () => { qc.invalidateQueries({ queryKey: ["profile"] }); toast.success("Saved"); },
    onError: (e: Error) => toast.error(e.message),
  });

  const initials = (form.full_name || user?.email || "U").slice(0, 2).toUpperCase();

  return (
    <div className="mx-auto max-w-2xl space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Profile</h1>
        <p className="text-sm text-muted-foreground">How you appear to your clients.</p>
      </div>

      <Card>
        <CardHeader><CardTitle>Personal details</CardTitle></CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center gap-4">
            <Avatar className="h-16 w-16"><AvatarFallback className="text-lg">{initials}</AvatarFallback></Avatar>
            <div>
              <p className="text-sm font-medium">{user?.email}</p>
              <p className="text-xs text-muted-foreground">Member since {profile?.created_at ? new Date(profile.created_at).toLocaleDateString() : "—"}</p>
            </div>
          </div>
          <div className="space-y-2"><Label>Full name</Label><Input value={form.full_name} onChange={(e) => setForm({ ...form, full_name: e.target.value })} /></div>
          <div className="space-y-2"><Label>Business name</Label><Input value={form.business_name} onChange={(e) => setForm({ ...form, business_name: e.target.value })} /></div>
          <div className="space-y-2"><Label>Phone</Label><Input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} /></div>
          <div className="flex justify-end">
            <Button onClick={() => save.mutate()} disabled={save.isPending}>Save changes</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
