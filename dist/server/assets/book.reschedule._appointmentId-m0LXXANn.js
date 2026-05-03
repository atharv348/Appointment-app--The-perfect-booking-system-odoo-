import { r as reactExports, U as jsxRuntimeExports } from "./worker-entry-CW2L5Pfm.js";
import { z as Route, u as useNavigate, a as useQueryClient, t as toast } from "./router-GsH7DwrS.js";
import { u as useQuery, a as api } from "./api-Dj4XhP6t.js";
import { u as useMutation } from "./useMutation-DCXyJmel.js";
import { C as Card, a as CardHeader, b as CardTitle, c as CardContent, d as CardFooter } from "./card-By6FvKyl.js";
import { B as Button } from "./button-McSNIiVm.js";
import { u as useAuthStore } from "./auth-store-DtQVi2Sx.js";
import { C as Calendar } from "./calendar-_PdrXl3J.js";
import { c as createLucideIcon } from "./createLucideIcon-BfCcbVL6.js";
import { C as ChevronLeft, a as ChevronRight } from "./chevron-right-BRa7SlBL.js";
import { C as Check } from "./chevron-down-ClPYuImO.js";
import { C as Calendar$1 } from "./calendar-CCET5Bj6.js";
import { C as Clock } from "./clock-CRwpbZo7.js";
import { M as MapPin } from "./map-pin-D8JyW74i.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./index-c7axHsGD.js";
import "./format-DdMuIHHV.js";
const __iconNode = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }]
];
const CircleAlert = createLucideIcon("circle-alert", __iconNode);
function RescheduleWizard() {
  const {
    appointmentId
  } = Route.useParams();
  const navigate = useNavigate();
  const qc = useQueryClient();
  const {
    user
  } = useAuthStore();
  const {
    data: appointment,
    isLoading: isLoadingAppt
  } = useQuery({
    queryKey: ["appointment", appointmentId],
    queryFn: async () => {
      const appts = await api.listAppointments();
      return appts.find((a) => a.id === appointmentId);
    }
  });
  const [step, setStep] = reactExports.useState(0);
  const [date, setDate] = reactExports.useState(void 0);
  const [selectedSlot, setSelectedSlot] = reactExports.useState(null);
  const slots = ["09:00 AM", "10:00 AM", "11:00 AM", "02:00 PM", "03:00 PM", "04:00 PM"];
  const steps = [{
    title: "Choose New Date",
    id: "date"
  }, {
    title: "Choose New Time",
    id: "time"
  }, {
    title: "Confirm Change",
    id: "confirm"
  }];
  const nextStep = () => setStep((s) => s + 1);
  const prevStep = () => setStep((s) => s - 1);
  const updateBooking = useMutation({
    mutationFn: async () => {
      if (!date || !selectedSlot || !appointment || !appointment.service) return;
      const timeParts = selectedSlot.match(/(\d+):(\d+)\s(AM|PM)/);
      if (!timeParts) return;
      let hours = parseInt(timeParts[1]);
      const minutes = parseInt(timeParts[2]);
      if (timeParts[3] === "PM" && hours < 12) hours += 12;
      if (timeParts[3] === "AM" && hours === 12) hours = 0;
      const start = new Date(date);
      start.setHours(hours, minutes, 0, 0);
      const end = new Date(start.getTime() + (appointment.service.duration_minutes || 30) * 6e4);
      return api.updateAppointment(appointment.id, {
        start_at: start.toISOString(),
        end_at: end.toISOString(),
        status: "confirmed"
        // Reset to confirmed on reschedule
      });
    },
    onSuccess: () => {
      qc.invalidateQueries({
        queryKey: ["appointments"]
      });
      toast.success("Appointment rescheduled successfully!");
      navigate({
        to: "/profile"
      });
    },
    onError: (e) => toast.error(e.message)
  });
  if (isLoadingAppt) return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-20 text-center", children: "Loading..." });
  if (!appointment) return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-20 text-center", children: "Appointment not found." });
  if (appointment.status === "cancelled") return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-20 text-center space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "h-12 w-12 text-destructive mx-auto" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-bold", children: "Cannot Reschedule" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "This appointment has already been cancelled." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: () => navigate({
      to: "/profile"
    }), children: "Back to Profile" })
  ] });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-muted/30 pb-20", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: "border-b bg-background/80 backdrop-blur sticky top-0 z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 h-16 flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "ghost", size: "sm", onClick: () => navigate({
        to: "/profile"
      }), children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "h-4 w-4 mr-2" }),
        " Back to Profile"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm font-medium", children: [
        "Rescheduling ",
        appointment.service?.name
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-24" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "container mx-auto px-4 py-8 max-w-xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 p-4 bg-amber-50 border border-amber-200 rounded-xl text-amber-800 mb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "h-5 w-5 shrink-0" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm", children: [
            "You are changing your appointment currently set for ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: new Date(appointment.start_at).toLocaleDateString() }),
            " at ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: new Date(appointment.start_at).toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit"
            }) }),
            "."
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-between mb-2", children: steps.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center gap-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `w-8 h-8 rounded-full border-2 flex items-center justify-center text-xs font-bold transition-colors ${i <= step ? "bg-primary border-primary text-primary-foreground" : "bg-background border-muted text-muted-foreground"}`, children: i < step ? /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-4 w-4" }) : i + 1 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-[10px] uppercase tracking-wider font-bold ${i <= step ? "text-primary" : "text-muted-foreground"}`, children: s.title })
        ] }, s.id)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1 bg-muted rounded-full overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full bg-primary transition-all duration-300", style: {
          width: `${step / (steps.length - 1) * 100}%`
        } }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "shadow-lg", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: steps[step].title }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "min-h-[300px]", children: [
          step === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { mode: "single", selected: date, onSelect: setDate, disabled: (d) => d < new Date((/* @__PURE__ */ new Date()).setHours(0, 0, 0, 0)), className: "rounded-md border shadow-sm" }) }),
          step === 1 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-3 sm:grid-cols-3", children: slots.map((slot) => /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: selectedSlot === slot ? "default" : "outline", className: "h-12 font-medium", onClick: () => setSelectedSlot(slot), children: slot }, slot)) }),
          step === 2 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-muted/50 p-5 rounded-xl space-y-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar$1, { className: "h-5 w-5 text-primary" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground uppercase font-bold", children: "New Date" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold", children: date?.toLocaleDateString(void 0, {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric"
                  }) })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-5 w-5 text-primary" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground uppercase font-bold", children: "New Time" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold", children: selectedSlot })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t pt-4 flex items-center gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-5 w-5 text-primary" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground uppercase font-bold", children: "Venue" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold", children: appointment.service?.location || "Online Appointment" })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-center text-muted-foreground", children: "Confirming this change will update your appointment immediately." })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardFooter, { className: "flex justify-between border-t p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", disabled: step === 0, onClick: prevStep, children: "Back" }),
          step < steps.length - 1 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: nextStep, disabled: step === 0 && !date || step === 1 && !selectedSlot, children: [
            "Continue ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "h-4 w-4 ml-2" })
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { className: "w-full sm:w-auto", onClick: () => updateBooking.mutate(), disabled: updateBooking.isPending, children: updateBooking.isPending ? "Updating..." : "Confirm New Schedule" })
        ] })
      ] })
    ] })
  ] });
}
export {
  RescheduleWizard as component
};
