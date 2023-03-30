import { useState } from "react";
import { useDispatch } from "react-redux";
import { TrashIcon, PencilSquareIcon } from "@heroicons/react/24/solid";
import Modal from "../../components/Modal";
import { deleteNote } from "./notesSlice";
import EditNoteForm from "./EditNoteForm";

export default function Note({ note }) {
  const { title, content, createdAt } = note;
  const date = new Date(createdAt).toLocaleDateString("en-us", {
    day: "numeric",
    year: "numeric",
    month: "short"
  });

  const [show, setShow] = useState(false);
  const toggleShow = () => setShow(!show);
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteNote(note));
  };

  return (
    <>
      <div className="block p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h2>
        <p className="font-normal text-gray-700 dark:text-gray-400">{content}</p>
        <div className="flex justify-between mt-5">
          <small className="mt-2 text-gray-700 dark:text-gray-400">Created on: {date}</small>
          <div className="inline-flex">
            <button
              className="inline-flex items-center justify-center h-6 w-6 text-gray-700 hover:text-yellow-500 mr-2 transition-colors duration-150 dark:text-gray-400 dark:hover:text-yellow-400"
              title="Edit"
              onClick={toggleShow}>
              <PencilSquareIcon />
            </button>
            <button
              className="inline-flex items-center justify-center h-6 w-6 text-gray-700 hover:text-red-500 mr-2 transition-colors duration-150 dark:text-gray-400 dark:hover:text-red-400"
              title="Delete"
              onClick={handleDelete}>
              <TrashIcon />
            </button>
          </div>
        </div>
      </div>
      <Modal handleClose={toggleShow} show={show}>
        <EditNoteForm note={note} />
      </Modal>
    </>
  );
}
