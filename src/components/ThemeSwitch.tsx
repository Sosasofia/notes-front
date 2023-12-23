import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";
import { asyncToggleTheme } from "@/features/themeSlice";
import { useAppSelector, useAppDispatch } from "@/app/hooks";

export default function ThemeSwitch() {
  const theme = useAppSelector((state) => state.theme);
  const dispatch = useAppDispatch();

  return (
    <div>
      <button onClick={() => dispatch(asyncToggleTheme())}>
        {theme.darkMode ? (
          <MoonIcon className="h-8 w-8 text-gray-100" />
        ) : (
          <SunIcon className="h-8 w-8 text-gray-500" />
        )}
      </button>
    </div>
  );
}
