import { create } from "zustand";
import type { Session, User } from "@supabase/supabase-js";
import { supabase } from "@/integrations/supabase/client";

export type UserRole = "admin" | "organiser" | "customer";

interface Profile {
  id: string;
  role: UserRole;
  full_name: string | null;
  email: string | null;
  status: "active" | "deactivated";
}

interface AuthState {
  user: User | null;
  profile: Profile | null;
  session: Session | null;
  loading: boolean;
  initialized: boolean;
  setSession: (session: Session | null) => Promise<void>;
  signOut: () => Promise<void>;
  init: () => () => void;
}

export const useAuthStore = create<AuthState>((set, get) => ({
  user: null,
  profile: null,
  session: null,
  loading: false,
  initialized: false,
  setSession: async (session) => {
    console.log("Setting session manually:", session?.user?.email);
    const user = session?.user ?? null;
    let profile: Profile | null = null;

    if (user) {
      try {
        const { data, error } = await supabase
          .from("profiles")
          .select("*")
          .eq("id", user.id)
          .maybeSingle();
        
        if (data) {
          profile = {
            ...data,
            role: (data.role as UserRole) || "customer",
            status: (data.status as "active" | "deactivated") || "active",
          };
        } else {
          profile = {
            id: user.id,
            role: "customer",
            full_name: user.user_metadata?.full_name || null,
            email: user.email || null,
            status: "active",
          };
        }
      } catch (e) {
        console.error("setSession profile error:", e);
      }
    }

    set({ session, user, profile, initialized: true });
  },
  signOut: async () => {
    console.log("Forcing sign out and clearing storage...");
    await supabase.auth.signOut();
    if (typeof window !== "undefined") {
      localStorage.clear();
      sessionStorage.clear();
    }
    set({ session: null, user: null, profile: null, initialized: true });
  },
  init: () => {
    const { data: sub } = supabase.auth.onAuthStateChange(async (_e, session) => {
      console.log("Auth state change:", _e, session?.user?.email);
      const user = session?.user ?? null;
      let profile: Profile | null = null;

      if (user) {
        console.log("Fetching profile for:", user.id);
        const { data, error } = await supabase
          .from("profiles")
          .select("*")
          .eq("id", user.id)
          .maybeSingle();
        
        if (error) {
          console.error("Error fetching profile:", error);
        }

        if (data) {
          console.log("Profile loaded:", data);
          profile = {
            ...data,
            role: (data.role as UserRole) || "customer",
            status: (data.status as "active" | "deactivated") || "active",
          };
        } else {
          console.warn("No profile found for user, creating virtual profile");
          // Provide a default virtual profile so the UI doesn't hang
          profile = {
            id: user.id,
            role: "customer",
            full_name: user.user_metadata?.full_name || null,
            email: user.email || null,
            status: "active",
          };
        }
      }

      set({ session, user, profile, initialized: true });
    });

    supabase.auth.getSession().then(async ({ data }) => {
      const session = data.session;
      const user = session?.user ?? null;
      let profile: Profile | null = null;

      if (user) {
        try {
          const { data: profileData } = await supabase
            .from("profiles")
            .select("*")
            .eq("id", user.id)
            .maybeSingle();
          
          if (profileData) {
            profile = {
              ...profileData,
              role: (profileData.role as UserRole) || "customer",
              status: (profileData.status as "active" | "deactivated") || "active",
            };
          } else {
            profile = {
              id: user.id,
              role: "customer",
              full_name: user.user_metadata?.full_name || null,
              email: user.email || null,
              status: "active",
            };
          }
        } catch (e) {
          console.error("Session profile fetch error:", e);
        }
      }

      set({ session, user, profile, initialized: true });
    }).catch(err => {
      console.error("Get session error:", err);
      set({ initialized: true });
    });

    return () => sub.subscription.unsubscribe();
  },
}));
