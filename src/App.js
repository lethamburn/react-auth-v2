import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppRoutes from "./Components/AppRoutes";
import routes from "./Config/routes.js";
import { AuthProvider } from "./Context";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {routes.map((route) => (
            <Route key={route.path} path={route.path} element={<AppRoutes />} />
          ))}
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
