import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import loginService from "../../services/login";
import { saveToLocalStorage } from "./userSlice";

export const loginUser = createAsyncThunk(
  "login/user",
  async (credentials, { rejectWithValue, fulfillWithValue }) => {
    try {
      const res = await loginService.login(credentials);
      const data = res.data;

      if (res.status === 200) {
        saveToLocalStorage(data);
        return fulfillWithValue(data);
      } else {
        return rejectWithValue(res.status);
      }
    } catch (e) {
      return rejectWithValue(e.response.data);
    }
  }
);

const loginSlice = createSlice({
  name: "login",
  initialState: {
    user: null,
    loading: false,
    success: false,
    error: null
  },
  reducers: {},
  extraReducers: {
    [loginUser.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.success = true;
      state.user = payload;
    },
    [loginUser.pending]: (state) => {
      state.loading = true;
    },
    [loginUser.rejected]: (state, { payload }) => {
      state.loading = false;
      state.success = false;
      state.error = payload.error;
    }
  }
});

export default loginSlice.reducer;
