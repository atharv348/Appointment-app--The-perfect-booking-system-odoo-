import { r as reactExports, U as jsxRuntimeExports } from "./worker-entry-CW2L5Pfm.js";
import { u as useQuery, a as api } from "./api-Dj4XhP6t.js";
import { a as useQueryClient, L as Link, t as toast } from "./router-GsH7DwrS.js";
import { u as useMutation } from "./useMutation-DCXyJmel.js";
import { C as Card, a as CardHeader, b as CardTitle, c as CardContent } from "./card-By6FvKyl.js";
import { B as Button } from "./button-McSNIiVm.js";
import { I as Input } from "./input-B48utwcC.js";
import { L as Label } from "./label-dg8TtdZv.js";
import { T as Tabs, a as TabsList, b as TabsTrigger, c as TabsContent } from "./tabs-CF5uFkj0.js";
import { B as Badge } from "./badge-CxTZoo_v.js";
import { A as Avatar, a as AvatarFallback } from "./avatar-CTPLqmGi.js";
import { u as useAuthStore } from "./auth-store-DtQVi2Sx.js";
import { f as fmtMoney } from "./format-CCH22ipv.js";
import { S as Sparkles } from "./sparkles-BogYp5AA.js";
import { C as CalendarDays } from "./calendar-days-V_z2XJfk.js";
import { C as Clock } from "./clock-CRwpbZo7.js";
import { M as MapPin } from "./map-pin-D8JyW74i.js";
import { c as createLucideIcon } from "./createLucideIcon-BfCcbVL6.js";
import { C as CircleX } from "./circle-x-B2OdjqaR.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./index-c7axHsGD.js";
import "./index-BJH9mEUy.js";
import "./index-ClF13Y5F.js";
const __iconNode = [
  ["path", { d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8", key: "v9h5vc" }],
  ["path", { d: "M21 3v5h-5", key: "1q7to0" }],
  ["path", { d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16", key: "3uifl3" }],
  ["path", { d: "M8 16H3v5", key: "1cv678" }]
];
const RefreshCw = createLucideIcon("refresh-cw", __iconNode);
function CustomerProfile() {
  const qc = useQueryClient();
  const {
    user,
    profile
  } = useAuthStore();
  const [form, setForm] = reactExports.useState({
    full_name: "",
    phone: ""
  });
  const {
    data: allAppointments = []
  } = useQuery({
    queryKey: ["appointments"],
    queryFn: api.listAppointments
  });
  const myBookings = allAppointments.filter((a) => a.customer_id === user?.id || a.owner_id === user?.id);
  const upcoming = myBookings.filter((a) => new Date(a.start_at) >= /* @__PURE__ */ new Date() && a.status !== "cancelled");
  const past = myBookings.filter((a) => new Date(a.start_at) < /* @__PURE__ */ new Date() || a.status === "cancelled");
  reactExports.useEffect(() => {
    if (profile) setForm({
      full_name: profile.full_name ?? "",
      phone: profile.phone ?? ""
    });
  }, [profile]);
  const saveProfile = useMutation({
    mutationFn: () => api.updateProfile(form),
    onSuccess: () => {
      qc.invalidateQueries({
        queryKey: ["profile"]
      });
      toast.success("Profile updated");
    }
  });
  const cancelBooking = useMutation({
    mutationFn: (id) => api.updateAppointment(id, {
      status: "cancelled"
    }),
    onSuccess: () => {
      qc.invalidateQueries({
        queryKey: ["appointments"]
      });
      toast.success("Booking cancelled");
    }
  });
  const initials = (form.full_name || user?.email || "U").slice(0, 2).toUpperCase();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-muted/30", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: "border-b bg-background/80 backdrop-blur sticky top-0 z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 h-16 flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-6 w-6 text-primary" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xl font-bold", children: "Appointmate" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", size: "sm", onClick: () => useAuthStore.getState().signOut(), children: "Sign out" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "container mx-auto px-4 py-8 max-w-4xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-8 md:grid-cols-[300px_1fr]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { className: "text-center pb-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Avatar, { className: "h-20 w-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AvatarFallback, { className: "text-2xl", children: initials }) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: form.full_name || "My Account" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: user?.email })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-4 pt-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Full Name" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: form.full_name, onChange: (e) => setForm({
              ...form,
              full_name: e.target.value
            }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Phone" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: form.phone, onChange: (e) => setForm({
              ...form,
              phone: e.target.value
            }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { className: "w-full", onClick: () => saveProfile.mutate(), disabled: saveProfile.isPending, children: "Update Profile" })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Tabs, { defaultValue: "upcoming", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsList, { className: "w-full justify-start border-b rounded-none h-auto p-0 bg-transparent", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "upcoming", className: "rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-6 py-3", children: "Upcoming Bookings" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "past", className: "rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-6 py-3", children: "Past & Cancelled" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "upcoming", className: "pt-6 space-y-4", children: upcoming.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-20 border rounded-xl bg-background", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarDays, { className: "mx-auto h-12 w-12 text-muted-foreground/20" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-muted-foreground", children: "No upcoming bookings found." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "link", children: "Book something now" }) })
        ] }) : upcoming.map((a) => /* @__PURE__ */ jsxRuntimeExports.jsx(BookingCard, { appointment: a, onCancel: () => cancelBooking.mutate(a.id), canManage: true }, a.id)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "past", className: "pt-6 space-y-4", children: past.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center py-20 border rounded-xl bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "No past bookings found." }) }) : past.map((a) => /* @__PURE__ */ jsxRuntimeExports.jsx(BookingCard, { appointment: a, isPast: true }, a.id)) })
      ] }) })
    ] }) })
  ] });
}
function BookingCard({
  appointment: a,
  isPast,
  onCancel,
  canManage
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: `overflow-hidden ${isPast ? "opacity-70" : ""}`, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 p-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-4 mb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-lg", children: a.service?.name || "Service" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: a.status === "confirmed" ? "default" : a.status === "cancelled" ? "destructive" : "secondary", children: a.status })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 text-sm text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarDays, { className: "h-3 w-3" }),
              " ",
              new Date(a.start_at).toLocaleDateString()
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-3 w-3" }),
              " ",
              new Date(a.start_at).toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit"
              })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold text-lg", children: fmtMoney(a.price_cents) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-muted-foreground", children: [
            a.service?.duration_minutes,
            " min"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-4 pt-4 border-t text-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-3 w-3" }),
        a.service?.location || "Online"
      ] }) })
    ] }),
    canManage && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-muted/50 border-t sm:border-t-0 sm:border-l p-4 flex sm:flex-col gap-2 justify-center min-w-[150px]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/book/reschedule/$appointmentId", params: {
        appointmentId: a.id
      }, className: "w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "outline", size: "sm", className: "w-full gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: "h-3 w-3" }),
        " Reschedule"
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "ghost", size: "sm", className: "w-full gap-2 text-destructive hover:text-destructive hover:bg-destructive/10", onClick: onCancel, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CircleX, { className: "h-3 w-3" }),
        " Cancel"
      ] })
    ] })
  ] }) });
}
export {
  CustomerProfile as component
};
