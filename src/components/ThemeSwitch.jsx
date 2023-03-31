import { useDispatch, useSelector } from "react-redux";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";
import { asyncToggleTheme } from "../features/themeSlice";

export default function ThemeSwitch() {
  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  return (
    <div>
      <button type="text" onClick={() => dispatch(asyncToggleTheme())}>
        {theme.darkMode ? (
          <MoonIcon className="h-8 w-8 text-gray-100" />
        ) : (
          <SunIcon className="h-8 w-8 text-gray-500" />
        )}
      </button>
    </div>
  );
}
