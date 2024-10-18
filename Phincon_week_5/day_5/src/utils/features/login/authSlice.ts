import { createSlice } from "@reduxjs/toolkit";

export const cookieSlice = createSlice({
  name: "cookie",
  initialState: {
    cookie: null,
    loading: false,
    error: null,
  },
  reducers: {
    fetchCookieRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchCookieSuccess: (state, action) => {
      state.loading = false;
      state.cookie = action.payload;
    },
    fetchCookieFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchCookieRequest, fetchCookieSuccess, fetchCookieFailure } =
  cookieSlice.actions;
export default cookieSlice.reducer;
