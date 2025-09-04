import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./Feature/Slice/AuthSlice";
import favouriteReducer from "./Feature/Slice/FavouriteSlice";
const store = configureStore({
  reducer: {
    auth: authReducer,
    favourites: favouriteReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
