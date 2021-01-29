import React from "react";
import { Link } from "react-router-dom";

import logo from '../../img/logo-white.png';

function Team(props) {
    
    const { team } = props;

    const crestUrl = (team.crestUrl) ? team.crestUrl : logo;
    
    return (
        <Link to="/" className="py-2 px-4 space-x-4 flex justify-start items-center bg-gray-600 rounded hover:bg-gray-700 active:bg-gray-800">
            <div className="w-10 h-10 flex flex-shrink-0 flex-grow-0 justify-center items-center">
                <img src={ crestUrl } alt="Logo" className="h-full w-full object-contain" />
            </div>
            <h3 className="text-xl font-bold">{ team.name }</h3>
        </Link>
    );
}

export default Team;