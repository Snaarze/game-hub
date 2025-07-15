import React from "react";

const Navbar = () => {
  return (
    <div className="flex mx-5 my-2 gap-10 items-center">
      <h1>Logo</h1>
      <div className="flex flex-1">
        <input
          type="text"
          className="flex-1 border-1 border-black py-2 px-10 rounded-3xl"
          placeholder="Search games..."
        />
      </div>
      <label htmlFor="check">
        <input type="checkbox" name="dark" id="dark" />
        Dark
      </label>
    </div>
  );
};

export default Navbar;
