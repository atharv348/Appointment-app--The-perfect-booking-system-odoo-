import { r as reactExports, U as jsxRuntimeExports } from "./worker-entry-CW2L5Pfm.js";
import { u as useQuery, a as api } from "./api-Dj4XhP6t.js";
import { a as useQueryClient, t as toast } from "./router-GsH7DwrS.js";
import { u as useMutation } from "./useMutation-DCXyJmel.js";
import { C as Card, a as CardHeader, b as CardTitle, c as CardContent } from "./card-By6FvKyl.js";
import { B as Button } from "./button-McSNIiVm.js";
import { I as Input } from "./input-B48utwcC.js";
import { L as Label } from "./label-dg8TtdZv.js";
import { T as Textarea } from "./textarea-CVXk0D68.js";
import { S as Switch } from "./switch-CRBvPd7p.js";
import { B as Badge } from "./badge-CxTZoo_v.js";
import { D as Dialog, a as DialogTrigger, b as DialogContent, c as DialogHeader, d as DialogTitle, f as DialogFooter } from "./dialog-Df1ilx-I.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-DAV2o4Pn.js";
import { T as Tabs, a as TabsList, b as TabsTrigger, c as TabsContent } from "./tabs-CF5uFkj0.js";
import { f as fmtMoney } from "./format-CCH22ipv.js";
import { P as Plus } from "./plus-Trx-CSa2.js";
import { c as createLucideIcon } from "./createLucideIcon-BfCcbVL6.js";
import { C as Clock } from "./clock-CRwpbZo7.js";
import { P as Pencil } from "./pencil-CBNuz9iG.js";
import { T as Trash2 } from "./trash-2-CjKFTg7V.js";
import { M as MapPin } from "./map-pin-D8JyW74i.js";
import { U as Users } from "./users-CFKuiBCL.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./index-c7axHsGD.js";
import "./index-CU1ql3FD.js";
import "./index-Ch0bqfn5.js";
import "./index-C_YQrlYr.js";
import "./index-ClF13Y5F.js";
import "./chevron-down-ClPYuImO.js";
import "./index-BJH9mEUy.js";
const __iconNode$1 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3", key: "1u773s" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
];
const CircleQuestionMark = createLucideIcon("circle-question-mark", __iconNode$1);
const __iconNode = [
  ["circle", { cx: "18", cy: "5", r: "3", key: "gq8acd" }],
  ["circle", { cx: "6", cy: "12", r: "3", key: "w7nqdw" }],
  ["circle", { cx: "18", cy: "19", r: "3", key: "1xt0gg" }],
  ["line", { x1: "8.59", x2: "15.42", y1: "13.51", y2: "17.49", key: "47mynk" }],
  ["line", { x1: "15.41", x2: "8.59", y1: "6.51", y2: "10.49", key: "1n3mei" }]
];
const Share2 = createLucideIcon("share-2", __iconNode);
function Services() {
  const qc = useQueryClient();
  const {
    data: services = []
  } = useQuery({
    queryKey: ["services"],
    queryFn: api.listServices
  });
  const [editing, setEditing] = reactExports.useState(null);
  const [open, setOpen] = reactExports.useState(false);
  const blank = {
    name: "",
    description: "",
    duration_minutes: 30,
    price_cents: 0,
    category: "",
    active: true,
    type: "user",
    location: "",
    assignment_mode: "auto",
    manual_confirmation: false,
    advance_payment: false,
    schedule_type: "weekly",
    max_bookings: 1
  };
  const [form, setForm] = reactExports.useState(blank);
  const save = useMutation({
    mutationFn: async () => {
      const data = {
        ...form,
        price_cents: Math.round(Number(form.price_cents) * 100)
      };
      if (editing) return api.updateService(editing.id, data);
      return api.createService(data);
    },
    onSuccess: () => {
      qc.invalidateQueries({
        queryKey: ["services"]
      });
      toast.success(editing ? "Updated" : "Created");
      setOpen(false);
      setEditing(null);
      setForm(blank);
    },
    onError: (e) => toast.error(e.message)
  });
  const del = useMutation({
    mutationFn: (id) => api.deleteService(id),
    onSuccess: () => {
      qc.invalidateQueries({
        queryKey: ["services"]
      });
      toast.success("Deleted");
    }
  });
  const edit = (s) => {
    setEditing(s);
    setForm({
      ...s,
      price_cents: s.price_cents / 100
    });
    setOpen(true);
  };
  const copyShareLink = (id) => {
    const url = `${window.location.origin}/book/${id}`;
    navigator.clipboard.writeText(url);
    toast.success("Private share link copied!");
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl font-bold tracking-tight", children: "Appointments" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Manage your appointment types and booking rules." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Dialog, { open, onOpenChange: (o) => {
        setOpen(o);
        if (!o) {
          setEditing(null);
          setForm(blank);
        }
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "mr-1 h-4 w-4" }),
          " New appointment"
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "max-w-2xl max-h-[90vh] overflow-y-auto", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogTitle, { children: [
            editing ? "Edit" : "New",
            " appointment type"
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Tabs, { defaultValue: "general", className: "w-full", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsList, { className: "grid w-full grid-cols-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "general", children: "General" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "rules", children: "Booking Rules" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "questions", children: "Questions" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsContent, { value: "general", className: "space-y-4 pt-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Title" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: form.name, onChange: (e) => setForm({
                  ...form,
                  name: e.target.value
                }), placeholder: "e.g. 1:1 Strategy Session" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Description" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Textarea, { value: form.description ?? "", onChange: (e) => setForm({
                  ...form,
                  description: e.target.value
                }) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Duration (min)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: String(form.duration_minutes), onValueChange: (v) => setForm({
                    ...form,
                    duration_minutes: Number(v)
                  }), children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: [15, 30, 45, 60, 90, 120].map((m) => /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectItem, { value: String(m), children: [
                      m,
                      " min"
                    ] }, m)) })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Price (₹)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "number", step: "0.01", value: form.price_cents, onChange: (e) => setForm({
                    ...form,
                    price_cents: e.target.value
                  }) })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Type" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: form.type, onValueChange: (v) => setForm({
                    ...form,
                    type: v
                  }), children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "user", children: "Staff-based" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "resource", children: "Resource-based" })
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Schedule Type" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: form.schedule_type, onValueChange: (v) => setForm({
                    ...form,
                    schedule_type: v
                  }), children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "weekly", children: "Weekly (Recurring)" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "flexible", children: "Flexible (Manual)" })
                    ] })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Location" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: form.location ?? "", onChange: (e) => setForm({
                  ...form,
                  location: e.target.value
                }), placeholder: "Leave blank for Online Appointment" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsContent, { value: "rules", className: "space-y-4 pt-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between rounded-lg border p-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-0.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Advance Payment" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Require payment before booking confirmation" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Switch, { checked: form.advance_payment, onCheckedChange: (v) => setForm({
                  ...form,
                  advance_payment: v
                }) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between rounded-lg border p-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-0.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Manual Confirmation" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: 'Bookings stay "Reserved" until you confirm them' })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Switch, { checked: form.manual_confirmation, onCheckedChange: (v) => setForm({
                  ...form,
                  manual_confirmation: v
                }) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Assignment Mode" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: form.assignment_mode, onValueChange: (v) => setForm({
                  ...form,
                  assignment_mode: v
                }), children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "auto", children: "Automatically (System picks first available)" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "byVisitor", children: "By Visitor (Customer selects preferred provider)" })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Max Bookings per Slot" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "number", min: "1", value: form.max_bookings, onChange: (e) => setForm({
                  ...form,
                  max_bookings: Number(e.target.value)
                }) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between rounded-lg border p-3 bg-muted/50", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Published (Visible to customers)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Switch, { checked: form.active, onCheckedChange: (v) => setForm({
                  ...form,
                  active: v
                }) })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsContent, { value: "questions", className: "pt-4 text-center py-10", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CircleQuestionMark, { className: "mx-auto h-12 w-12 text-muted-foreground/20" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Custom question builder coming soon." })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogFooter, { className: "mt-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", onClick: () => setOpen(false), children: "Cancel" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: () => save.mutate(), disabled: !form.name || save.isPending, children: "Save Appointment" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-6 md:grid-cols-2 lg:grid-cols-3", children: [
      services.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "col-span-full p-12 text-center text-muted-foreground", children: 'No appointments yet. Click "New appointment" to add one.' }),
      services.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "overflow-hidden transition-all hover:shadow-md", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-3 bg-primary", style: {
          opacity: s.active ? 1 : 0.2
        } }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "truncate text-lg", children: s.name }),
              !s.active && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", children: "Draft" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-1 flex items-center gap-2 text-xs text-muted-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "secondary", className: "capitalize", children: s.type || "user" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-3 w-3" }),
                " ",
                s.duration_minutes,
                "m"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1 shrink-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "icon", variant: "ghost", onClick: () => copyShareLink(s.id), title: "Copy private link", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Share2, { className: "h-4 w-4" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "icon", variant: "ghost", onClick: () => edit(s), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Pencil, { className: "h-4 w-4" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "icon", variant: "ghost", onClick: () => del.mutate(s.id), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "h-4 w-4 text-destructive" }) })
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "pb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground line-clamp-2 min-h-[2.5rem]", children: s.description || "No description provided." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 grid grid-cols-2 gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 text-xs text-muted-foreground border rounded p-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-3 w-3" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate", children: s.location || "Online" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 text-xs text-muted-foreground border rounded p-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "h-3 w-3" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: s.assignment_mode === "auto" ? "Auto" : "By Visitor" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between border-t bg-muted/30 px-5 py-3 text-sm font-semibold", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Price" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: fmtMoney(s.price_cents) })
        ] })
      ] }, s.id))
    ] })
  ] });
}
export {
  Services as component
};
