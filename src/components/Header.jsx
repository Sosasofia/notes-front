import { Link, useNavigate } from "react-router-dom";
import { ArrowRightOnRectangleIcon, PaperClipIcon } from "@heroicons/react/24/solid";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../features/user/authSlice";
import ThemeSwitch from "./ThemeSwitch";

export default function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoggedIn } = useSelector((state) => state.auth);

  const handleDelete = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <header className="absolute w-full p-4 bg-gray-200 dark:bg-gray-900 flex justify-between items-center">
      <Link to="/">
        <PaperClipIcon className="h-6 w-6 text-gray-500 dark:text-gray-100" />
      </Link>
      <ThemeSwitch />
      {isLoggedIn ? (
        <button onClick={handleDelete}>
          <ArrowRightOnRectangleIcon className="h-6 w-6 text-gray-500 dark:text-gray-100" />
        </button>
      ) : null}
    </header>
  );
}
