import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./Feature/Slice/AuthSlice";
import favouriteReducer from "./Feature/Slice/FavouriteSlice";
import cardReducer from "./Feature/Slice/CardSlice";
const store = configureStore({
  reducer: {
    auth: authReducer,
    favourites: favouriteReducer,
    cart: cardReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
