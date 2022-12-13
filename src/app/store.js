import { configureStore } from "@reduxjs/toolkit";

import themeReducer from "./../features/themeSlice";
import userReducer from "./../features/user/userSlice";
import loginReducer from "./../features/user/loginSlice";
import noteReducer from "./../features/notes/notesSlice";

export default configureStore({
  reducer: {
    theme: themeReducer,
    login: loginReducer,
    user: userReducer,
    notes: noteReducer
  }
});
