import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import Modal from "../components/Modal";
import NewNoteForm from "../features/notes/NewNoteForm";
import Notes from "../features/notes/Notes";

export default function Home() {
  const [show, setShow] = useState(false);
  const toggleShow = () => setShow(!show);

  return (
    <>
      <div className="flex flex-col items-center min-h-screen bg-gray-200 dark:bg-gray-900 pt-20">
        <div className="inline-flex justify-between w-full max-w-3xl mb-5">
          <h2 className="text-4xl font-bold dark:text-white">Notes</h2>
          <button
            className="flex-initial bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-center inline-flex items-center"
            onClick={toggleShow}>
            <FaPlus className="mr-2" />
            New
          </button>
        </div>
        <Notes />
      </div>
      <Modal handleClose={toggleShow} show={show}>
        <NewNoteForm />
      </Modal>
    </>
  );
}
