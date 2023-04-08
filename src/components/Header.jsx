import { Link } from "react-router-dom";
import { ArrowRightOnRectangleIcon, PaperClipIcon } from "@heroicons/react/24/solid";
import ThemeSwitch from "./ThemeSwitch";

export default function Header() {
  return (
    <header className="absolute w-full p-4 bg-gray-200 dark:bg-gray-900 flex justify-between items-center">
      <Link to="/">
        <PaperClipIcon className="h-6 w-6 text-gray-500 dark:text-gray-100" />
      </Link>
      <ThemeSwitch />
      <ArrowRightOnRectangleIcon className="h-8 w-8 text-gray-500 dark:text-gray-100" />
    </header>
  );
}
