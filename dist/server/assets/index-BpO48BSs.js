import { U as jsxRuntimeExports, r as reactExports } from "./worker-entry-CW2L5Pfm.js";
import { L as Link } from "./router-GsH7DwrS.js";
import { B as Button } from "./button-McSNIiVm.js";
import { u as useAuthStore } from "./auth-store-DtQVi2Sx.js";
import { u as useQuery, a as api } from "./api-Dj4XhP6t.js";
import { I as Input } from "./input-B48utwcC.js";
import { B as Badge } from "./badge-CxTZoo_v.js";
import { C as Card, a as CardHeader, b as CardTitle, c as CardContent, d as CardFooter } from "./card-By6FvKyl.js";
import { S as Sparkles } from "./sparkles-BogYp5AA.js";
import { S as Search } from "./search-CyqiJxrN.js";
import { C as Clock } from "./clock-CRwpbZo7.js";
import { M as MapPin } from "./map-pin-D8JyW74i.js";
import { C as CalendarDays } from "./calendar-days-V_z2XJfk.js";
import { U as Users } from "./users-CFKuiBCL.js";
import { C as CreditCard, a as ChartColumn } from "./credit-card-D_t_3Fv0.js";
import { c as createLucideIcon } from "./createLucideIcon-BfCcbVL6.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./index-c7axHsGD.js";
const __iconNode = [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y"
    }
  ]
];
const Shield = createLucideIcon("shield", __iconNode);
function Home() {
  const {
    user,
    profile
  } = useAuthStore();
  if (user && profile?.role === "customer") {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(CustomerHome, {});
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Landing, {});
}
function CustomerHome() {
  const [search, setSearch] = reactExports.useState("");
  const [filter, setFilter] = reactExports.useState("all");
  const {
    data: services = [],
    isLoading
  } = useQuery({
    queryKey: ["services"],
    queryFn: api.listServices
  });
  const filteredServices = services.filter((s) => {
    const matchesSearch = s.name.toLowerCase().includes(search.toLowerCase()) || (s.description?.toLowerCase().includes(search.toLowerCase()) ?? false);
    const isFree = s.price_cents === 0;
    const matchesFilter = filter === "all" || filter === "free" && isFree || filter === "paid" && !isFree;
    return matchesSearch && matchesFilter && s.active;
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: "sticky top-0 z-10 border-b bg-background/80 backdrop-blur", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto flex h-16 items-center justify-between px-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-6 w-6 text-primary" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xl font-bold", children: "Appointmate" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/profile", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "ghost", size: "sm", children: "Profile" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", size: "sm", onClick: () => useAuthStore.getState().signOut(), children: "Sign out" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "container mx-auto px-4 py-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-8 space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl font-bold tracking-tight", children: "Book an appointment" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Discover and book services from our providers." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-4 md:flex-row md:items-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { placeholder: "Search appointments...", className: "pl-9", value: search, onChange: (e) => setSearch(e.target.value) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2", children: ["all", "free", "paid"].map((f) => /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: filter === f ? "default" : "outline", size: "sm", onClick: () => setFilter(f), className: "capitalize", children: f }, f)) })
        ] })
      ] }),
      isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-6 md:grid-cols-2 lg:grid-cols-3", children: [1, 2, 3].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-64 animate-pulse rounded-xl bg-muted" }, i)) }) : filteredServices.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "py-20 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "No appointments found matching your criteria." }) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-6 md:grid-cols-2 lg:grid-cols-3", children: filteredServices.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "overflow-hidden transition-all hover:shadow-md", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-video bg-muted flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-12 w-12 text-muted-foreground/20" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "line-clamp-1", children: s.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: s.price_cents === 0 ? "secondary" : "default", children: s.price_cents === 0 ? "Free" : `₹${s.price_cents / 100}` })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "line-clamp-2 text-sm text-muted-foreground", children: s.description || "No description provided." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 text-xs text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-3 w-3" }),
              s.duration_minutes,
              " min"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-3 w-3" }),
              "Online"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardFooter, { className: "border-t bg-muted/50 p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/app/booking", search: {
          serviceId: s.id
        }, className: "w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { className: "w-full", children: "Book Appointment" }) }) })
      ] }, s.id)) })
    ] })
  ] });
}
function Landing() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "container mx-auto flex items-center justify-between px-6 py-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-5 w-5" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lg font-semibold", children: "Appointmate" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/login", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "ghost", children: "Sign in" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/signup", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { children: "Get started" }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "container mx-auto px-6 pt-16 pb-24 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto inline-flex items-center gap-2 rounded-full border bg-card px-3 py-1 text-xs text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-success" }),
        "Built for independent professionals"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mx-auto mt-6 max-w-3xl text-5xl font-bold tracking-tight md:text-6xl", children: "The booking studio your business deserves." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-5 max-w-xl text-lg text-muted-foreground", children: "Schedule appointments, manage clients, take payments, and see your business in one calm, focused workspace." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex justify-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/signup", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "lg", children: "Start free" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/login", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "lg", variant: "outline", children: "Sign in" }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "container mx-auto grid gap-4 px-6 pb-24 md:grid-cols-3", children: [{
      icon: CalendarDays,
      title: "Smart calendar",
      desc: "Drag, drop, reschedule. Day, week, month views."
    }, {
      icon: Users,
      title: "Customer CRM",
      desc: "Notes, history, contact details — all in one place."
    }, {
      icon: CreditCard,
      title: "Payments",
      desc: "Track cash, card, and transfer payments effortlessly."
    }, {
      icon: ChartColumn,
      title: "Reports",
      desc: "Revenue, top services, busiest days — exportable."
    }, {
      icon: Shield,
      title: "Secure",
      desc: "Your data is private and yours. Always."
    }, {
      icon: Sparkles,
      title: "Beautiful UX",
      desc: "Polished, fast, keyboard-friendly."
    }].map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border bg-card p-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(f.icon, { className: "h-6 w-6 text-primary" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-4 font-semibold", children: f.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: f.desc })
    ] }, f.title)) })
  ] });
}
export {
  Home as component
};
