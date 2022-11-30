import { BsFillPinFill, BsGearFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import ThemeSwitch from "./ThemeSwitch";

export default function Header() {
  return (
    <header className="absolute w-full p-4 bg-gray-200 dark:bg-gray-900 flex justify-between items-center">
      <Link to="/">
        <BsFillPinFill className="h-6 w-6 text-gray-500 dark:text-gray-100" />
      </Link>
      <ThemeSwitch />
      <BsGearFill className="h-6 w-6 text-gray-500 dark:text-gray-100" />
    </header>
  );
}
