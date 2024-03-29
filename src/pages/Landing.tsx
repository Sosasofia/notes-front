import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useAppSelector } from "@/app/hooks";

export default function Landing() {
  const navigate = useNavigate();
  const user = useAppSelector((state) => state.auth);

  const navigateToLogin = () => {
    navigate("/login");
  };

  useEffect(() => {
    if (user) {
      <Navigate replace={true} to="/home" />;
    }
  });

  return (
    <div className="min-h-screen max-w-2xl space-y-2.5 grid place-content-center h-full mx-auto">
      <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
        Notes App
      </h1>
      <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
        Free and easy to use. Keep your notes organized. Its built with React.js & TailwindCSS.
        Consumes data from a{" "}
        <a
          className="font-medium text-blue-600 dark:text-blue-400 hover:underline"
          href="https://github.com/Sosasofia/notes-api"
          rel="noreferrer"
          target="_blank">
          REST API
        </a>{" "}
        previously developed.
      </p>
      <div className="space-x-6">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
          onClick={navigateToLogin}>
          Sign In
        </button>
        <button
          disabled
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline disabled:opacity-25"
          type="submit">
          Sign Up
        </button>
      </div>
    </div>
  );
}
