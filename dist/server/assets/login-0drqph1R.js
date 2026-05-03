import { r as reactExports, U as jsxRuntimeExports } from "./worker-entry-CW2L5Pfm.js";
import { u as useNavigate, t as toast, L as Link } from "./router-GsH7DwrS.js";
import { s as supabase } from "./index-c7axHsGD.js";
import { B as Button } from "./button-McSNIiVm.js";
import { I as Input } from "./input-B48utwcC.js";
import { L as Label } from "./label-dg8TtdZv.js";
import { u as useAuthStore } from "./auth-store-DtQVi2Sx.js";
import { D as Dialog, a as DialogTrigger, b as DialogContent, c as DialogHeader, d as DialogTitle, e as DialogDescription, f as DialogFooter } from "./dialog-Df1ilx-I.js";
import { T as Tabs, a as TabsList, b as TabsTrigger } from "./tabs-CF5uFkj0.js";
import { S as Sparkles } from "./sparkles-BogYp5AA.js";
import { c as createLucideIcon } from "./createLucideIcon-BfCcbVL6.js";
import { o as objectType, s as stringType } from "./types-DGfzljZx.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./index-Ch0bqfn5.js";
import "./index-C_YQrlYr.js";
import "./index-BJH9mEUy.js";
import "./index-ClF13Y5F.js";
const __iconNode$3 = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
];
const ArrowRight = createLucideIcon("arrow-right", __iconNode$3);
const __iconNode$2 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
];
const CircleCheck = createLucideIcon("circle-check", __iconNode$2);
const __iconNode$1 = [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y"
    }
  ],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
];
const ShieldCheck = createLucideIcon("shield-check", __iconNode$1);
const __iconNode = [
  ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
  ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }]
];
const User = createLucideIcon("user", __iconNode);
const schema = objectType({
  email: stringType().trim().email("Invalid email").max(255),
  password: stringType().min(6, "Min 6 characters").max(100)
});
function Login() {
  const navigate = useNavigate();
  const {
    user,
    profile,
    init,
    initialized
  } = useAuthStore();
  const [email, setEmail] = reactExports.useState("");
  const [password, setPassword] = reactExports.useState("");
  const [loading, setLoading] = reactExports.useState(false);
  const [resetEmail, setResetEmail] = reactExports.useState("");
  const [resetLoading, setResetLoading] = reactExports.useState(false);
  const [resetOpen, setResetOpen] = reactExports.useState(false);
  const [loginType, setLoginType] = reactExports.useState("customer");
  const [showBypass, setShowBypass] = reactExports.useState(false);
  reactExports.useEffect(() => {
    let timeout;
    if (loading) {
      timeout = setTimeout(() => {
        if (loading) {
          setLoading(false);
          setShowBypass(true);
          toast.error("Login verification is taking longer than expected. Please try again.");
        }
      }, 15e3);
    }
    return () => clearTimeout(timeout);
  }, [loading]);
  const forceReset = async () => {
    toast.info("Clearing session and reloading...");
    await useAuthStore.getState().signOut();
    window.location.reload();
  };
  const devBypass = () => {
    toast.info("Bypassing verification for development...");
    if (loginType === "admin") navigate({
      to: "/app"
    });
    else navigate({
      to: "/"
    });
  };
  reactExports.useEffect(() => init(), [init]);
  reactExports.useEffect(() => {
    if (initialized && user && profile) {
      console.log("Login redirect check:", {
        role: profile.role,
        loginType
      });
      const actualRole = profile.role || "customer";
      if (actualRole === "customer") {
        if (loginType === "admin") {
          toast.error("This account does not have admin privileges.");
          useAuthStore.getState().signOut();
          setLoading(false);
          return;
        }
        setLoading(false);
        navigate({
          to: "/"
        });
      } else {
        setLoading(false);
        if (loginType === "customer") {
          navigate({
            to: "/"
          });
        } else {
          navigate({
            to: "/app"
          });
        }
      }
    }
  }, [initialized, user, profile, navigate, loginType]);
  const submit = async (e) => {
    e.preventDefault();
    console.log("Login attempt started for:", email);
    const parsed = schema.safeParse({
      email,
      password
    });
    if (!parsed.success) {
      toast.error(parsed.error.errors[0].message);
      return;
    }
    setLoading(true);
    try {
      console.log("Attempting login...");
      const {
        data,
        error
      } = await supabase.auth.signInWithPassword(parsed.data);
      if (error) {
        console.error("Supabase login error:", error);
        toast.error(error.message);
        setLoading(false);
        return;
      }
      if (data.user) {
        console.log("Login successful, updating session...");
        await useAuthStore.getState().setSession(data.session);
        toast.success(`Logged in as ${loginType === "admin" ? "Admin" : "Customer"}`);
        setLoading(false);
        if (loginType === "admin") {
          navigate({
            to: "/app"
          });
        } else {
          navigate({
            to: "/"
          });
        }
      }
    } catch (err) {
      console.error("Unexpected login error:", err);
      toast.error("Login failed. Please check your connection.");
      setLoading(false);
    }
  };
  const handleForgotPassword = async (e) => {
    e.preventDefault();
    if (!resetEmail) {
      toast.error("Please enter your email");
      return;
    }
    setResetLoading(true);
    const {
      error
    } = await supabase.auth.resetPasswordForEmail(resetEmail, {
      redirectTo: `${window.location.origin}/reset-password`
    });
    setResetLoading(false);
    if (error) {
      toast.error(error.message);
    } else {
      toast.success("Password reset link sent to your email!");
      setResetOpen(false);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-muted/30 px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full max-w-md", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "mb-8 flex items-center justify-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-lg shadow-primary/20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-6 w-6" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl font-bold tracking-tight", children: "Appointmate" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border bg-card p-8 shadow-xl shadow-muted/50", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-bold", children: "Welcome Back" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1.5 text-sm text-muted-foreground", children: "Choose your login type to continue" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Tabs, { value: loginType, onValueChange: (v) => setLoginType(v), className: "mb-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsList, { className: "grid w-full grid-cols-2 h-12 p-1 bg-muted/50", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsTrigger, { value: "customer", className: "data-[state=active]:bg-background data-[state=active]:shadow-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "h-4 w-4 mr-2" }),
          " Customer"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsTrigger, { value: "admin", className: "data-[state=active]:bg-background data-[state=active]:shadow-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "h-4 w-4 mr-2" }),
          " Admin/Staff"
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: submit, className: "space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "email", children: "Email Address" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "email", type: "email", placeholder: "name@example.com", autoComplete: "email", value: email, onChange: (e) => setEmail(e.target.value), required: true })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "password", children: "Password" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Dialog, { open: resetOpen, onOpenChange: setResetOpen, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", className: "text-xs font-medium text-primary hover:underline", children: "Forgot password?" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "sm:max-w-[425px]", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogHeader, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { children: "Reset password" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(DialogDescription, { children: "Enter your email address and we'll send you a link to reset your password." })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleForgotPassword, className: "space-y-4 pt-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "reset-email", children: "Email Address" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "reset-email", type: "email", placeholder: "name@example.com", value: resetEmail, onChange: (e) => setResetEmail(e.target.value), required: true })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(DialogFooter, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "submit", disabled: resetLoading, className: "w-full", children: resetLoading ? "Sending..." : "Send Reset Link" }) })
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "password", type: "password", autoComplete: "current-password", value: password, onChange: (e) => setPassword(e.target.value), required: true })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "submit", className: "w-full group h-11", disabled: loading, children: loading ? "Verifying..." : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          "Login as ",
          loginType === "admin" ? "Admin" : "Customer",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex items-center justify-center gap-2 text-xs text-muted-foreground bg-muted/30 p-3 rounded-lg", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-3 w-3 text-primary" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Your role will be verified automatically" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 text-center text-sm text-muted-foreground", children: [
        "No account yet? ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/signup", className: "font-bold text-primary hover:underline", children: "Join Appointmate" })
      ] }),
      showBypass && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 pt-4 border-t space-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", className: "w-full text-xs text-muted-foreground", onClick: forceReset, children: 'Clear Session & Fix "Stuck" Issue' }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", className: "w-full text-xs text-muted-foreground", onClick: devBypass, children: "(Dev) Skip to Dashboard" })
      ] })
    ] })
  ] }) });
}
export {
  Login as component
};
