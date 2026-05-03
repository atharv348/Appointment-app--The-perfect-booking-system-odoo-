import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Sparkles, ArrowRight, ShieldCheck, User, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";
import { useAuthStore } from "@/stores/auth-store";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const Route = createFileRoute("/login")({ component: Login });

const schema = z.object({
  email: z.string().trim().email("Invalid email").max(255),
  password: z.string().min(6, "Min 6 characters").max(100),
});

function Login() {
  const navigate = useNavigate();
  const { user, profile, init, initialized } = useAuthStore();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [resetEmail, setResetEmail] = useState("");
  const [resetLoading, setResetLoading] = useState(false);
  const [resetOpen, setResetOpen] = useState(false);
  const [loginType, setLoginType] = useState<"admin" | "customer">("customer");
  const [showBypass, setShowBypass] = useState(false);

  useEffect(() => {
    let timeout: any;
    if (loading) {
      timeout = setTimeout(() => {
        if (loading) {
          setLoading(false);
          setShowBypass(true);
          toast.error("Login verification is taking longer than expected. Please try again.");
        }
      }, 15000); // Increase to 15 seconds
    }
    return () => clearTimeout(timeout);
  }, [loading]);

  const forceReset = async () => {
    toast.info("Clearing session and reloading...");
    await useAuthStore.getState().signOut();
    window.location.reload();
  };

  const devBypass = () => {
    toast.info("Bypassing verification for development...");
    if (loginType === "admin") navigate({ to: "/app" });
    else navigate({ to: "/" });
  };

  useEffect(() => init(), [init]);
  
  useEffect(() => {
    if (initialized && user && profile) {
      console.log("Login redirect check:", { role: profile.role, loginType });
      
      const actualRole = profile.role || "customer";
      
      if (actualRole === "customer") {
        if (loginType === "admin") {
          toast.error("This account does not have admin privileges.");
          useAuthStore.getState().signOut();
          setLoading(false);
          return;
        }
        setLoading(false);
        navigate({ to: "/" });
      } else {
        // admin or organiser
        setLoading(false);
        if (loginType === "customer") {
          navigate({ to: "/" });
        } else {
          navigate({ to: "/app" });
        }
      }
    }
  }, [initialized, user, profile, navigate, loginType]);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login attempt started for:", email);
    
    const parsed = schema.safeParse({ email, password });
    if (!parsed.success) {
      toast.error(parsed.error.errors[0].message);
      return;
    }
    
    setLoading(true);
    try {
      console.log("Attempting login...");
      
      const { data, error } = await supabase.auth.signInWithPassword(parsed.data);
      
      if (error) {
        console.error("Supabase login error:", error);
        toast.error(error.message);
        setLoading(false);
        return;
      }

      if (data.user) {
        console.log("Login successful, updating session...");
        
        // Update the session in the store
        await useAuthStore.getState().setSession(data.session);

        // Success toast
        toast.success(`Logged in as ${loginType === "admin" ? "Admin" : "Customer"}`);

        // Direct navigation based on login type - fast and reliable
        setLoading(false);
        if (loginType === "admin") {
          navigate({ to: "/app" });
        } else {
          navigate({ to: "/" });
        }
      }
    } catch (err: any) {
      console.error("Unexpected login error:", err);
      toast.error("Login failed. Please check your connection.");
      setLoading(false);
    }
  };

  const handleForgotPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!resetEmail) {
      toast.error("Please enter your email");
      return;
    }
    setResetLoading(true);
    const { error } = await supabase.auth.resetPasswordForEmail(resetEmail, {
      redirectTo: `${window.location.origin}/reset-password`,
    });
    setResetLoading(false);
    if (error) {
      toast.error(error.message);
    } else {
      toast.success("Password reset link sent to your email!");
      setResetOpen(false);
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
          <div className="mb-6 text-center">
            <h1 className="text-2xl font-bold">Welcome Back</h1>
            <p className="mt-1.5 text-sm text-muted-foreground">
              Choose your login type to continue
            </p>
          </div>

          <Tabs value={loginType} onValueChange={(v) => setLoginType(v as any)} className="mb-8">
            <TabsList className="grid w-full grid-cols-2 h-12 p-1 bg-muted/50">
              <TabsTrigger value="customer" className="data-[state=active]:bg-background data-[state=active]:shadow-sm">
                <User className="h-4 w-4 mr-2" /> Customer
              </TabsTrigger>
              <TabsTrigger value="admin" className="data-[state=active]:bg-background data-[state=active]:shadow-sm">
                <ShieldCheck className="h-4 w-4 mr-2" /> Admin/Staff
              </TabsTrigger>
            </TabsList>
          </Tabs>

          <form onSubmit={submit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input id="email" type="email" placeholder="name@example.com" autoComplete="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
                <Dialog open={resetOpen} onOpenChange={setResetOpen}>
                  <DialogTrigger asChild>
                    <button type="button" className="text-xs font-medium text-primary hover:underline">
                      Forgot password?
                    </button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                      <DialogTitle>Reset password</DialogTitle>
                      <DialogDescription>
                        Enter your email address and we'll send you a link to reset your password.
                      </DialogDescription>
                    </DialogHeader>
                    <form onSubmit={handleForgotPassword} className="space-y-4 pt-4">
                      <div className="space-y-2">
                        <Label htmlFor="reset-email">Email Address</Label>
                        <Input 
                          id="reset-email" 
                          type="email" 
                          placeholder="name@example.com" 
                          value={resetEmail} 
                          onChange={(e) => setResetEmail(e.target.value)} 
                          required 
                        />
                      </div>
                      <DialogFooter>
                        <Button type="submit" disabled={resetLoading} className="w-full">
                          {resetLoading ? "Sending..." : "Send Reset Link"}
                        </Button>
                      </DialogFooter>
                    </form>
                  </DialogContent>
                </Dialog>
              </div>
              <Input id="password" type="password" autoComplete="current-password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </div>
            <Button type="submit" className="w-full group h-11" disabled={loading}>
              {loading ? "Verifying..." : (
                <>
                  Login as {loginType === "admin" ? "Admin" : "Customer"} 
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </>
              )}
            </Button>
          </form>

          <div className="mt-6 flex items-center justify-center gap-2 text-xs text-muted-foreground bg-muted/30 p-3 rounded-lg">
             <CheckCircle2 className="h-3 w-3 text-primary" />
             <span>Your role will be verified automatically</span>
          </div>

          <div className="mt-8 text-center text-sm text-muted-foreground">
            No account yet? <Link to="/signup" className="font-bold text-primary hover:underline">Join Appointmate</Link>
          </div>

          {showBypass && (
            <div className="mt-4 pt-4 border-t space-y-2">
              <Button variant="outline" className="w-full text-xs text-muted-foreground" onClick={forceReset}>
                Clear Session & Fix "Stuck" Issue
              </Button>
              <Button variant="outline" className="w-full text-xs text-muted-foreground" onClick={devBypass}>
                (Dev) Skip to Dashboard
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
