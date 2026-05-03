import { createFileRoute } from "@tanstack/react-router";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { useAuthStore } from "@/stores/auth-store";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export const Route = createFileRoute("/app/settings")({ component: Settings });

function Settings() {
  const signOut = useAuthStore((s) => s.signOut);
  const [dark, setDark] = useState(false);
  const [notif, setNotif] = useState(true);
  const [reminders, setReminders] = useState(true);

  useEffect(() => {
    const saved = localStorage.getItem("theme") === "dark";
    setDark(saved);
    document.documentElement.classList.toggle("dark", saved);
  }, []);

  const toggleDark = (v: boolean) => {
    setDark(v);
    localStorage.setItem("theme", v ? "dark" : "light");
    document.documentElement.classList.toggle("dark", v);
  };

  return (
    <div className="mx-auto max-w-2xl space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
        <p className="text-sm text-muted-foreground">Preferences and workspace.</p>
      </div>

      <Card>
        <CardHeader><CardTitle>Appearance</CardTitle></CardHeader>
        <CardContent className="space-y-3">
          <Row label="Dark mode" checked={dark} onChange={toggleDark} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader><CardTitle>Notifications</CardTitle></CardHeader>
        <CardContent className="space-y-3">
          <Row label="Email notifications" checked={notif} onChange={setNotif} />
          <Row label="Booking reminders" checked={reminders} onChange={setReminders} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader><CardTitle>Account</CardTitle></CardHeader>
        <CardContent className="space-y-3">
          <Button variant="outline" onClick={() => { signOut(); toast.success("Signed out"); }}>Sign out</Button>
        </CardContent>
      </Card>
    </div>
  );
}

function Row({ label, checked, onChange }: { label: string; checked: boolean; onChange: (v: boolean) => void }) {
  return (
    <div className="flex items-center justify-between rounded-lg border p-3">
      <Label>{label}</Label>
      <Switch checked={checked} onCheckedChange={onChange} />
    </div>
  );
}
