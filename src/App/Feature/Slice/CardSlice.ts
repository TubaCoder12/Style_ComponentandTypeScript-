import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartState, Product } from "../../../Interface/Interface"; // ✅ jahan aapne Product banaya hai, us file ka sahi path do

const initialState: CartState = {
  items: [],
  shippingCharges: 250,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    
    addToCart: (state, action: PayloadAction<Product>) => {
      const product = action.payload;
      const existing = state.items.find((item) => item.id === product.id);

      if (existing) {
        existing.quantity += 1;
      } else {
        state.items.push({ ...product, quantity: 1 });
      }
    },

  
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },

    
    clearCart: (state) => {
      state.items = [];
    },

   
    decreaseQuantity: (state, action: PayloadAction<number>) => {
      const product = state.items.find((item) => item.id === action.payload);
      if (product) {
        if (product.quantity > 1) {
          product.quantity -= 1;
        } else {
          state.items = state.items.filter(
            (item) => item.id !== action.payload
          );
        }
      }
    },

    
    increaseQuantity: (state, action: PayloadAction<number>) => {
      const product = state.items.find((item) => item.id === action.payload);
      if (product) {
        product.quantity += 1;
      }
    },
  },
});


export const {
  addToCart,
  removeFromCart,
  clearCart,
  decreaseQuantity,
  increaseQuantity,
} = cartSlice.actions;

// ✅ Export reducer
export default cartSlice.reducer;
