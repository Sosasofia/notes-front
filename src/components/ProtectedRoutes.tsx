import React from "react";
import { Navigate, Outlet } from "react-router-dom";

type Props = {
  user: any;
  children?: React.ReactNode;
};

export default function ProtectedRoutes({ user, children }: Props) {
  if (!user) {
    return <Navigate replace to="/" />;
  }

  return children ? children : <Outlet />;
}
