import { configureStore } from "@reduxjs/toolkit";

import themeReducer from "./../features/themeSlice";
import authReducer from "./../features/user/authSlice";
import noteReducer from "./../features/notes/notesSlice";

export default configureStore({
  reducer: {
    theme: themeReducer,
    auth: authReducer,
    notes: noteReducer
  }
});
