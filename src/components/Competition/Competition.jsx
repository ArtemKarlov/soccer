import React from "react";

import logo from '../../img/logo-white.png';

function Competition(props) {
    
    const { competition } = props;

    const emblemUrl = (competition.emblemUrl) ? competition.emblemUrl : "https://upload.wikimedia.org/wikipedia/commons/b/b7/Flag_of_Europe.svg";
    
    return (
        <a href="#" className="py-2 px-4 space-x-4 flex justify-start items-center bg-gray-600 rounded hover:bg-gray-700 active:bg-gray-800">
            <img src={ emblemUrl } 
                alt="League Logo" width="35px" className="" />
            <h3 className="text-xl font-bold">{ competition.name }</h3>
        </a>
    );
}

export default Competition;