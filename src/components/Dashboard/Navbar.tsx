import React from "react";
import logo from "../../assets/img/Logo/logo.webp";
import Search from "./Search";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex  gap-10 items-center bg-slate-900 p-4">
      <Link to={"/"}>
        <img src={logo} alt="" className="w-14" />
      </Link>
      <Search />
    </div>
  );
};

export default Navbar;
