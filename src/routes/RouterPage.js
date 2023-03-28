import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DefaultGuard from "../guards/DefaultGuard";
import { routes } from "./routes";
const RouterPage = () => {
  return (
    <Router>
      <Routes>
        {routes.map((item, i) => {
          return (
            <Route
              key={i}
              path={item.path}
              element={
                <DefaultGuard errorTxt={item.errorTxt} permissions={item.permissions} url key={i}>
                  <item.component />
                </DefaultGuard>
              }
            />
          );
        })}
      </Routes>
    </Router>
  );
};

export default RouterPage;
