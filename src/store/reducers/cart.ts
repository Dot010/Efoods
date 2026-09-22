import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type {  ProductType } from "../../Components/ProductList";

type CartState = {
    items: ProductType[];
isOpen: boolean
};

const initialState: CartState = {
    items: [],
    isOpen: false,
};
const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        add: (state, action: PayloadAction<ProductType>) => {
            const product = state.items.find((item) => item.id === action.payload.id);
            if (!product) {
                state.items.push(action.payload);
            } else {
                alert("Este item já está no carrinho!");
            } 
         
        },
        remove: (state, action: PayloadAction<number>) => {
            state.items = state.items.filter((item) => item.id !== (action.payload));
        },
        open: (state) => {
            state.isOpen = true;
        },
        close: (state) => {
            state.isOpen = false;
        }
        
    },
})

export const { add, remove, open, close } = cartSlice.actions;
export default cartSlice.reducer;