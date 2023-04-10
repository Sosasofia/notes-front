import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import loginService from "../../services/login";
import userService from "../../services/user";
import { setNotification } from "../notification/notificationSlice";

const user = userService.getUser();

export const loginUser = createAsyncThunk(
  "auth/login",
  async (credentials, { rejectWithValue, dispatch }) => {
    try {
      const res = await loginService.login(credentials);
      const data = res.data;
      userService.setUser(data);
      dispatch(setNotification("Login successful", true, "success", 4));
      return data;
    } catch (e) {
      dispatch(setNotification(`${e.response.data.error}`, true, "error"));
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
  reducers: {
    removeUser: (state) => {
      state.isLoggedIn = false;
      state.user = null;
    }
  },
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

export const logout = () => (dispatch) => {
  userService.logout();
  dispatch(setNotification("Logout successful", true, "success"));
  dispatch(authSlice.actions.removeUser());
};

export default authSlice.reducer;
