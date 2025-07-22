import React from "react";
import logo from "../../assets/img/Logo/logo.webp";
import Search from "./Search";

const Navbar = () => {
  return (
    <div className="flex mx-5 my-2 gap-10 items-center">
      <img src={logo} alt="" className="w-14" />
      <Search />
    </div>
  );
};

export default Navbar;
