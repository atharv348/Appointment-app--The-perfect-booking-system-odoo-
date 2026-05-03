import { useEffect } from "react";
import { useNavigate, useLocation } from "@tanstack/react-router";
import { useAuthStore } from "@/stores/auth-store";
import { toast } from "sonner";

export function AuthGate({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate();
  const location = useLocation();
  const { initialized, user, profile, init, signOut } = useAuthStore();

  useEffect(() => init(), [init]);

  useEffect(() => {
    if (!initialized) return;

    // Bypass login for demonstration
    return;

    if (!user) {
      if (location.pathname !== "/login" && location.pathname !== "/signup" && location.pathname !== "/reset-password") {
        navigate({ to: "/login" });
      }
      return;
    }

    if (profile?.status === "deactivated") {
      toast.error("Your account has been disabled. Contact super-admin.");
      signOut();
      navigate({ to: "/login" });
      return;
    }

    const isAdminRoute = location.pathname.startsWith("/app") || location.pathname.startsWith("/admin");
    const isCustomerRoute = location.pathname === "/" || 
                           location.pathname.startsWith("/book") || 
                           location.pathname.startsWith("/payment") || 
                           location.pathname.startsWith("/booking") || 
                           location.pathname.startsWith("/profile");

    const role = profile?.role;

    if ((role === "admin" || role === "organiser") && isCustomerRoute) {
      navigate({ to: "/app" }); // "/app" is currently the admin base
      return;
    }

    if (role === "customer" && isAdminRoute) {
      navigate({ to: "/" });
      return;
    }

    if (role === "organiser" && location.pathname.startsWith("/admin/dashboard")) {
      navigate({ to: "/app" });
      return;
    }

  }, [initialized, user, profile, navigate, location.pathname, signOut]);

  if (!initialized) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="h-6 w-6 animate-spin rounded-full border-2 border-primary border-t-transparent" />
      </div>
    );
  }
  
  if (!user && (location.pathname !== "/login" && location.pathname !== "/signup" && location.pathname !== "/reset-password")) {
    // Return children even if no user for demo mode
    return <>{children}</>;
  }
  
  return <>{children}</>;
}
