import { Link, useNavigate } from "react-router-dom";
import { ArrowRightOnRectangleIcon, PaperClipIcon } from "@heroicons/react/24/solid";
import ThemeSwitch from "./ThemeSwitch";
import { useAppSelector, useAppDispatch } from "@/app/hooks";
import { logout } from "@/features/user/authSlice";

export default function Header() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { isLoggedIn } = useAppSelector((state) => state.auth);

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
