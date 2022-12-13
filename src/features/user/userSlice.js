import { createSlice } from "@reduxjs/toolkit";

const loggedUserInfo = localStorage.getItem("loggedUserInfo");
const initialState = JSON.parse(loggedUserInfo);

export const saveToLocalStorage = (state) => {
  localStorage.setItem("loggedUserInfo", JSON.stringify(state));
};

export const loadFromLocalStorage = () => {
  const loggedUserInfo = window.localStorage.getItem("loggedUserInfo");
  if (loggedUserInfo) {
    const user = JSON.parse(loggedUserInfo);
    return user;
  }
  return false;
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, { payload }) => {
      state.user = payload;
    }
  },
  extraReducers: {}
});

export default userSlice.reducer;
