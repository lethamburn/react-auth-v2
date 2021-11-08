import React from "react";
import Login from "../Pages/Login/";
import Dashboard from "../Pages/Dashboard";
import PageNotFound from "../Pages/NotFound";

const routes = [
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/*",
    element: <PageNotFound />,
  },
];

export default routes;
