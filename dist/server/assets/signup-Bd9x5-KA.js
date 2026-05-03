import { r as reactExports, U as jsxRuntimeExports } from "./worker-entry-CW2L5Pfm.js";
import { u as useNavigate, L as Link, t as toast } from "./router-GsH7DwrS.js";
import { s as supabase } from "./index-c7axHsGD.js";
import { B as Button } from "./button-McSNIiVm.js";
import { I as Input } from "./input-B48utwcC.js";
import { L as Label } from "./label-dg8TtdZv.js";
import { u as useAuthStore } from "./auth-store-DtQVi2Sx.js";
import { S as Sparkles } from "./sparkles-BogYp5AA.js";
import { c as createLucideIcon } from "./createLucideIcon-BfCcbVL6.js";
import { o as objectType, s as stringType } from "./types-DGfzljZx.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const __iconNode = [
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
  ["line", { x1: "19", x2: "19", y1: "8", y2: "14", key: "1bvyxn" }],
  ["line", { x1: "22", x2: "16", y1: "11", y2: "11", key: "1shjgl" }]
];
const UserPlus = createLucideIcon("user-plus", __iconNode);
const schema = objectType({
  full_name: stringType().trim().min(1, "Name required").max(100),
  email: stringType().trim().email("Invalid email").max(255),
  password: stringType().min(6, "Min 6 characters").max(100)
});
function Signup() {
  const navigate = useNavigate();
  const {
    user,
    profile,
    init,
    initialized
  } = useAuthStore();
  const [full_name, setName] = reactExports.useState("");
  const [email, setEmail] = reactExports.useState("");
  const [password, setPassword] = reactExports.useState("");
  const [loading, setLoading] = reactExports.useState(false);
  reactExports.useEffect(() => init(), [init]);
  reactExports.useEffect(() => {
    if (initialized && user && profile) {
      if (profile.role === "customer") {
        navigate({
          to: "/"
        });
      } else {
        navigate({
          to: "/app"
        });
      }
    }
  }, [initialized, user, profile, navigate]);
  const submit = async (e) => {
    e.preventDefault();
    const parsed = schema.safeParse({
      full_name,
      email,
      password
    });
    if (!parsed.success) {
      toast.error(parsed.error.errors[0].message);
      return;
    }
    setLoading(true);
    const {
      error
    } = await supabase.auth.signUp({
      email: parsed.data.email,
      password: parsed.data.password,
      options: {
        emailRedirectTo: `${window.location.origin}/login`,
        data: {
          full_name: parsed.data.full_name
        }
      }
    });
    if (error) {
      toast.error(error.message);
      setLoading(false);
    } else {
      toast.success("Account created! Redirecting...");
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-muted/30 px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full max-w-md", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "mb-8 flex items-center justify-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-lg shadow-primary/20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-6 w-6" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl font-bold tracking-tight", children: "Appointmate" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border bg-card p-8 shadow-xl shadow-muted/50", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-bold", children: "Create your account" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1.5 text-sm text-muted-foreground", children: "Start booking or managing appointments in seconds." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: submit, className: "space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "name", children: "Full Name" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "name", placeholder: "John Doe", value: full_name, onChange: (e) => setName(e.target.value), required: true })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "email", children: "Email Address" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "email", type: "email", placeholder: "name@example.com", autoComplete: "email", value: email, onChange: (e) => setEmail(e.target.value), required: true })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "password", children: "Password" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "password", type: "password", placeholder: "••••••••", autoComplete: "new-password", value: password, onChange: (e) => setPassword(e.target.value), required: true })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "submit", className: "w-full group h-11", disabled: loading, children: loading ? "Creating account..." : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          "Join Appointmate ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(UserPlus, { className: "ml-2 h-4 w-4 transition-transform group-hover:scale-110" })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-8 text-center text-sm text-muted-foreground", children: [
        "Already have an account? ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/login", className: "font-bold text-primary hover:underline", children: "Sign in instead" })
      ] })
    ] })
  ] }) });
}
export {
  Signup as component
};
