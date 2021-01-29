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
                    <li>
                        <Link to="/" className="block py-2 px-3 text-gray-300 rounded-md bg-gray-900">Home</Link>
                    </li>
                    <li>
                        <Link to="/leagues" className="block py-2 px-3 text-gray-300 rounded-md hover:bg-gray-700">Leagues</Link>
                    </li>
                    <li>
                        <Link to="/teams" className="block py-2 px-3 text-gray-300 rounded-md hover:bg-gray-700">Teams</Link>
                    </li>
                </ul>
            </nav>
            <div className="hidden md:block"><Button name="Log In" /></div>                
        </header>

    );       
}

export default LayoutHeader;
