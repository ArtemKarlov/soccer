import React, { Fragment } from "react";

function Competition(props) {
    
    const { competition } = props;

    const emblemUrl = (competition.emblemUrl) ? competition.emblemUrl : "https://upload.wikimedia.org/wikipedia/commons/b/b7/Flag_of_Europe.svg";
    
    return (
        <Fragment>
            <div className="w-10 h-10 flex flex-shrink-0 flex-grow-0 justify-center items-center">
                <img src={ emblemUrl } alt="League Logo" className="h-full w-full object-contain" />
            </div>
            <h3 className="text-xl font-bold">{ competition.name }</h3>
        </Fragment> 
    );
}

export default Competition;