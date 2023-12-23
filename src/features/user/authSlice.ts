import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { setNotification } from "../notification/notificationSlice";
import userService from "@/services/user";
import loginService from "@/services/login";
import { User, Credentials, Auth } from "@/types";
import { AppDispatch } from "@/app/store";

const user: User = userService.getUser();

export const loginUser = createAsyncThunk(
  "auth/login",
  async (credentials: Credentials, { rejectWithValue, dispatch }) => {
    try {
      const res = await loginService.login(credentials);
      const data = res.data;
      userService.setUser(data);
      dispatch(setNotification("Login successful", true, "success", 4));
      return data;
    } catch (e: any) {
      dispatch(setNotification(`${e.response.data.error}`, true, "error"));
      return rejectWithValue(e.response.data);
    }
  }
);

const initialState: Auth = user
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
  extraReducers(builder) {
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.loading = false;
      state.isLoggedIn = true;
      state.user = action.payload;
    });
    builder.addCase(loginUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(loginUser.rejected, (state) => {
      state.loading = false;
      state.isLoggedIn = false;
    });
  }
});

export const logout = () => (dispatch: AppDispatch) => {
  userService.logout();
  dispatch(setNotification("Logout successful", true, "success"));
  dispatch(authSlice.actions.removeUser());
};

export default authSlice.reducer;
