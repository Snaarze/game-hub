import React from "react";
import Navbar from "./Dashboard/Navbar";
import { Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <div
      className="min-h-screen flex flex-col
    "
    >
      <div className="">
        <Navbar />
      </div>
      <div className="flex-1 bg-slate-900">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
