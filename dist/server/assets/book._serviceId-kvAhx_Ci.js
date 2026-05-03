import { r as reactExports, U as jsxRuntimeExports } from "./worker-entry-CW2L5Pfm.js";
import { g as useControllableState, P as Primitive, h as useComposedRefs, i as composeEventHandlers, j as Presence, k as createContextScope, l as useSize, c as cn, R as Route, u as useNavigate, a as useQueryClient, t as toast } from "./router-GsH7DwrS.js";
import { u as useQuery, a as api } from "./api-Dj4XhP6t.js";
import { u as useMutation } from "./useMutation-DCXyJmel.js";
import { C as Card, a as CardHeader, b as CardTitle, c as CardContent, d as CardFooter } from "./card-By6FvKyl.js";
import { B as Button } from "./button-McSNIiVm.js";
import { I as Input } from "./input-B48utwcC.js";
import { T as Textarea } from "./textarea-CVXk0D68.js";
import { L as Label } from "./label-dg8TtdZv.js";
import { B as Badge } from "./badge-CxTZoo_v.js";
import { f as fmtMoney } from "./format-CCH22ipv.js";
import { u as useAuthStore } from "./auth-store-DtQVi2Sx.js";
import { C as Calendar$1 } from "./calendar-_PdrXl3J.js";
import { R as Root, I as Item, c as createRovingFocusGroupScope } from "./index-BJH9mEUy.js";
import { u as useDirection } from "./index-ClF13Y5F.js";
import { u as usePrevious } from "./index-CU1ql3FD.js";
import { c as createLucideIcon } from "./createLucideIcon-BfCcbVL6.js";
import { C as Check } from "./chevron-down-ClPYuImO.js";
import { C as Calendar } from "./calendar-CCET5Bj6.js";
import { S as Sparkles } from "./sparkles-BogYp5AA.js";
import { M as MapPin } from "./map-pin-D8JyW74i.js";
import { C as ChevronLeft, a as ChevronRight } from "./chevron-right-BRa7SlBL.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./index-c7axHsGD.js";
import "./format-DdMuIHHV.js";
const __iconNode = [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]];
const Circle = createLucideIcon("circle", __iconNode);
var RADIO_NAME = "Radio";
var [createRadioContext, createRadioScope] = createContextScope(RADIO_NAME);
var [RadioProvider, useRadioContext] = createRadioContext(RADIO_NAME);
var Radio = reactExports.forwardRef(
  (props, forwardedRef) => {
    const {
      __scopeRadio,
      name,
      checked = false,
      required,
      disabled,
      value = "on",
      onCheck,
      form,
      ...radioProps
    } = props;
    const [button, setButton] = reactExports.useState(null);
    const composedRefs = useComposedRefs(forwardedRef, (node) => setButton(node));
    const hasConsumerStoppedPropagationRef = reactExports.useRef(false);
    const isFormControl = button ? form || !!button.closest("form") : true;
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(RadioProvider, { scope: __scopeRadio, checked, disabled, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Primitive.button,
        {
          type: "button",
          role: "radio",
          "aria-checked": checked,
          "data-state": getState(checked),
          "data-disabled": disabled ? "" : void 0,
          disabled,
          value,
          ...radioProps,
          ref: composedRefs,
          onClick: composeEventHandlers(props.onClick, (event) => {
            if (!checked) onCheck?.();
            if (isFormControl) {
              hasConsumerStoppedPropagationRef.current = event.isPropagationStopped();
              if (!hasConsumerStoppedPropagationRef.current) event.stopPropagation();
            }
          })
        }
      ),
      isFormControl && /* @__PURE__ */ jsxRuntimeExports.jsx(
        RadioBubbleInput,
        {
          control: button,
          bubbles: !hasConsumerStoppedPropagationRef.current,
          name,
          value,
          checked,
          required,
          disabled,
          form,
          style: { transform: "translateX(-100%)" }
        }
      )
    ] });
  }
);
Radio.displayName = RADIO_NAME;
var INDICATOR_NAME = "RadioIndicator";
var RadioIndicator = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeRadio, forceMount, ...indicatorProps } = props;
    const context = useRadioContext(INDICATOR_NAME, __scopeRadio);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Presence, { present: forceMount || context.checked, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Primitive.span,
      {
        "data-state": getState(context.checked),
        "data-disabled": context.disabled ? "" : void 0,
        ...indicatorProps,
        ref: forwardedRef
      }
    ) });
  }
);
RadioIndicator.displayName = INDICATOR_NAME;
var BUBBLE_INPUT_NAME = "RadioBubbleInput";
var RadioBubbleInput = reactExports.forwardRef(
  ({
    __scopeRadio,
    control,
    checked,
    bubbles = true,
    ...props
  }, forwardedRef) => {
    const ref = reactExports.useRef(null);
    const composedRefs = useComposedRefs(ref, forwardedRef);
    const prevChecked = usePrevious(checked);
    const controlSize = useSize(control);
    reactExports.useEffect(() => {
      const input = ref.current;
      if (!input) return;
      const inputProto = window.HTMLInputElement.prototype;
      const descriptor = Object.getOwnPropertyDescriptor(
        inputProto,
        "checked"
      );
      const setChecked = descriptor.set;
      if (prevChecked !== checked && setChecked) {
        const event = new Event("click", { bubbles });
        setChecked.call(input, checked);
        input.dispatchEvent(event);
      }
    }, [prevChecked, checked, bubbles]);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Primitive.input,
      {
        type: "radio",
        "aria-hidden": true,
        defaultChecked: checked,
        ...props,
        tabIndex: -1,
        ref: composedRefs,
        style: {
          ...props.style,
          ...controlSize,
          position: "absolute",
          pointerEvents: "none",
          opacity: 0,
          margin: 0
        }
      }
    );
  }
);
RadioBubbleInput.displayName = BUBBLE_INPUT_NAME;
function getState(checked) {
  return checked ? "checked" : "unchecked";
}
var ARROW_KEYS = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"];
var RADIO_GROUP_NAME = "RadioGroup";
var [createRadioGroupContext] = createContextScope(RADIO_GROUP_NAME, [
  createRovingFocusGroupScope,
  createRadioScope
]);
var useRovingFocusGroupScope = createRovingFocusGroupScope();
var useRadioScope = createRadioScope();
var [RadioGroupProvider, useRadioGroupContext] = createRadioGroupContext(RADIO_GROUP_NAME);
var RadioGroup$1 = reactExports.forwardRef(
  (props, forwardedRef) => {
    const {
      __scopeRadioGroup,
      name,
      defaultValue,
      value: valueProp,
      required = false,
      disabled = false,
      orientation,
      dir,
      loop = true,
      onValueChange,
      ...groupProps
    } = props;
    const rovingFocusGroupScope = useRovingFocusGroupScope(__scopeRadioGroup);
    const direction = useDirection(dir);
    const [value, setValue] = useControllableState({
      prop: valueProp,
      defaultProp: defaultValue ?? null,
      onChange: onValueChange,
      caller: RADIO_GROUP_NAME
    });
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      RadioGroupProvider,
      {
        scope: __scopeRadioGroup,
        name,
        required,
        disabled,
        value,
        onValueChange: setValue,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Root,
          {
            asChild: true,
            ...rovingFocusGroupScope,
            orientation,
            dir: direction,
            loop,
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              Primitive.div,
              {
                role: "radiogroup",
                "aria-required": required,
                "aria-orientation": orientation,
                "data-disabled": disabled ? "" : void 0,
                dir: direction,
                ...groupProps,
                ref: forwardedRef
              }
            )
          }
        )
      }
    );
  }
);
RadioGroup$1.displayName = RADIO_GROUP_NAME;
var ITEM_NAME = "RadioGroupItem";
var RadioGroupItem$1 = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeRadioGroup, disabled, ...itemProps } = props;
    const context = useRadioGroupContext(ITEM_NAME, __scopeRadioGroup);
    const isDisabled = context.disabled || disabled;
    const rovingFocusGroupScope = useRovingFocusGroupScope(__scopeRadioGroup);
    const radioScope = useRadioScope(__scopeRadioGroup);
    const ref = reactExports.useRef(null);
    const composedRefs = useComposedRefs(forwardedRef, ref);
    const checked = context.value === itemProps.value;
    const isArrowKeyPressedRef = reactExports.useRef(false);
    reactExports.useEffect(() => {
      const handleKeyDown = (event) => {
        if (ARROW_KEYS.includes(event.key)) {
          isArrowKeyPressedRef.current = true;
        }
      };
      const handleKeyUp = () => isArrowKeyPressedRef.current = false;
      document.addEventListener("keydown", handleKeyDown);
      document.addEventListener("keyup", handleKeyUp);
      return () => {
        document.removeEventListener("keydown", handleKeyDown);
        document.removeEventListener("keyup", handleKeyUp);
      };
    }, []);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Item,
      {
        asChild: true,
        ...rovingFocusGroupScope,
        focusable: !isDisabled,
        active: checked,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Radio,
          {
            disabled: isDisabled,
            required: context.required,
            checked,
            ...radioScope,
            ...itemProps,
            name: context.name,
            ref: composedRefs,
            onCheck: () => context.onValueChange(itemProps.value),
            onKeyDown: composeEventHandlers((event) => {
              if (event.key === "Enter") event.preventDefault();
            }),
            onFocus: composeEventHandlers(itemProps.onFocus, () => {
              if (isArrowKeyPressedRef.current) ref.current?.click();
            })
          }
        )
      }
    );
  }
);
RadioGroupItem$1.displayName = ITEM_NAME;
var INDICATOR_NAME2 = "RadioGroupIndicator";
var RadioGroupIndicator = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeRadioGroup, ...indicatorProps } = props;
    const radioScope = useRadioScope(__scopeRadioGroup);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(RadioIndicator, { ...radioScope, ...indicatorProps, ref: forwardedRef });
  }
);
RadioGroupIndicator.displayName = INDICATOR_NAME2;
var Root2 = RadioGroup$1;
var Item2 = RadioGroupItem$1;
var Indicator = RadioGroupIndicator;
const RadioGroup = reactExports.forwardRef(({ className, ...props }, ref) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Root2, { className: cn("grid gap-2", className), ...props, ref });
});
RadioGroup.displayName = Root2.displayName;
const RadioGroupItem = reactExports.forwardRef(({ className, ...props }, ref) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Item2,
    {
      ref,
      className: cn(
        "aspect-square h-4 w-4 rounded-full border border-primary text-primary shadow focus:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
        className
      ),
      ...props,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Indicator, { className: "flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Circle, { className: "h-3.5 w-3.5 fill-primary" }) })
    }
  );
});
RadioGroupItem.displayName = Item2.displayName;
function BookingWizard() {
  const {
    serviceId
  } = Route.useParams();
  const navigate = useNavigate();
  const qc = useQueryClient();
  const {
    user,
    profile
  } = useAuthStore();
  const {
    data: service,
    isLoading: isLoadingService
  } = useQuery({
    queryKey: ["service", serviceId],
    queryFn: async () => {
      const services = await api.listServices();
      return services.find((s) => s.id === serviceId);
    }
  });
  const [step, setStep] = reactExports.useState(0);
  const [selectedProvider, setSelectedProvider] = reactExports.useState(null);
  const [date, setDate] = reactExports.useState(void 0);
  const [selectedSlot, setSelectedSlot] = reactExports.useState(null);
  const [capacity, setCapacity] = reactExports.useState(1);
  const [answers, setAnswers] = reactExports.useState({});
  const [resetOpen, setResetOpen] = reactExports.useState(false);
  const [isConfirmed, setIsConfirmed] = reactExports.useState(false);
  const [confirmedBooking, setConfirmedBooking] = reactExports.useState(null);
  const [paymentMethod, setPaymentMethod] = reactExports.useState("card");
  const providers = [{
    id: "p1",
    name: "Alex Rivera",
    role: "Senior Stylist",
    badge: "A1"
  }, {
    id: "p2",
    name: "Sam Chen",
    role: "Specialist",
    badge: "A2"
  }];
  const slots = ["09:00 AM", "10:00 AM", "11:00 AM", "02:00 PM", "03:00 PM", "04:00 PM"];
  const steps = [{
    title: "Provider",
    id: "provider"
  }, {
    title: "Date",
    id: "date"
  }, {
    title: "Time",
    id: "time"
  }, {
    title: "Details",
    id: "details"
  }, {
    title: "Review",
    id: "review"
  }];
  const assignmentMode = service?.assignment_mode || "auto";
  const nextStep = () => {
    if (step === 0 && assignmentMode === "auto") {
      setStep(1);
    } else {
      setStep((s) => s + 1);
    }
  };
  const prevStep = () => {
    if (step === 1 && assignmentMode === "auto") {
      setStep(0);
    } else {
      setStep((s) => s - 1);
    }
  };
  const createBooking = useMutation({
    mutationFn: async () => {
      if (!date || !selectedSlot || !service) return;
      const isTaken = Math.random() > 0.95;
      if (isTaken) {
        throw new Error("This slot was just taken. Please pick another time.");
      }
      const timeParts = selectedSlot.match(/(\d+):(\d+)\s(AM|PM)/);
      if (!timeParts) return;
      let hours = parseInt(timeParts[1]);
      const minutes = parseInt(timeParts[2]);
      if (timeParts[3] === "PM" && hours < 12) hours += 12;
      if (timeParts[3] === "AM" && hours === 12) hours = 0;
      const start = new Date(date);
      start.setHours(hours, minutes, 0, 0);
      const end = new Date(start.getTime() + service.duration_minutes * 6e4);
      const bookingData = {
        customer_id: user?.id || null,
        service_id: service.id,
        start_at: start.toISOString(),
        end_at: end.toISOString(),
        status: service.manual_confirmation ? "pending" : "confirmed",
        notes: JSON.stringify({
          ...answers,
          capacity
        }),
        price_cents: service.price_cents
      };
      return api.createAppointment(bookingData);
    },
    onSuccess: (data) => {
      qc.invalidateQueries({
        queryKey: ["appointments"]
      });
      setConfirmedBooking(data);
      setIsConfirmed(true);
      toast.success("Booking confirmed!");
    },
    onError: (e) => {
      toast.error(e.message);
      if (e.message.includes("taken")) {
        setStep(2);
        setSelectedSlot(null);
      }
    }
  });
  if (isLoadingService) return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-20 text-center", children: "Loading..." });
  if (!service) return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-20 text-center", children: "Service not found." });
  if (isConfirmed) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen bg-muted/30 pb-20 flex flex-col items-center justify-center p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "max-w-md w-full shadow-2xl border-t-4 border-t-primary animate-in zoom-in-95 duration-300", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { className: "text-center pb-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-8 w-8 text-primary", strokeWidth: 3 }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-2xl font-bold", children: "Booking Confirmed!" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Your appointment is scheduled." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-6 pt-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-muted/50 rounded-xl p-5 space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "h-5 w-5 text-primary mt-0.5" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold", children: new Date(confirmedBooking.start_at).toLocaleDateString(void 0, {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric"
              }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-muted-foreground", children: new Date(confirmedBooking.start_at).toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit"
              }) })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-5 w-5 text-primary mt-0.5" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold", children: service.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm text-muted-foreground", children: [
                service.duration_minutes,
                " Minutes"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-5 w-5 text-primary mt-0.5" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold", children: "Venue / Location" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-muted-foreground", children: service.location || "Online Appointment" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t pt-4 mt-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase font-bold text-muted-foreground mb-1", children: "Status" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: service.manual_confirmation ? "secondary" : "default", className: "px-3 py-1", children: service.manual_confirmation ? "Reserved - Pending Confirmation" : "Confirmed" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center text-sm text-muted-foreground italic px-4", children: '"A confirmation email has been sent to your registered address."' })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardFooter, { className: "flex flex-col gap-2 pt-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { className: "w-full", onClick: () => navigate({
          to: "/profile"
        }), children: "View My Bookings" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", className: "w-full", onClick: () => navigate({
          to: "/"
        }), children: "Back to Home" })
      ] })
    ] }) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-muted/30 pb-20", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: "border-b bg-background/80 backdrop-blur sticky top-0 z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 h-16 flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "ghost", size: "sm", onClick: () => navigate({
        to: "/"
      }), children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "h-4 w-4 mr-2" }),
        " Cancel"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm font-medium", children: [
        "Booking ",
        service.name
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-20" }),
      " "
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "container mx-auto px-4 py-8 max-w-2xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-8", children: [
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
          step === 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mb-2", children: "Choose your preferred service provider" }),
            providers.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { onClick: () => setSelectedProvider(p.id), className: `flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all ${selectedProvider === p.id ? "border-primary bg-primary/5" : "border-muted hover:border-muted-foreground/30"}`, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary", children: p.badge }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold", children: p.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: p.role })
              ] }),
              selectedProvider === p.id && /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-5 w-5 text-primary" })
            ] }, p.id))
          ] }),
          step === 1 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar$1, { mode: "single", selected: date, onSelect: setDate, disabled: (d) => d < new Date((/* @__PURE__ */ new Date()).setHours(0, 0, 0, 0)) || d.getDay() === 0 || d.getDay() === 6, className: "rounded-md border shadow-sm" }) }),
          step === 2 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-3 sm:grid-cols-3", children: slots.map((slot) => /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: selectedSlot === slot ? "default" : "outline", className: "h-12 font-medium", onClick: () => setSelectedSlot(slot), children: slot }, slot)) }),
            service.max_bookings && service.max_bookings > 1 && selectedSlot && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-6 border-t animate-in fade-in slide-in-from-top-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-base font-bold mb-3 block", children: "Number of Guests / Capacity" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", size: "icon", onClick: () => setCapacity(Math.max(1, capacity - 1)), disabled: capacity <= 1, children: "-" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xl font-bold w-8 text-center", children: capacity }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", size: "icon", onClick: () => setCapacity(Math.min(service.max_bookings || 1, capacity + 1)), disabled: capacity >= (service.max_bookings || 1), children: "+" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm text-muted-foreground ml-2", children: [
                  "Max ",
                  service.max_bookings,
                  " people"
                ] })
              ] })
            ] })
          ] }),
          step === 3 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Full Name" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { defaultValue: profile?.full_name || "" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Email Address" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { defaultValue: profile?.email || "", disabled: true })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Phone Number" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { placeholder: "+91 98765 43210" })
            ] }),
            service.questions?.map((q, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 pt-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { children: [
                q.label,
                " ",
                q.required && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-destructive", children: "*" })
              ] }),
              q.type === "text" && /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { placeholder: q.placeholder, required: q.required, value: answers[q.id] || "", onChange: (e) => setAnswers({
                ...answers,
                [q.id]: e.target.value
              }) }),
              q.type === "multiline" && /* @__PURE__ */ jsxRuntimeExports.jsx(Textarea, { placeholder: q.placeholder, required: q.required, value: answers[q.id] || "", onChange: (e) => setAnswers({
                ...answers,
                [q.id]: e.target.value
              }) })
            ] }, i)),
            !service.questions?.length && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 pt-4 border-t", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Anything we should know?" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Textarea, { placeholder: "Optional notes for the provider", value: answers["notes"] || "", onChange: (e) => setAnswers({
                ...answers,
                ["notes"]: e.target.value
              }) })
            ] })
          ] }),
          step === 4 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-muted/50 p-4 rounded-xl space-y-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-sm", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Service" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold", children: service.name })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-sm", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Provider" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold", children: providers.find((p) => p.id === selectedProvider)?.name || "Auto-assigned" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-sm", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Date & Time" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-bold", children: [
                  date?.toLocaleDateString(),
                  " at ",
                  selectedSlot
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-sm", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Location / Venue" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold", children: service.location || "Online Appointment" })
              ] }),
              capacity > 1 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-sm", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Guests" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-bold", children: [
                  capacity,
                  " People"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t pt-2 flex justify-between font-bold text-lg", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Total" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: fmtMoney(service.price_cents) })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Payment Method" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(RadioGroup, { value: paymentMethod, onValueChange: setPaymentMethod, className: "grid grid-cols-2 gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center space-x-2 border p-3 rounded-lg cursor-pointer", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(RadioGroupItem, { value: "card", id: "card" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "card", className: "cursor-pointer", children: "Credit/Debit" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center space-x-2 border p-3 rounded-lg cursor-pointer", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(RadioGroupItem, { value: "upi", id: "upi" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "upi", className: "cursor-pointer", children: "UPI" })
                ] })
              ] }),
              paymentMethod === "card" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 p-4 border rounded-xl bg-muted/20", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-[10px] uppercase font-bold text-muted-foreground", children: "Card Number" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { placeholder: "#### #### #### ####" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-[10px] uppercase font-bold text-muted-foreground", children: "Expiry" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { placeholder: "MM/YY" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-[10px] uppercase font-bold text-muted-foreground", children: "CVV" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "password", placeholder: "***" })
                  ] })
                ] })
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardFooter, { className: "flex justify-between border-t p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", disabled: step === 0, onClick: prevStep, children: "Back" }),
          step < steps.length - 1 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: nextStep, disabled: step === 0 && !selectedProvider && assignmentMode === "byVisitor" || step === 1 && !date || step === 2 && !selectedSlot, children: [
            "Continue ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "h-4 w-4 ml-2" })
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { className: "bg-primary hover:bg-primary/90", onClick: () => createBooking.mutate(), disabled: createBooking.isPending, children: createBooking.isPending ? "Processing..." : `Pay & Confirm ${fmtMoney(service.price_cents)}` })
        ] })
      ] })
    ] })
  ] });
}
export {
  BookingWizard as component
};
