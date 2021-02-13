import React from "react";
import { NavLink, useLocation } from "react-router-dom";

import logo from "../../img/logo-white.png";
import SearchBar from "../SearchBar/SearchBar.jsx";

function LayoutHeader() {
  let location = useLocation();

  return (
    <header className="px-4 flex bg-gray-800">
      <div className="">
        <img src={logo} alt="logo" width="100px" />
      </div>
      <div
        className={` ${
          location.pathname === "/" ? "hidden" : "flex"
        } flex-grow justify-end items-center`}
      >
        <nav className="text-white flex flex-grow justify-center">
          <ul className="flex space-x-2">
            <li>
              <NavLink
                to="/leagues"
                className="block py-2 px-3 text-gray-300 rounded-md hover:bg-gray-700"
                activeClassName="bg-gray-900"
              >
                Leagues
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/teams"
                className="block py-2 px-3 text-gray-300 rounded-md hover:bg-gray-700"
                activeClassName="bg-gray-900"
              >
                Teams
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className="hidden md:block">
          <SearchBar />
        </div>
      </div>
    </header>
  );
}

export default LayoutHeader;
