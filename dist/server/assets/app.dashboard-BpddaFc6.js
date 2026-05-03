import { r as reactExports, U as jsxRuntimeExports } from "./worker-entry-CW2L5Pfm.js";
import { u as useQuery, a as api } from "./api-Dj4XhP6t.js";
import { c as cn, a as useQueryClient, t as toast } from "./router-GsH7DwrS.js";
import { u as useMutation } from "./useMutation-DCXyJmel.js";
import { C as Card, a as CardHeader, b as CardTitle, c as CardContent } from "./card-By6FvKyl.js";
import { B as Badge } from "./badge-CxTZoo_v.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-DAV2o4Pn.js";
import { S as Switch } from "./switch-CRBvPd7p.js";
import { s as supabase } from "./index-c7axHsGD.js";
import { u as useAuthStore } from "./auth-store-DtQVi2Sx.js";
import { U as Users } from "./users-CFKuiBCL.js";
import { c as createLucideIcon } from "./createLucideIcon-BfCcbVL6.js";
import { B as Briefcase, S as ShieldAlert } from "./shield-alert-CZ4dJAiT.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./index-ClF13Y5F.js";
import "./index-C_YQrlYr.js";
import "./index-CU1ql3FD.js";
import "./chevron-down-ClPYuImO.js";
const __iconNode$1 = [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }],
  ["path", { d: "M3 10h18", key: "8toen8" }],
  ["path", { d: "m9 16 2 2 4-4", key: "19s6y9" }]
];
const CalendarCheck = createLucideIcon("calendar-check", __iconNode$1);
const __iconNode = [
  ["path", { d: "m16 11 2 2 4-4", key: "9rsbq5" }],
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }]
];
const UserCheck = createLucideIcon("user-check", __iconNode);
const Table = reactExports.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative w-full overflow-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx("table", { ref, className: cn("w-full caption-bottom text-sm", className), ...props }) })
);
Table.displayName = "Table";
const TableHeader = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { ref, className: cn("[&_tr]:border-b", className), ...props }));
TableHeader.displayName = "TableHeader";
const TableBody = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { ref, className: cn("[&_tr:last-child]:border-0", className), ...props }));
TableBody.displayName = "TableBody";
const TableFooter = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  "tfoot",
  {
    ref,
    className: cn("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0", className),
    ...props
  }
));
TableFooter.displayName = "TableFooter";
const TableRow = reactExports.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    "tr",
    {
      ref,
      className: cn(
        "border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",
        className
      ),
      ...props
    }
  )
);
TableRow.displayName = "TableRow";
const TableHead = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  "th",
  {
    ref,
    className: cn(
      "h-10 px-2 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
      className
    ),
    ...props
  }
));
TableHead.displayName = "TableHead";
const TableCell = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  "td",
  {
    ref,
    className: cn(
      "p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
      className
    ),
    ...props
  }
));
TableCell.displayName = "TableCell";
const TableCaption = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx("caption", { ref, className: cn("mt-4 text-sm text-muted-foreground", className), ...props }));
TableCaption.displayName = "TableCaption";
function SystemDashboard() {
  const qc = useQueryClient();
  const {
    profile: currentProfile
  } = useAuthStore();
  const {
    data: profiles = [],
    isLoading
  } = useQuery({
    queryKey: ["admin_profiles"],
    queryFn: async () => {
      const {
        data,
        error
      } = await supabase.from("profiles").select("*");
      if (error) throw error;
      return data;
    }
  });
  const {
    data: services = []
  } = useQuery({
    queryKey: ["services"],
    queryFn: api.listServices
  });
  const {
    data: appointments = []
  } = useQuery({
    queryKey: ["appointments"],
    queryFn: api.listAppointments
  });
  const updateProfile = useMutation({
    mutationFn: async ({
      id,
      updates
    }) => {
      const {
        data,
        error
      } = await supabase.from("profiles").update(updates).eq("id", id).select().single();
      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      qc.invalidateQueries({
        queryKey: ["admin_profiles"]
      });
      toast.success("Profile updated");
    },
    onError: (e) => toast.error(e.message)
  });
  const stats = [{
    label: "Total Users",
    value: profiles.length,
    icon: Users
  }, {
    label: "Total Providers",
    value: profiles.filter((p) => p.role === "organiser").length,
    icon: UserCheck
  }, {
    label: "Total Appointments",
    value: services.length,
    icon: Briefcase
  }, {
    label: "Active Today",
    value: appointments.filter((a) => new Date(a.start_at).toDateString() === (/* @__PURE__ */ new Date()).toDateString()).length,
    icon: CalendarCheck
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-3xl font-bold tracking-tight flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldAlert, { className: "h-8 w-8 text-destructive" }),
        "System Dashboard"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Global system management and user control." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-4 md:grid-cols-2 lg:grid-cols-4", children: stats.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { className: "flex flex-row items-center justify-between pb-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-sm font-medium text-muted-foreground", children: s.label }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(s.icon, { className: "h-4 w-4 text-muted-foreground" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-bold", children: s.value }) })
    ] }, s.label)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "User Management" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "User" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Role" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Status" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-right", children: "Actions" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableBody, { children: profiles.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: p.full_name || "Unnamed" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: p.email })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: p.role || "customer", onValueChange: (v) => updateProfile.mutate({
            id: p.id,
            updates: {
              role: v
            }
          }), disabled: p.id === currentProfile?.id, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "w-[130px] h-8 text-xs capitalize", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "admin", children: "Admin" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "organiser", children: "Organiser" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "customer", children: "Customer" })
            ] })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: p.status === "active" ? "default" : "destructive", className: "capitalize", children: p.status || "active" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-right", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-end gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: p.status === "deactivated" ? "Deactivated" : "Active" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Switch, { checked: p.status !== "deactivated", onCheckedChange: (v) => updateProfile.mutate({
              id: p.id,
              updates: {
                status: v ? "active" : "deactivated"
              }
            }), disabled: p.id === currentProfile?.id })
          ] }) })
        ] }, p.id)) })
      ] }) })
    ] })
  ] });
}
export {
  SystemDashboard as component
};
