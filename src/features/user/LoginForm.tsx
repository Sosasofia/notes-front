import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "./authSlice";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import Modal from "@/components/Modal";

export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { loading, isLoggedIn } = useAppSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [show, setShow] = useState(true);
  const toggleShow = () => setShow(!show);

  const handleLogin = (e: any) => {
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
    if (isLoggedIn) {
      navigate("/home");
      window.location.reload();
    }
  });

  return (
    <>
      <section className="w-full min-h-screen grid place-items-center  h-full bg-gray-200 dark:bg-gray-900">
        <form
          className="bg-white space-y-4 px-8 pt-6 pb-8 mb-4 rounded-lg shadow dark:border dark:bg-gray-800 dark:border-gray-700"
          onSubmit={handleLogin}>
          <h2 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Sign in to your account
          </h2>
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
            {loading ? (
              <div>
                <button
                  disabled
                  className="py-2.5 px-5 mr-2 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 inline-flex items-center"
                  type="button">
                  <svg
                    aria-hidden="true"
                    className="inline w-4 h-4 mr-2 text-gray-200 animate-spin dark:text-gray-600"
                    fill="none"
                    role="status"
                    viewBox="0 0 100 101"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="#1C64F2"
                    />
                  </svg>
                  Loading...
                </button>
              </div>
            ) : (
              <div>
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit">
                  Sign In
                </button>
              </div>
            )}
          </div>
        </form>
      </section>
      <Modal handleClose={toggleShow} show={show}>
        <a
          className="block max-w-sm p-6 bg-white rounded-lg dark:bg-gray-700 dark:border-gray-700"
          href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Enter to the test the app!
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">Username: test</p>
          <p className="font-normal text-gray-700 dark:text-gray-400">Password: 1234</p>
        </a>
      </Modal>
    </>
  );
}
