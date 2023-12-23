import { configureStore } from "@reduxjs/toolkit";

import notificationReducer from "../features/notification/notificationSlice";
import themeReducer from "../features/themeSlice";
import authReducer from "../features/user/authSlice";
import noteReducer from "../features/notes/notesSlice";

const store = configureStore({
  reducer: {
    theme: themeReducer,
    auth: authReducer,
    notes: noteReducer,
    notification: notificationReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
