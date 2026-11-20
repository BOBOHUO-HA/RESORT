const KEY = 'pousadaPrototypeStateV1';
const defaults = { cart: [], booking: { step: 0, experiences: [] }, scentResult: null, selectedJourney: null, selectedWorkshop: null, reservation: null, shopOrder: null };

export function loadState() {
  try { return { ...structuredClone(defaults), ...JSON.parse(localStorage.getItem(KEY) || '{}') }; }
  catch { return structuredClone(defaults); }
}

export function saveState(state) {
  localStorage.setItem(KEY, JSON.stringify(state));
  window.dispatchEvent(new CustomEvent('pousada:state', { detail: state }));
  return state;
}

export function patchState(patch) { return saveState({ ...loadState(), ...patch }); }
export function patchBooking(patch) { const state = loadState(); state.booking = { ...state.booking, ...patch }; return saveState(state); }

export function addToCart(slug, quantity = 1) {
  const state = loadState();
  const item = state.cart.find(entry => entry.slug === slug);
  if (item) item.quantity += quantity; else state.cart.push({ slug, quantity });
  return saveState(state);
}

export function updateCart(slug, quantity) {
  const state = loadState();
  state.cart = quantity > 0 ? state.cart.map(item => item.slug === slug ? { ...item, quantity } : item) : state.cart.filter(item => item.slug !== slug);
  return saveState(state);
}

export function cartCount() { return loadState().cart.reduce((sum, item) => sum + item.quantity, 0); }
