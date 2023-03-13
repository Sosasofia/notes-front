import { FaPlus } from "react-icons/fa";
import Notes from "../features/notes/Notes";

export default function Home() {
  return (
    <div className="h-full w-full flex flex-col items-center bg-gray-200 dark:bg-gray-900 pt-20">
      <div className="inline-flex justify-between w-full max-w-3xl mb-5">
        <h2 className="text-4xl font-bold dark:text-white">Notes</h2>
        <button className="flex-initial bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-center inline-flex items-center">
          <FaPlus className="mr-2 " />
          New
        </button>
      </div>
      <Notes />
    </div>
  );
}
