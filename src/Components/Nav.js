import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";

const Nav = () => {
  const [opendrop, setopendrop] = useState(false);

  return (
    <>
      <nav className="p-4 bg-[#2F3441] flex justify-between">
        <div className="">
          <img
            src="/Images/Logo.png"
            className="max-w-[35px] md:ml-10"
            alt="Logo"
          />
        </div>
        <div>
          <ul className="hidden md:flex gap-10 mr-10">
            <li className="text-white">
              <a href="#">Home</a>
            </li>
            <li className="text-white">
              <a href="#">Movies</a>
            </li>
            <li className="text-white">
              <a href="#">TV Shows</a>
            </li>
            <li className="text-white">
              <a href="#">Top IMBD</a>
            </li>
          </ul>
        </div>
        <div className="md:hidden self-end">
          <button
            className="flex items-center gap-1 bg-[#444C5F] p-2 rounded-sm "
            onClick={() => setopendrop(!opendrop)}
          >
            <FiMenu className="mt-[2px]" />
            Menu
          </button>
        </div>
      </nav>
      
      {/* DropDown for mobile */}
      <ul
        className={`shadow ${
          opendrop
            ? "flex flex-col gap-6 bg-[#444C5F] p-5 w-64 absolute right-3 top-20 shadow-md duration-1000 shadow-[#444C5F] rounded-md"
            : "hidden"
        }`}
      >
        <li className="text-white">
          <a href="#">Home</a>
        </li>
        <li className="text-white">
          <a href="#">Movies</a>
        </li>
        <li className="text-white">
          <a >TV Shows</a>
        </li>
        <li className="text-white">
          <a href="#">Top IMBD</a>
        </li>
      </ul>
    </>
  );
};

export default Nav;