import { Dispatch, createSlice } from "@reduxjs/toolkit";
import { Notification } from "@/types";

const initialState: Notification = { message: null, show: false, type: null };

const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    createNotification(state, action) {
      state.message = action.payload.message;
      state.show = true;
      state.type = action.payload.type;
    },
    clearNotification(state) {
      state.message = null;
      state.show = false;
      state.type = null;
    }
  }
});

export const { createNotification, clearNotification } = notificationSlice.actions;

export default notificationSlice.reducer;

export const setNotification = (message: string, show: boolean, type: string, timeout = 3) => {
  return async (dispatch: Dispatch) => {
    dispatch(
      createNotification({
        message,
        show,
        type
      })
    );
    setTimeout(() => {
      dispatch(clearNotification());
    }, timeout * 1000);
  };
};
