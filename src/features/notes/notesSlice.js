import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import noteService from "../../services/notes";
import userService from "../../services/user";

const user = userService.getUser();

export const fetchNotes = createAsyncThunk("notes/fetchNotes", async (arg, { rejectWithValue }) => {
  try {
    noteService.setToken(user.token);
    const res = await noteService.getAll();

    return res.data;
  } catch (e) {
    return rejectWithValue(e);
  }
});

export const createNote = (noteObject) => {
  return async (dispatch) => {
    try {
      noteService.setToken(user.token);
      const returnedNote = await noteService.create(noteObject);
      dispatch(appendNote(returnedNote));
    } catch (error) {
      console.log("Error", error);
    }
  };
};

export const deleteNote = (noteObject) => {
  return async (dispatch) => {
    try {
      noteService.setToken(user.token);
      await noteService.remove(noteObject.id);
      dispatch(removeNote(noteObject));
    } catch (error) {
      console.log("Error", error);
    }
  };
};

export const updateNote = (note, id) => {
  return async (dispatch) => {
    try {
      noteService.setToken(user.token);

      const noteToUpdate = {
        ...note
      };
      const updatedNote = await noteService.update(id, noteToUpdate);
      dispatch(update(updatedNote));
    } catch (error) {
      console.log("Error", error);
    }
  };
};

export const notesSlice = createSlice({
  name: "notes",
  initialState: {
    notes: [],
    loading: false,
    error: null
  },
  reducers: {
    appendNote(state, action) {
      state.notes.push(action.payload);
    },
    update(state, action) {
      state.notes = state.notes.map((note) =>
        note.id === action.payload.id ? action.payload : note
      );
    },
    removeNote(state, action) {
      state.notes = state.notes.filter((note) => note.id !== action.payload.id);
    }
  },
  extraReducers: {
    [fetchNotes.pending]: (state) => {
      state.loading = true;
    },
    [fetchNotes.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.notes = payload;
    },
    [fetchNotes.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload.message;
    }
  }
});

export const { appendNote, removeNote, setNotes, update } = notesSlice.actions;

export default notesSlice.reducer;
