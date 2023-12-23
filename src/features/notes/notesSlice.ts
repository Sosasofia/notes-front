import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import noteService from "../../services/notes";
import userService from "../../services/user";
import { setNotification } from "../notification/notificationSlice";
import { Note } from "@/types";
import { AppDispatch } from "@/app/store";

const user = userService.getUser();

export const fetchNotes = createAsyncThunk("notes/fetchNotes", async (arg, { dispatch }) => {
  try {
    noteService.setToken(user.token);
    const res = await noteService.getAll();

    return res.data;
  } catch (e: any) {
    dispatch(setNotification(`${e.response.data.error}`, true, "error"));
  }
});

export const createNote = (noteObject: Note) => {
  return async (dispatch: AppDispatch) => {
    try {
      if (user.username === "test") {
        const { title, content } = noteObject;
        dispatch(
          appendNote({
            title,
            content,
            id: Math.floor(Math.random() * 1000),
            createdAt: Date.now()
          })
        );
        dispatch(setNotification("Note created", true, "success"));
        return;
      } else {
        noteService.setToken(user.token);
        const returnedNote = await noteService.create(noteObject);
        dispatch(appendNote(returnedNote));
      }
    } catch (e: any) {
      dispatch(setNotification(`${e.response.data.error}`, true, "error"));
    }
  };
};

export const deleteNote = (noteObject: Note) => {
  return async (dispatch: AppDispatch) => {
    try {
      if (user.username === "test") {
        dispatch(removeNote(noteObject.id));
        dispatch(setNotification("Note deleted", true, "success"));
        return;
      } else {
        noteService.setToken(user.token);
        await noteService.remove(noteObject.id!);
        dispatch(removeNote(noteObject));
        dispatch(setNotification("Note deleted", true, "success"));
      }
    } catch (e: any) {
      dispatch(setNotification(`${e.response.data.error}`, true, "error"));
    }
  };
};

export const updateNote = (note: Note, id: string) => {
  return async (dispatch: AppDispatch) => {
    try {
      if (user.username === "test") {
        dispatch(update({ ...note, id }));
        dispatch(setNotification("Note updated", true, "success"));
        return;
      } else {
        noteService.setToken(user.token);
        const noteToUpdate = {
          ...note
        };
        const updatedNote = await noteService.update(id, noteToUpdate);
        dispatch(update(updatedNote));
        dispatch(setNotification("Note updated", true, "success"));
      }
    } catch (e: any) {
      dispatch(setNotification(`${e.response.data.error}`, true, "error"));
    }
  };
};

const initialState: {
  notes: Note[];
  loading: boolean;
  error: string | null | undefined;
} = {
  notes: [],
  loading: false,
  error: null
};

export const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    setNotes(state, action) {
      state.notes = action.payload;
    },
    appendNote(state, action) {
      state.notes.push(action.payload);
    },
    update(state, action) {
      state.notes = state.notes.map((note) =>
        note.id === action.payload.id ? action.payload : note
      );
    },
    removeNote(state, action) {
      console.log(action.payload);
      state.notes = state.notes.filter((note) => note.id !== action.payload);
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchNotes.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchNotes.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.notes = payload;
    });
    builder.addCase(fetchNotes.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  }
});

export const { appendNote, removeNote, setNotes, update } = notesSlice.actions;

export default notesSlice.reducer;
