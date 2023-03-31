import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  darkMode: !!JSON.parse(localStorage.getItem("darkMode"))
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.darkMode = !state.darkMode;
    }
  }
});

export const asyncToggleTheme = () => {
  return async (dispatch) => {
    try {
      const isDarkMode = !!JSON.parse(localStorage.getItem("darkMode"));
      localStorage.setItem("darkMode", !isDarkMode);
      dispatch(toggleTheme());
    } catch (error) {
      console.log("Error", error);
    }
  };
};

export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;
