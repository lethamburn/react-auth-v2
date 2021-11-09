import React from "react";
import Login from "../Pages/Login/";
import Dashboard from "../Pages/Dashboard";
import PageNotFound from "../Pages/NotFound";

const routes = [
  {
    path: "/",
    element: <Login />,
    isPrivate: false
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    isPrivate: true
  },
  {
    path: "/*",
    element: <PageNotFound />,
    isPrivate: true
  },
];

export default routes;
