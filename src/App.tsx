import { useSelector } from "react-redux";
import { Routes, Route, Navigate } from "react-router-dom";
import { RootState } from "./app/store";
import Header from "./components/Header";
import ProtectedRoutes from "./components/ProtectedRoutes";
import Notes from "./features/notes/Notes";
import LoginForm from "./features/user/LoginForm";
import Landing from "./pages/Landing";
import Home from "./pages/Home";
import Notification from "./features/notification/Notification";

function App() {
  const theme = useSelector((state: RootState) => state.theme);
  const { isLoggedIn, user } = useSelector((state: RootState) => state.auth);

  return (
    <div className={`h-screen static ${theme.darkMode && "dark"} relative`}>
      <Header />
      <div className="pb-6 px-5 min-h-screen bg-gray-200 dark:bg-gray-900">
        <Notification />
        <Routes>
          <Route element={isLoggedIn ? <Navigate replace to="/home" /> : <Landing />} path="/" />
          <Route element={<LoginForm />} path="/login" />
          <Route element={<ProtectedRoutes user={user} />}>
            <Route element={<Home />} path="/home" />
            <Route element={<Notes />} path="/notes" />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
