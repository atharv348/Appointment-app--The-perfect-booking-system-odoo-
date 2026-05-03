import { r as reactExports, U as jsxRuntimeExports } from "./worker-entry-CW2L5Pfm.js";
import { u as useQuery, a as api } from "./api-Dj4XhP6t.js";
import { a as useQueryClient, t as toast } from "./router-GsH7DwrS.js";
import { u as useMutation } from "./useMutation-DCXyJmel.js";
import { C as Card } from "./card-By6FvKyl.js";
import { B as Button } from "./button-McSNIiVm.js";
import { I as Input } from "./input-B48utwcC.js";
import { L as Label } from "./label-dg8TtdZv.js";
import { D as Dialog, a as DialogTrigger, b as DialogContent, c as DialogHeader, d as DialogTitle, f as DialogFooter } from "./dialog-Df1ilx-I.js";
import { T as Tabs, a as TabsList, b as TabsTrigger, c as TabsContent } from "./tabs-CF5uFkj0.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-DAV2o4Pn.js";
import { S as Search } from "./search-CyqiJxrN.js";
import { P as Plus } from "./plus-Trx-CSa2.js";
import { U as Users } from "./users-CFKuiBCL.js";
import { c as createLucideIcon } from "./createLucideIcon-BfCcbVL6.js";
import { P as Pencil } from "./pencil-CBNuz9iG.js";
import { T as Trash2 } from "./trash-2-CjKFTg7V.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./index-c7axHsGD.js";
import "./index-Ch0bqfn5.js";
import "./index-C_YQrlYr.js";
import "./index-BJH9mEUy.js";
import "./index-ClF13Y5F.js";
import "./index-CU1ql3FD.js";
import "./chevron-down-ClPYuImO.js";
const __iconNode$3 = [
  [
    "path",
    {
      d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",
      key: "3c2336"
    }
  ],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
];
const BadgeCheck = createLucideIcon("badge-check", __iconNode$3);
const __iconNode$2 = [
  [
    "path",
    {
      d: "M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",
      key: "hh9hay"
    }
  ],
  ["path", { d: "m3.3 7 8.7 5 8.7-5", key: "g66t2b" }],
  ["path", { d: "M12 22V12", key: "d0xqtd" }]
];
const Box = createLucideIcon("box", __iconNode$2);
const __iconNode$1 = [
  ["path", { d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7", key: "132q7q" }],
  ["rect", { x: "2", y: "4", width: "20", height: "16", rx: "2", key: "izxlao" }]
];
const Mail = createLucideIcon("mail", __iconNode$1);
const __iconNode = [
  [
    "path",
    {
      d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",
      key: "9njp5v"
    }
  ]
];
const Phone = createLucideIcon("phone", __iconNode);
function UserResources() {
  const qc = useQueryClient();
  const {
    data: customers = []
  } = useQuery({
    queryKey: ["customers"],
    queryFn: api.listCustomers
  });
  const {
    data: services = []
  } = useQuery({
    queryKey: ["services"],
    queryFn: api.listServices
  });
  const [editing, setEditing] = reactExports.useState(null);
  const [open, setOpen] = reactExports.useState(false);
  const [search, setSearch] = reactExports.useState("");
  const [tab, setTab] = reactExports.useState("providers");
  const blank = {
    name: "",
    email: "",
    phone: "",
    type: "provider",
    capacity: 1,
    assigned_services: []
  };
  const [form, setForm] = reactExports.useState(blank);
  const save = useMutation({
    mutationFn: () => {
      const data = {
        ...form,
        notes: JSON.stringify({
          type: form.type,
          capacity: form.capacity,
          assigned_services: form.assigned_services
        })
      };
      return editing ? api.updateCustomer(editing.id, data) : api.createCustomer(data);
    },
    onSuccess: () => {
      qc.invalidateQueries({
        queryKey: ["customers"]
      });
      toast.success(editing ? "Updated" : "Created");
      setOpen(false);
      setEditing(null);
      setForm(blank);
    },
    onError: (e) => toast.error(e.message)
  });
  const del = useMutation({
    mutationFn: (id) => api.deleteCustomer(id),
    onSuccess: () => {
      qc.invalidateQueries({
        queryKey: ["customers"]
      });
      toast.success("Deleted");
    }
  });
  const edit = (c) => {
    let extra = {
      type: "provider",
      capacity: 1,
      assigned_services: []
    };
    try {
      if (c.notes) extra = JSON.parse(c.notes);
    } catch (e) {
    }
    setEditing(c);
    setForm({
      ...c,
      ...extra
    });
    setOpen(true);
  };
  const filtered = customers.filter((c) => {
    let type = "provider";
    try {
      if (c.notes) type = JSON.parse(c.notes).type;
    } catch (e) {
    }
    const matchesSearch = c.name.toLowerCase().includes(search.toLowerCase());
    const matchesTab = tab === "providers" && type === "provider" || tab === "resources" && type === "resource";
    return matchesSearch && matchesTab;
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-between gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl font-bold tracking-tight", children: "Users & Resources" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Manage service providers and physical assets." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-64", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: search, onChange: (e) => setSearch(e.target.value), placeholder: "Search…", className: "pl-9" })
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
            " Add New"
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "max-w-md", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogTitle, { children: [
              editing ? "Edit" : "Add",
              " ",
              form.type === "provider" ? "Provider" : "Resource"
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 pt-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Type" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: form.type, onValueChange: (v) => setForm({
                  ...form,
                  type: v
                }), children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "provider", children: "Service Provider (Staff)" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "resource", children: "Resource (Room, Court, etc.)" })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Name" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: form.name, onChange: (e) => setForm({
                  ...form,
                  name: e.target.value
                }), placeholder: form.type === "provider" ? "Full Name" : "Resource Name" })
              ] }),
              form.type === "provider" ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Email" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "email", value: form.email ?? "", onChange: (e) => setForm({
                    ...form,
                    email: e.target.value
                  }) })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Phone" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: form.phone ?? "", onChange: (e) => setForm({
                    ...form,
                    phone: e.target.value
                  }) })
                ] })
              ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Capacity" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "number", value: form.capacity, onChange: (e) => setForm({
                  ...form,
                  capacity: Number(e.target.value)
                }) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Assign to Appointments" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-2 max-h-40 overflow-y-auto border rounded-md p-2", children: services.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "checkbox", id: s.id, checked: form.assigned_services?.includes(s.id), onChange: (e) => {
                    const services2 = form.assigned_services || [];
                    if (e.target.checked) setForm({
                      ...form,
                      assigned_services: [...services2, s.id]
                    });
                    else setForm({
                      ...form,
                      assigned_services: services2.filter((id) => id !== s.id)
                    });
                  } }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: s.id, className: "text-xs truncate cursor-pointer", children: s.name })
                ] }, s.id)) })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogFooter, { className: "mt-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", onClick: () => setOpen(false), children: "Cancel" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: () => save.mutate(), disabled: !form.name || save.isPending, children: [
                "Save ",
                form.type === "provider" ? "Provider" : "Resource"
              ] })
            ] })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Tabs, { value: tab, onValueChange: setTab, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsList, { className: "grid w-full grid-cols-2 max-w-[400px]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsTrigger, { value: "providers", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "h-4 w-4 mr-2" }),
          " Providers"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsTrigger, { value: "resources", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { className: "h-4 w-4 mr-2" }),
          " Resources"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "providers", className: "pt-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 md:grid-cols-2 lg:grid-cols-3", children: [
        filtered.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "col-span-full p-12 text-center text-muted-foreground", children: "No providers found." }),
        filtered.map((c, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(UserResourceCard, { item: c, index: i, type: "provider", onEdit: () => edit(c), onDelete: () => del.mutate(c.id) }, c.id))
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "resources", className: "pt-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 md:grid-cols-2 lg:grid-cols-3", children: [
        filtered.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "col-span-full p-12 text-center text-muted-foreground", children: "No resources found." }),
        filtered.map((c, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(UserResourceCard, { item: c, index: i, type: "resource", onEdit: () => edit(c), onDelete: () => del.mutate(c.id) }, c.id))
      ] }) })
    ] })
  ] });
}
function UserResourceCard({
  item,
  index,
  type,
  onEdit,
  onDelete
}) {
  let extra = {
    capacity: 1,
    assigned_services: []
  };
  try {
    if (item.notes) extra = JSON.parse(item.notes);
  } catch (e) {
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-5 overflow-hidden transition-all hover:shadow-md", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary shrink-0", children: type === "provider" ? `A${index + 1}` : `R${index + 1}` }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "truncate font-semibold", children: item.name }),
          type === "provider" && /* @__PURE__ */ jsxRuntimeExports.jsx(BadgeCheck, { className: "h-3 w-3 text-primary" })
        ] }),
        type === "provider" ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          item.email && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-1 flex items-center gap-1 text-xs text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-3 w-3" }),
            item.email
          ] }),
          item.phone && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "flex items-center gap-1 text-xs text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-3 w-3" }),
            item.phone
          ] })
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-1 text-xs text-muted-foreground", children: [
          "Capacity: ",
          extra.capacity,
          " people"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "icon", variant: "ghost", onClick: onEdit, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Pencil, { className: "h-4 w-4" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "icon", variant: "ghost", onClick: onDelete, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "h-4 w-4 text-destructive" }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 pt-3 border-t flex flex-wrap gap-1", children: extra.assigned_services?.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] text-muted-foreground w-full mb-1", children: [
      "Assigned to ",
      extra.assigned_services.length,
      " services"
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-muted-foreground w-full mb-1", children: "Not assigned to any service" }) })
  ] });
}
export {
  UserResources as component
};
