import { useState } from "react";
import { useDispatch } from "react-redux";
import { createNote } from "./notesSlice";

export default function NewNoteForm({ toggleShow }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const dispatch = useDispatch();

  const addNewNote = (e) => {
    e.preventDefault();

    const noteObject = {
      title,
      content
    };
    dispatch(createNote(noteObject));
    setTitle("");
    setContent("");
    toggleShow();
  };

  return (
    <form className="p-6 rounded-lg" onSubmit={addNewNote}>
      <h2 className="mb-6 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
        Create a new note
      </h2>
      <div className="mb-4">
        <label
          className="block text-sm font-medium mb-2 text-gray-900 dark:text-white"
          htmlFor="title">
          Title
        </label>
        <input
          required
          className="block w-full p-2.5 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-blue-600 focus:border-blue-600  dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          id="title"
          placeholder="Title"
          type="text"
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="mb-6">
        <label
          className="block text-sm font-medium mb-2 text-gray-900 dark:text-white"
          htmlFor="content">
          Content
        </label>
        <textarea
          required
          className="block w-full p-2.5 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-blue-600 focus:border-blue-600  dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          id="content"
          placeholder="Content"
          type="text"
          onChange={(e) => setContent(e.target.value)}
        />
      </div>
      <div className="flex justify-center">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit">
          Save
        </button>
      </div>
    </form>
  );
}
