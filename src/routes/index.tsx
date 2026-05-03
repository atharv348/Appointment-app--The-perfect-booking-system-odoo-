import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { CalendarDays, CreditCard, Sparkles, Users, BarChart3, Shield, Search, MapPin, Clock } from "lucide-react";
import { useAuthStore } from "@/stores/auth-store";
import { useQuery } from "@tanstack/react-query";
import { api } from "@/api/api";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  const { user, profile } = useAuthStore();

  if (user && profile?.role === "customer") {
    return <CustomerHome />;
  }

  if (user && (profile?.role === "admin" || profile?.role === "organiser")) {
    return <AppLayoutRedirect />;
  }

  return <Landing />;
}

import { useNavigate } from "@tanstack/react-router";
import { useEffect } from "react";

function AppLayoutRedirect() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate({ to: "/app" });
  }, [navigate]);
  return null;
}

function CustomerHome() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<"all" | "free" | "paid">("all");

  const { data: services = [], isLoading } = useQuery({
    queryKey: ["services"],
    queryFn: api.listServices,
  });

  const filteredServices = services.filter((s) => {
    const matchesSearch = s.name.toLowerCase().includes(search.toLowerCase()) || 
                         (s.description?.toLowerCase().includes(search.toLowerCase()) ?? false);
    
    const isFree = s.price_cents === 0;
    const matchesFilter = filter === "all" || (filter === "free" && isFree) || (filter === "paid" && !isFree);
    
    // In a real app, we'd also filter by s.active/published
    return matchesSearch && matchesFilter && s.active;
  });

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-10 border-b bg-background/80 backdrop-blur">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <Sparkles className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">Appointmate</span>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/profile">
              <Button variant="ghost" size="sm">Profile</Button>
            </Link>
            <Button variant="outline" size="sm" onClick={() => useAuthStore.getState().signOut()}>Sign out</Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8 space-y-4">
          <h1 className="text-3xl font-bold tracking-tight">Book an appointment</h1>
          <p className="text-muted-foreground">Discover and book services from our providers.</p>
          
          <div className="flex flex-col gap-4 md:flex-row md:items-center">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input 
                placeholder="Search appointments..." 
                className="pl-9"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <div className="flex gap-2">
              {(["all", "free", "paid"] as const).map((f) => (
                <Button 
                  key={f}
                  variant={filter === f ? "default" : "outline"}
                  size="sm"
                  onClick={() => setFilter(f)}
                  className="capitalize"
                >
                  {f}
                </Button>
              ))}
            </div>
          </div>
        </div>

        {isLoading ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-64 animate-pulse rounded-xl bg-muted" />
            ))}
          </div>
        ) : filteredServices.length === 0 ? (
          <div className="py-20 text-center">
            <p className="text-muted-foreground">No appointments found matching your criteria.</p>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredServices.map((s) => (
              <Card key={s.id} className="overflow-hidden transition-all hover:shadow-md">
                <div className="aspect-video bg-muted flex items-center justify-center">
                   {/* Cover image placeholder */}
                   <Sparkles className="h-12 w-12 text-muted-foreground/20" />
                </div>
                <CardHeader>
                  <div className="flex items-start justify-between gap-2">
                    <CardTitle className="line-clamp-1">{s.name}</CardTitle>
                    <Badge variant={s.price_cents === 0 ? "secondary" : "default"}>
                      {s.price_cents === 0 ? "Free" : `₹${s.price_cents / 100}`}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="line-clamp-2 text-sm text-muted-foreground">
                    {s.description || "No description provided."}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {s.duration_minutes} min
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      Online
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="border-t bg-muted/50 p-4">
                  <Link to="/app/booking" search={{ serviceId: s.id }} className="w-full">
                    <Button className="w-full">Book Appointment</Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

function Landing() {
  return (
    <div className="min-h-screen bg-background">
      <header className="container mx-auto flex items-center justify-between px-6 py-5">
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <Sparkles className="h-5 w-5" />
          </div>
          <span className="text-lg font-semibold">Appointmate</span>
        </div>
        <nav className="flex items-center gap-3">
          <Link to="/login"><Button variant="ghost">Sign in</Button></Link>
          <Link to="/signup"><Button>Get started</Button></Link>
        </nav>
      </header>

      <section className="container mx-auto px-6 pt-16 pb-24 text-center">
        <div className="mx-auto inline-flex items-center gap-2 rounded-full border bg-card px-3 py-1 text-xs text-muted-foreground">
          <span className="h-1.5 w-1.5 rounded-full bg-success" />
          Built for independent professionals
        </div>
        <h1 className="mx-auto mt-6 max-w-3xl text-5xl font-bold tracking-tight md:text-6xl">
          The booking studio your business deserves.
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-lg text-muted-foreground">
          Schedule appointments, manage clients, take payments, and see your business in one calm, focused workspace.
        </p>
        <div className="mt-8 flex justify-center gap-3">
          <Link to="/signup"><Button size="lg">Start free</Button></Link>
          <Link to="/login"><Button size="lg" variant="outline">Sign in</Button></Link>
        </div>
      </section>

      <section className="container mx-auto grid gap-4 px-6 pb-24 md:grid-cols-3">
        {[
          { icon: CalendarDays, title: "Smart calendar", desc: "Drag, drop, reschedule. Day, week, month views." },
          { icon: Users, title: "Customer CRM", desc: "Notes, history, contact details — all in one place." },
          { icon: CreditCard, title: "Payments", desc: "Track cash, card, and transfer payments effortlessly." },
          { icon: BarChart3, title: "Reports", desc: "Revenue, top services, busiest days — exportable." },
          { icon: Shield, title: "Secure", desc: "Your data is private and yours. Always." },
          { icon: Sparkles, title: "Beautiful UX", desc: "Polished, fast, keyboard-friendly." },
        ].map((f) => (
          <div key={f.title} className="rounded-xl border bg-card p-6">
            <f.icon className="h-6 w-6 text-primary" />
            <h3 className="mt-4 font-semibold">{f.title}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{f.desc}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
