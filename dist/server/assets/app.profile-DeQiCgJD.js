import { r as reactExports, U as jsxRuntimeExports } from "./worker-entry-CW2L5Pfm.js";
import { u as useQuery, a as api } from "./api-Dj4XhP6t.js";
import { a as useQueryClient, t as toast } from "./router-GsH7DwrS.js";
import { u as useMutation } from "./useMutation-DCXyJmel.js";
import { C as Card, a as CardHeader, b as CardTitle, c as CardContent } from "./card-By6FvKyl.js";
import { B as Button } from "./button-McSNIiVm.js";
import { I as Input } from "./input-B48utwcC.js";
import { L as Label } from "./label-dg8TtdZv.js";
import { A as Avatar, a as AvatarFallback } from "./avatar-CTPLqmGi.js";
import { u as useAuthStore } from "./auth-store-DtQVi2Sx.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./index-c7axHsGD.js";
function Profile() {
  const qc = useQueryClient();
  const user = useAuthStore((s) => s.user);
  const {
    data: profile
  } = useQuery({
    queryKey: ["profile"],
    queryFn: api.getProfile
  });
  const [form, setForm] = reactExports.useState({
    full_name: "",
    business_name: "",
    phone: ""
  });
  reactExports.useEffect(() => {
    if (profile) setForm({
      full_name: profile.full_name ?? "",
      business_name: profile.business_name ?? "",
      phone: profile.phone ?? ""
    });
  }, [profile]);
  const save = useMutation({
    mutationFn: () => api.updateProfile(form),
    onSuccess: () => {
      qc.invalidateQueries({
        queryKey: ["profile"]
      });
      toast.success("Saved");
    },
    onError: (e) => toast.error(e.message)
  });
  const initials = (form.full_name || user?.email || "U").slice(0, 2).toUpperCase();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-2xl space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl font-bold tracking-tight", children: "Profile" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "How you appear to your clients." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "Personal details" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Avatar, { className: "h-16 w-16", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AvatarFallback, { className: "text-lg", children: initials }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium", children: user?.email }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
              "Member since ",
              profile?.created_at ? new Date(profile.created_at).toLocaleDateString() : "—"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Full name" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: form.full_name, onChange: (e) => setForm({
            ...form,
            full_name: e.target.value
          }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Business name" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: form.business_name, onChange: (e) => setForm({
            ...form,
            business_name: e.target.value
          }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Phone" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: form.phone, onChange: (e) => setForm({
            ...form,
            phone: e.target.value
          }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: () => save.mutate(), disabled: save.isPending, children: "Save changes" }) })
      ] })
    ] })
  ] });
}
export {
  Profile as component
};
