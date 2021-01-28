import React from "react";
import { Link } from "react-router-dom";

import logo from "../../img/logo-white.png";
import Button from "../Button/Button.jsx";

function LayoutHeader() {
    return (
        <header className="px-4 space-x-4 flex justify-between items-center bg-gray-800">
            <div>
                <img src={logo} 
                    alt="logo" width="100px" />
            </div>
            <nav className="text-white hidden md:block">
                <ul className="flex space-x-4">
                    <li className="block py-2 px-3 text-gray-300 rounded-md bg-gray-900">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="block py-2 px-3 text-gray-300 rounded-md hover:bg-gray-700">
                        <Link to="/leagues">Leagues</Link>
                    </li>
                    <li className="block py-2 px-3 text-gray-300 rounded-md hover:bg-gray-700">
                        <Link to="/teams">Teams</Link>
                    </li>
                </ul>
            </nav>
            <Button name="Log In" />                
        </header>

    );       
}

export default LayoutHeader;
