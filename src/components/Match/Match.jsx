import React from "react";

import logo from '../../img/logo-white.png';

function Team(props) {

    const {team} = props;
    const crestUrl = (team.crestUrl) ? team.crestUrl : logo;

    return (
        <div className="px-2 py-2 flex space-x-4 justify-between items-center">
            <span className="text-white text-md">{team.name}</span>
            <div className="h-12 w-12 flex flex-shrink-0 flex-grow-0 justify-center items-center">
                <img src={crestUrl} alt="Home Team Logo" className="object-contain h-full w-full" />
            </div>
        </div>
    );    
}


function Match(props) {

    const { match, teams } = props;

    let homeTeam = teams.find((team) => team.id === match.homeTeam.id);
    let awayTeam = teams.find((team) => team.id === match.awayTeam.id);
    homeTeam = (homeTeam !== undefined) ? homeTeam : match.homeTeam;
    awayTeam = (awayTeam !== undefined) ? awayTeam : match.awayTeam;
    const score = match.score.fullTime;    
    const dateOptions = {weekday: 'short', day: 'numeric', month: 'long', year: 'numeric', hour: 'numeric', minute: 'numeric' }
    const matchDate = (new Date(match.utcDate)).toLocaleDateString('ru-RU', dateOptions);

    return (
        <div className="px-4 bg-gray-600 rounded">
            <div className="p-1 text-center bg-gray-700 rounded">
                <span className="text-white">{ matchDate }</span>
            </div>
            <div className="flex">
                <div className="w-48">
                    <Team team={homeTeam} />
                    <Team team={awayTeam} />
                </div>
                <div className="w-10 py-4 flex flex-col items-center justify-between">
                    <span className="text-xl text-white">{ score.homeTeam }</span>
                    <span className="text-xl text-white">--</span>
                    <span className="text-xl text-white">{ score.awayTeam}</span>
                </div> 
            </div>             
        </div>
    );
}

export default Match;