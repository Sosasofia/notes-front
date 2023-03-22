import ReactDom from "react-dom";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { useSelector } from "react-redux";

export default function Modal({ show, handleClose, children }) {
  const theme = useSelector((state) => state.theme);

  if (!show) return null;

  return ReactDom.createPortal(
    <div className={`${theme.darkMode && "dark"}`}>
      <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
        <div className="relative w-96 p-5 shadow-lg rounded-md bg-white dark:bg-gray-700">
          <button
            className="absolute rounded-lg right-0 top-0 m-3 hover:bg-gray-200 dark:hover:bg-gray-800 dark:hover:text-white"
            type="button"
            onClick={handleClose}>
            <XMarkIcon className="h-8 w-8 text-gray-500 dark:text-gray-100" />
          </button>
          {children}
        </div>
      </div>
    </div>,
    document.getElementById("modal")
  );
}
