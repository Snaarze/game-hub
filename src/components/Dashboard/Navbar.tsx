import React from "react";
import logo from "../../assets/img/Logo/logo.webp";
import Search from "./Search";

interface Props {
  onSearch: (searchText: string) => void;
}

const Navbar = ({ onSearch }: Props) => {
  return (
    <div className="flex mx-5 my-2 gap-10 items-center">
      <img src={logo} alt="" className="w-14" />
      <Search onSearch={onSearch} />
      <label htmlFor="check">
        <input type="checkbox" name="dark" id="dark" />
        Dark
      </label>
    </div>
  );
};

export default Navbar;
