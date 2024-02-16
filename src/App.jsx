import { useState } from "react";
import "./App.css";
import {
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import PublicRoute from "./routes/PublicRoute";
import EmployeeDirectory from "./pages/EmployeeDirectory";
import EmployeeCreate from "./components/EmployeeCreate";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<PublicRoute />}>
          <Route path="" element={<EmployeeDirectory />} />
          <Route path="create-employee" element={<EmployeeCreate />} />
        </Route>
      </>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
