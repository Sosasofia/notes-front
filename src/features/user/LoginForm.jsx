import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "./loginSlice";

export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { success } = useSelector((state) => state.login);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const credentials = {
      username,
      password
    };
    dispatch(loginUser(credentials));
    setPassword("");
    setUsername("");
  };

  useEffect(() => {
    if (success) {
      console.log("Suceso");
      navigate("/home");
    }
  }, [success, navigate]);

  return (
    <section className="w-full grid place-items-center  h-full bg-gray-200 dark:bg-gray-900">
      <div className="bg-white space-y-4 px-8 pt-6 pb-8 mb-4 rounded-lg shadow dark:border dark:bg-gray-800 dark:border-gray-700">
        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
          Sign in to your account
        </h1>
        <form className="" onSubmit={handleLogin}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2  dark:text-white"
              htmlFor="username">
              Username
            </label>
            <input
              required
              className="shadow border rounded block w-full py-2 px-3 border-gray-300 focus:outline-none text-gray-900  focus:ring-blue-600 focus:border-blue-600 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              id="username"
              placeholder="Username"
              type="text"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-sm font-bold mb-2 text-gray-900 dark:text-white"
              htmlFor="username">
              Password
            </label>
            <input
              required
              className="shadow border rounded block w-full py-2 px-3 border-gray-300 focus:outline-none text-gray-900  focus:ring-blue-600 focus:border-blue-600 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              id="password"
              placeholder="*********"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit">
              Sign In
            </button>
            <a
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              href="#">
              Forgot Password?
            </a>
          </div>
        </form>
      </div>
    </section>
  );
}
