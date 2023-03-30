import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import loginService from "../../services/login";
import userService from "../../services/user";

const user = userService.getUser();

export const loginUser = createAsyncThunk(
  "auth/login",
  async (credentials, { rejectWithValue }) => {
    try {
      const res = await loginService.login(credentials);
      const data = res.data;
      userService.setUser(data);
      return data;
    } catch (e) {
      return rejectWithValue(e.response.data);
    }
  }
);

const initialState = user
  ? { isLoggedIn: true, user, loading: false }
  : { isLoggedIn: false, user: null, loading: false };

const authSlice = createSlice({
  name: "login",
  initialState,
  reducers: {},
  extraReducers: {
    [loginUser.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.isLoggedIn = true;
      state.currentUser = payload;
    },
    [loginUser.pending]: (state) => {
      state.loading = true;
    },
    [loginUser.rejected]: (state, { payload }) => {
      state.loading = false;
      state.isLoggedIn = false;
      state.error = payload.error;
    }
  }
});

export default authSlice.reducer;
