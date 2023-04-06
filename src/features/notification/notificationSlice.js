import { createSlice } from "@reduxjs/toolkit";

const initialState = { message: null, status: false, type: null };

const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    createNotification(state, action) {
      state.message = action.payload.message;
      state.status = true;
      state.type = action.payload.type;
    },
    clearNotification(state) {
      state.message = null;
      state.status = false;
      state.type = null;
    }
  }
});

export const { createNotification, clearNotification } = notificationSlice.actions;

export default notificationSlice.reducer;

export const setNotification = (message, status, type, timeout = 3) => {
  return async (dispatch) => {
    dispatch(
      createNotification({
        message,
        status,
        type
      })
    );
    setTimeout(() => {
      dispatch(clearNotification());
    }, timeout * 1000);
  };
};
