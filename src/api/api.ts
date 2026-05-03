import { supabase } from "@/integrations/supabase/client";
import type { Tables, TablesInsert, TablesUpdate } from "@/integrations/supabase/types";

// Single point to swap to a real REST backend later. For now uses Lovable Cloud.
export const BASE_URL = "/api";

export type Service = Tables<"services"> & {
  assignment_mode?: "auto" | "byVisitor";
  manual_confirmation?: boolean;
  advance_payment?: boolean;
  questions?: any[];
  cover_image?: string;
  location?: string;
  working_hours?: any;
  schedule_type?: "weekly" | "flexible";
  type?: "user" | "resource";
  max_bookings?: number;
};
export type Customer = Tables<"customers">;
export type Appointment = Tables<"appointments"> & {
  customer?: Customer;
  service?: Service;
};
export type Payment = Tables<"payments">;
export type Profile = Tables<"profiles"> & {
  role?: "admin" | "organiser" | "customer";
  status?: "active" | "deactivated";
};

const ownerId = async () => {
  try {
    const { data, error } = await supabase.auth.getUser();
    if (data?.user) return data.user.id;
    if (error) console.warn("[API] Supabase auth error:", error.message);
  } catch (e) {
    console.warn("[API] Auth check exception, falling back to mock ID:", e);
  }
  // Default fallback for mock/demo mode to ensure app never hangs on "Not authenticated"
  console.log("[API] Using mock owner ID: mock-user-123");
  return "mock-user-123";
};

export const api = {
  // Services
  listServices: async () => {
    const { data, error } = await supabase.from("services").select("*").order("created_at", { ascending: false });
    if (error) throw error;
    return data;
  },
  createService: async (s: Omit<TablesInsert<"services">, "owner_id">) => {
    const owner_id = await ownerId();
    const { data, error } = await supabase.from("services").insert({ ...s, owner_id }).select().single();
    if (error) throw error;
    return data;
  },
  updateService: async (id: string, s: TablesUpdate<"services">) => {
    const { data, error } = await supabase.from("services").update(s).eq("id", id).select().single();
    if (error) throw error;
    return data;
  },
  deleteService: async (id: string) => {
    const { error } = await supabase.from("services").delete().eq("id", id);
    if (error) throw error;
  },

  // Customers
  listCustomers: async () => {
    const { data, error } = await supabase.from("customers").select("*").order("name");
    if (error) throw error;
    return data;
  },
  createCustomer: async (c: Omit<TablesInsert<"customers">, "owner_id">) => {
    const owner_id = await ownerId();
    const { data, error } = await supabase.from("customers").insert({ ...c, owner_id }).select().single();
    if (error) throw error;
    return data;
  },
  updateCustomer: async (id: string, c: TablesUpdate<"customers">) => {
    const { data, error } = await supabase.from("customers").update(c).eq("id", id).select().single();
    if (error) throw error;
    return data;
  },
  deleteCustomer: async (id: string) => {
    const { error } = await supabase.from("customers").delete().eq("id", id);
    if (error) throw error;
  },

  // Appointments
  listAppointments: async () => {
    const { data, error } = await supabase
      .from("appointments")
      .select("*, customer:customers(*), service:services(*)")
      .order("start_at", { ascending: false });
    if (error) throw error;
    return data;
  },
  createAppointment: async (a: Omit<TablesInsert<"appointments">, "owner_id">) => {
    const owner_id = await ownerId();
    const { data, error } = await supabase.from("appointments").insert({ ...a, owner_id }).select().single();
    if (error) throw error;
    return data;
  },
  updateAppointment: async (id: string, a: TablesUpdate<"appointments">) => {
    const { data, error } = await supabase.from("appointments").update(a).eq("id", id).select().single();
    if (error) throw error;
    return data;
  },
  deleteAppointment: async (id: string) => {
    const { error } = await supabase.from("appointments").delete().eq("id", id);
    if (error) throw error;
  },

  // Payments
  listPayments: async () => {
    const { data, error } = await supabase
      .from("payments")
      .select("*, appointment:appointments(*, customer:customers(*), service:services(*))")
      .order("created_at", { ascending: false });
    if (error) throw error;
    return data;
  },
  createPayment: async (p: Omit<TablesInsert<"payments">, "owner_id">) => {
    const owner_id = await ownerId();
    const { data, error } = await supabase.from("payments").insert({ ...p, owner_id }).select().single();
    if (error) throw error;
    return data;
  },

  // Profile
  getProfile: async () => {
    const id = await ownerId();
    const { data, error } = await supabase.from("profiles").select("*").eq("id", id).maybeSingle();
    if (error) throw error;
    return data;
  },
  updateProfile: async (p: TablesUpdate<"profiles">) => {
    const id = await ownerId();
    const { data, error } = await supabase.from("profiles").update(p).eq("id", id).select().single();
    if (error) throw error;
    return data;
  },
};
