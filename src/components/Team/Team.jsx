import React, { Fragment } from "react";

import logo from '../../img/logo-white.png';

function Team(props) {
    
    const { team } = props;

    const crestUrl = (team.crestUrl) ? team.crestUrl : logo;
    
    return (
        <Fragment>
            <div className="w-10 h-10 flex flex-shrink-0 flex-grow-0 justify-center items-center">
                <img src={ crestUrl } alt="Logo" className="h-full w-full object-contain" />
            </div>
            <h3 className="text-xl font-bold">{ team.name }</h3>
        </Fragment>
    );
}

export default Team;