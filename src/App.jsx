import { useSelector } from "react-redux";
import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";
import ProtectedRoutes from "./components/ProtectedRoutes";
import Notes from "./features/notes/Notes";
import LoginForm from "./features/user/LoginForm";
import Landing from "./pages/Landing";
import Home from "./pages/Home";

function App() {
  const theme = useSelector((state) => state.theme);
  const { currentUser } = useSelector((state) => state.login);

  return (
    <div className={`h-screen w-screen static ${theme.darkMode && "dark"}`}>
      <Header />

      <Routes>
        <Route element={currentUser ? <Navigate replace to="/home" /> : <Landing />} path="/" />
        <Route element={<LoginForm />} path="/login" />
        <Route element={<ProtectedRoutes user={currentUser} />}>
          <Route element={<Home />} path="/home" />
          <Route element={<Notes />} path="/notes" />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
