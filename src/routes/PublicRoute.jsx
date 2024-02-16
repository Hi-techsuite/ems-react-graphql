import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/header";

const PublicRoute = () => {
  return (
    <div className=" ">
      <Header />
      <Outlet />
    </div>
  );
};

export default PublicRoute;
