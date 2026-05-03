import { r as reactExports, U as jsxRuntimeExports } from "./worker-entry-CW2L5Pfm.js";
import { u as useQuery, a as api } from "./api-Dj4XhP6t.js";
import { a as useQueryClient, t as toast } from "./router-GsH7DwrS.js";
import { u as useMutation } from "./useMutation-DCXyJmel.js";
import { C as Card } from "./card-By6FvKyl.js";
import { B as Button } from "./button-McSNIiVm.js";
import { I as Input } from "./input-B48utwcC.js";
import { L as Label } from "./label-dg8TtdZv.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-DAV2o4Pn.js";
import { D as Dialog, a as DialogTrigger, b as DialogContent, c as DialogHeader, d as DialogTitle, f as DialogFooter } from "./dialog-Df1ilx-I.js";
import { B as Badge } from "./badge-CxTZoo_v.js";
import { f as fmtMoney, a as fmtDateTime, d as downloadCsv } from "./format-CCH22ipv.js";
import { D as Download } from "./download-Dn-ugQX0.js";
import { P as Plus } from "./plus-Trx-CSa2.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./index-c7axHsGD.js";
import "./index-ClF13Y5F.js";
import "./index-C_YQrlYr.js";
import "./index-CU1ql3FD.js";
import "./chevron-down-ClPYuImO.js";
import "./createLucideIcon-BfCcbVL6.js";
import "./index-Ch0bqfn5.js";
function Payments() {
  const qc = useQueryClient();
  const {
    data: payments = []
  } = useQuery({
    queryKey: ["payments"],
    queryFn: api.listPayments
  });
  const {
    data: appts = []
  } = useQuery({
    queryKey: ["appointments"],
    queryFn: api.listAppointments
  });
  const [open, setOpen] = reactExports.useState(false);
  const blank = {
    appointment_id: "",
    amount_cents: 0,
    method: "cash",
    status: "paid"
  };
  const [form, setForm] = reactExports.useState(blank);
  const save = useMutation({
    mutationFn: () => api.createPayment({
      ...form,
      amount_cents: Math.round(Number(form.amount_cents) * 100),
      appointment_id: form.appointment_id || null
    }),
    onSuccess: () => {
      qc.invalidateQueries({
        queryKey: ["payments"]
      });
      toast.success("Payment recorded");
      setOpen(false);
      setForm(blank);
    },
    onError: (e) => toast.error(e.message)
  });
  const total = payments.reduce((s, p) => s + p.amount_cents, 0);
  const exportCsv = () => {
    downloadCsv("payments.csv", payments.map((p) => ({
      date: p.created_at,
      amount: (p.amount_cents / 100).toFixed(2),
      method: p.method,
      status: p.status,
      customer: p.appointment?.customer?.name ?? "",
      service: p.appointment?.service?.name ?? ""
    })));
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-between gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl font-bold tracking-tight", children: "Payments" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground", children: [
          "Total recorded: ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-foreground", children: fmtMoney(total) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "outline", onClick: exportCsv, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "mr-1 h-4 w-4" }),
          " Export CSV"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Dialog, { open, onOpenChange: setOpen, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "mr-1 h-4 w-4" }),
            " Record payment"
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { children: "Record payment" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Linked appointment (optional)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: form.appointment_id, onValueChange: (v) => {
                  const a = appts.find((x) => x.id === v);
                  setForm({
                    ...form,
                    appointment_id: v,
                    amount_cents: a ? a.price_cents / 100 : form.amount_cents
                  });
                }, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "None" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: appts.map((a) => /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectItem, { value: a.id, children: [
                    a.customer?.name ?? "Walk-in",
                    " · ",
                    fmtDateTime(a.start_at)
                  ] }, a.id)) })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Amount ($)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "number", step: "0.01", value: form.amount_cents, onChange: (e) => setForm({
                  ...form,
                  amount_cents: e.target.value
                }) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Method" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: form.method, onValueChange: (v) => setForm({
                  ...form,
                  method: v
                }), children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "cash", children: "Cash" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "card", children: "Card" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "transfer", children: "Transfer" })
                  ] })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogFooter, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", onClick: () => setOpen(false), children: "Cancel" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: () => save.mutate(), disabled: !form.amount_cents || save.isPending, children: "Save" })
            ] })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "border-b text-left text-muted-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-3 font-medium", children: "Date" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-3 font-medium", children: "Customer" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-3 font-medium", children: "Service" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-3 font-medium", children: "Method" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-3 font-medium", children: "Status" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-3 font-medium text-right", children: "Amount" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("tbody", { children: [
        payments.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("td", { colSpan: 6, className: "px-4 py-8 text-center text-muted-foreground", children: "No payments yet." }) }),
        payments.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b last:border-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: fmtDateTime(p.created_at) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: p.appointment?.customer?.name ?? "—" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: p.appointment?.service?.name ?? "—" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 capitalize", children: p.method }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "secondary", children: p.status }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-right font-medium", children: fmtMoney(p.amount_cents) })
        ] }, p.id))
      ] })
    ] }) }) })
  ] });
}
export {
  Payments as component
};
