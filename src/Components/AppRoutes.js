import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuthState } from "../Context";

const AppRoutes = ({ element: Element, isPrivate, ...rest }) => {
  const userDetails = useAuthState();
  return isPrivate && !Boolean(userDetails.token) ? (
    <Navigate to="/" />
  ) : (
    <Outlet/>
  );
};

export default AppRoutes;
