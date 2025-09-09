import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import {User}  from '../../../Interface/Interface'
import  {AuthState}  from '../../../Interface/Interface'


const savedUser = localStorage.getItem("userData")
  ? (JSON.parse(localStorage.getItem("userData")!) as User)
  : null;

const initialState: AuthState = {
  user: savedUser,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // Yes, it’s basically a type-check for the user object that comes with the action.
    Login: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
      localStorage.setItem("userData", JSON.stringify(action.payload));
    },
    Logout: (state) => {
      state.user = null;
      localStorage.removeItem("userData");
    },
  },
});


export const { Login, Logout } = authSlice.actions;


export default authSlice.reducer;
