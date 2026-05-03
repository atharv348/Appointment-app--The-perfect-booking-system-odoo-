import { r as reactExports, U as jsxRuntimeExports } from "./worker-entry-CW2L5Pfm.js";
import { C as Card, a as CardHeader, b as CardTitle, c as CardContent } from "./card-By6FvKyl.js";
import { L as Label } from "./label-dg8TtdZv.js";
import { S as Switch } from "./switch-CRBvPd7p.js";
import { B as Button } from "./button-McSNIiVm.js";
import { u as useAuthStore } from "./auth-store-DtQVi2Sx.js";
import { t as toast } from "./router-GsH7DwrS.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./index-c7axHsGD.js";
import "./index-CU1ql3FD.js";
function Settings() {
  const signOut = useAuthStore((s) => s.signOut);
  const [dark, setDark] = reactExports.useState(false);
  const [notif, setNotif] = reactExports.useState(true);
  const [reminders, setReminders] = reactExports.useState(true);
  reactExports.useEffect(() => {
    const saved = localStorage.getItem("theme") === "dark";
    setDark(saved);
    document.documentElement.classList.toggle("dark", saved);
  }, []);
  const toggleDark = (v) => {
    setDark(v);
    localStorage.setItem("theme", v ? "dark" : "light");
    document.documentElement.classList.toggle("dark", v);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-2xl space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl font-bold tracking-tight", children: "Settings" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Preferences and workspace." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "Appearance" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "space-y-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "Dark mode", checked: dark, onChange: toggleDark }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "Notifications" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "Email notifications", checked: notif, onChange: setNotif }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "Booking reminders", checked: reminders, onChange: setReminders })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "Account" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "space-y-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", onClick: () => {
        signOut();
        toast.success("Signed out");
      }, children: "Sign out" }) })
    ] })
  ] });
}
function Row({
  label,
  checked,
  onChange
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between rounded-lg border p-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Switch, { checked, onCheckedChange: onChange })
  ] });
}
export {
  Settings as component
};
