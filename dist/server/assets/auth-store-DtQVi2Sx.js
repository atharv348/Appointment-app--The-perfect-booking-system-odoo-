import { s as supabase } from "./index-c7axHsGD.js";
import { T as React } from "./worker-entry-CW2L5Pfm.js";
const createStoreImpl = (createState) => {
  let state;
  const listeners = /* @__PURE__ */ new Set();
  const setState = (partial, replace) => {
    const nextState = typeof partial === "function" ? partial(state) : partial;
    if (!Object.is(nextState, state)) {
      const previousState = state;
      state = (replace != null ? replace : typeof nextState !== "object" || nextState === null) ? nextState : Object.assign({}, state, nextState);
      listeners.forEach((listener) => listener(state, previousState));
    }
  };
  const getState = () => state;
  const getInitialState = () => initialState;
  const subscribe = (listener) => {
    listeners.add(listener);
    return () => listeners.delete(listener);
  };
  const api = { setState, getState, getInitialState, subscribe };
  const initialState = state = createState(setState, getState, api);
  return api;
};
const createStore = ((createState) => createState ? createStoreImpl(createState) : createStoreImpl);
const identity = (arg) => arg;
function useStore(api, selector = identity) {
  const slice = React.useSyncExternalStore(
    api.subscribe,
    React.useCallback(() => selector(api.getState()), [api, selector]),
    React.useCallback(() => selector(api.getInitialState()), [api, selector])
  );
  React.useDebugValue(slice);
  return slice;
}
const createImpl = (createState) => {
  const api = createStore(createState);
  const useBoundStore = (selector) => useStore(api, selector);
  Object.assign(useBoundStore, api);
  return useBoundStore;
};
const create = ((createState) => createState ? createImpl(createState) : createImpl);
const useAuthStore = create((set, get) => ({
  user: null,
  profile: null,
  session: null,
  loading: false,
  initialized: false,
  setSession: async (session) => {
    console.log("Setting session manually:", session?.user?.email);
    const user = session?.user ?? null;
    let profile = null;
    if (user) {
      try {
        const { data, error } = await supabase.from("profiles").select("*").eq("id", user.id).maybeSingle();
        if (data) {
          profile = {
            ...data,
            role: data.role || "customer",
            status: data.status || "active"
          };
        } else {
          profile = {
            id: user.id,
            role: "customer",
            full_name: user.user_metadata?.full_name || null,
            email: user.email || null,
            status: "active"
          };
        }
      } catch (e) {
        console.error("setSession profile error:", e);
      }
    }
    set({ session, user, profile, initialized: true });
  },
  signOut: async () => {
    console.log("Forcing sign out and clearing storage...");
    await supabase.auth.signOut();
    if (typeof window !== "undefined") {
      localStorage.clear();
      sessionStorage.clear();
    }
    set({ session: null, user: null, profile: null, initialized: true });
  },
  init: () => {
    const { data: sub } = supabase.auth.onAuthStateChange(async (_e, session) => {
      console.log("Auth state change:", _e, session?.user?.email);
      const user = session?.user ?? null;
      let profile = null;
      if (user) {
        console.log("Fetching profile for:", user.id);
        const { data, error } = await supabase.from("profiles").select("*").eq("id", user.id).maybeSingle();
        if (error) {
          console.error("Error fetching profile:", error);
        }
        if (data) {
          console.log("Profile loaded:", data);
          profile = {
            ...data,
            role: data.role || "customer",
            status: data.status || "active"
          };
        } else {
          console.warn("No profile found for user, creating virtual profile");
          profile = {
            id: user.id,
            role: "customer",
            full_name: user.user_metadata?.full_name || null,
            email: user.email || null,
            status: "active"
          };
        }
      }
      set({ session, user, profile, initialized: true });
    });
    supabase.auth.getSession().then(async ({ data }) => {
      const session = data.session;
      const user = session?.user ?? null;
      let profile = null;
      if (user) {
        try {
          const { data: profileData } = await supabase.from("profiles").select("*").eq("id", user.id).maybeSingle();
          if (profileData) {
            profile = {
              ...profileData,
              role: profileData.role || "customer",
              status: profileData.status || "active"
            };
          } else {
            profile = {
              id: user.id,
              role: "customer",
              full_name: user.user_metadata?.full_name || null,
              email: user.email || null,
              status: "active"
            };
          }
        } catch (e) {
          console.error("Session profile fetch error:", e);
        }
      }
      set({ session, user, profile, initialized: true });
    }).catch((err) => {
      console.error("Get session error:", err);
      set({ initialized: true });
    });
    return () => sub.subscription.unsubscribe();
  }
}));
export {
  useAuthStore as u
};
