import React from "react";
import { Link } from "react-router-dom";

function Competition(props) {
    
    const { competition } = props;

    const emblemUrl = (competition.emblemUrl) ? competition.emblemUrl : "https://upload.wikimedia.org/wikipedia/commons/b/b7/Flag_of_Europe.svg";
    
    return (
        <Link to="/" className="py-2 px-4 space-x-4 flex justify-start items-center bg-gray-600 rounded hover:bg-gray-700 active:bg-gray-800">
            <div className="w-10 h-10 flex flex-shrink-0 flex-grow-0 justify-center items-center">
                <img src={ emblemUrl } alt="League Logo" className="h-full w-full object-contain" />
            </div>
            <h3 className="text-xl font-bold">{ competition.name }</h3>
        </Link>
    );
}

export default Competition;