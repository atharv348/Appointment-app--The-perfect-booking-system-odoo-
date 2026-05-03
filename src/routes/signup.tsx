import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Sparkles, ArrowRight, UserPlus } from "lucide-react";
import { toast } from "sonner";
import { useAuthStore } from "@/stores/auth-store";

export const Route = createFileRoute("/signup")({ component: Signup });

const schema = z.object({
  full_name: z.string().trim().min(1, "Name required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  password: z.string().min(6, "Min 6 characters").max(100),
});

function Signup() {
  const navigate = useNavigate();
  const { user, profile, init, initialized } = useAuthStore();
  const [full_name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => init(), [init]);
  
  useEffect(() => {
    if (initialized && user && profile) {
      if (profile.role === "customer") {
        navigate({ to: "/" });
      } else {
        navigate({ to: "/app" });
      }
    }
  }, [initialized, user, profile, navigate]);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse({ full_name, email, password });
    if (!parsed.success) {
      toast.error(parsed.error.errors[0].message);
      return;
    }
    setLoading(true);
    const { error } = await supabase.auth.signUp({
      email: parsed.data.email,
      password: parsed.data.password,
      options: {
        emailRedirectTo: `${window.location.origin}/login`,
        data: { full_name: parsed.data.full_name },
      },
    });
    
    if (error) {
      toast.error(error.message);
      setLoading(false);
    } else {
      toast.success("Account created! Redirecting...");
      // Redirection handled by useEffect
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted/30 px-4">
      <div className="w-full max-w-md">
        <Link to="/" className="mb-8 flex items-center justify-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-lg shadow-primary/20">
            <Sparkles className="h-6 w-6" />
          </div>
          <span className="text-2xl font-bold tracking-tight">Appointmate</span>
        </Link>
        
        <div className="rounded-2xl border bg-card p-8 shadow-xl shadow-muted/50">
          <div className="mb-6">
            <h1 className="text-2xl font-bold">Create your account</h1>
            <p className="mt-1.5 text-sm text-muted-foreground">Start booking or managing appointments in seconds.</p>
          </div>

          <form onSubmit={submit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" placeholder="John Doe" value={full_name} onChange={(e) => setName(e.target.value)} required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input id="email" type="email" placeholder="name@example.com" autoComplete="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" placeholder="••••••••" autoComplete="new-password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </div>
            <Button type="submit" className="w-full group h-11" disabled={loading}>
              {loading ? "Creating account..." : (
                <>
                  Join Appointmate <UserPlus className="ml-2 h-4 w-4 transition-transform group-hover:scale-110" />
                </>
              )}
            </Button>
          </form>
          
          <p className="mt-8 text-center text-sm text-muted-foreground">
            Already have an account? <Link to="/login" className="font-bold text-primary hover:underline">Sign in instead</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
