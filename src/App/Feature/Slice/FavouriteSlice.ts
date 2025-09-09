import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from '../../../Interface/Interface'
import { FavouriteState } from '../../../Interface/Interface'
const initialState: FavouriteState = {
  items: [],
};

const favouriteSlice = createSlice({
  name: "favourites",
  initialState,
  reducers: {
    addToFavourite: (state, action: PayloadAction<Product>) => {
      const exists = state.items.find((item) => item.id === action.payload.id);
      if (!exists) {
        state.items.push(action.payload);
      }
    },
    removeFromFavourite: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    clearFavourites: (state) => {
      state.items = [];
    },
  },
});

export const { addToFavourite, removeFromFavourite, clearFavourites } =
  favouriteSlice.actions;
export default favouriteSlice.reducer;
