import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { ProductType } from "../../Components/ProductList";

type CartStep = "cart" | "delivery" | "payment" | "success";

type CartState = {
  items: ProductType[];
  isOpen: boolean;
  step: CartStep;
};

const initialState: CartState = {
  items: [],
  isOpen: false,
  step: "cart",
};

const setStep = (state: CartState, step: CartStep) => {
  if (state.items.length === 0 && step !== "cart") {
    state.step = "cart";
    return;
  }

  state.step = step;
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<ProductType>) => {
      const exists = state.items.some((item) => item.id === action.payload.id);

      if (!exists) {
        state.items.push(action.payload);
      }
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);

      if (state.items.length === 0) {
        state.step = "cart";
      }
    },
    clear: (state) => {
      state.items = [];
      state.step = "cart";
    },
    open: (state) => {
      state.isOpen = true;
      state.step = "cart";
    },
    close: (state) => {
      state.isOpen = false;
      state.step = "cart";
    },
    goToDelivery: (state) => {
      setStep(state, "delivery");
    },
    goToPayment: (state) => {
      setStep(state, "payment");
    },
    goToCart: (state) => {
      setStep(state, "cart");
    },
    goToSuccess: (state) => {
      setStep(state, "success");
    },
  },
});

export const { add, remove, clear, open, close, goToDelivery, goToPayment, goToCart, goToSuccess } =
  cartSlice.actions;
export default cartSlice.reducer;