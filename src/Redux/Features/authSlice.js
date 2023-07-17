import { createSlice } from "@reduxjs/toolkit";

const oldToken = localStorage.getItem("token");

const initialState = {
  user: {},
  token: oldToken ?? null,
  isAuth: oldToken ? true : false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    userLogin: (state) => {
      state.isAuth = true;
    },
    userLogout: (state) => {
      state.isAuth = false;
      state.token = null;
    },

    setUserDetails: (state, action) => {
      state.user = { ...action.payload };
    },

    removeUserDetails: (state) => {
      state.user = {};
    },
  },
});

export const { userLogin, userLogout, setUserDetails } = authSlice.actions;

export default authSlice.reducer;
