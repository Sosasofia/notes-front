import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoutes({ user, children }) {
  if (!user) {
    return <Navigate replace to="/" />;
  }

  return children ? children : <Outlet />;
}
