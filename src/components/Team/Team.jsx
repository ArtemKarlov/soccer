import React from "react";

import logo from '../../img/logo-white.png';

function Team(props) {
    
    const { team } = props;

    const crestUrl = (team.crestUrl) ? team.crestUrl : logo;
    
    return (
        <a href="#" className="py-2 px-4 space-x-4 flex justify-start items-center bg-gray-600 rounded hover:bg-gray-700 active:bg-gray-800">
            <img src={ crestUrl } 
                alt="League Logo" width="35px" className="" />
            <h3 className="text-xl font-bold">{ team.name }</h3>
        </a>
    );
}

export default Team;