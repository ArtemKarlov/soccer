import React, { useState, useEffect, Fragment } from "react";
import { useParams } from "react-router-dom";

import Match from "../Match/Match.jsx";
import Filters from "../Filters/Filters.jsx";

import { API_HOST } from "../global/global.jsx";

function MatchDay(props) {

    const [matches, setMatches] = useState([]);
    const [isMatchesLoaded, setIsMatchesLoaded] = useState(false);

    const { teams, API_TOKEN } = props;
    const { teamId } = useParams();
    const currentTeam = teams.find((team) => team.id === parseInt(teamId, 10));

    const matchesUrl = new URL(`v2/teams/${teamId}/matches`, API_HOST);

    function getData(url) {
        fetch(url, {
            method: 'GET',
            headers: {
                'X-Auth-Token': API_TOKEN,
            },
        })
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            setMatches([...data.matches]);
        });        
    }

    const getDateFilteredData = (start, end) => {
        matchesUrl.searchParams.append("dateFrom", start);
        matchesUrl.searchParams.append("dateTo", end);
        getData(matchesUrl);
    }
    
    useEffect(() => {
        if (!isMatchesLoaded) {
            getData(matchesUrl);
            setIsMatchesLoaded(true);
        }  
    });

    return (
        <Fragment>
            <Filters sendDateRange={getDateFilteredData} />
            <div className="my-4 bg-gray-400 rounded">
                <div className="pt-4 px-10">
                    <p className="font-bold text-xl text-gray-800 text-center">{currentTeam.name}</p>
                </div>
                <ul className="py-2 px-1 flex justify-center flex-wrap text-black">
                    {matches.map((match) =>
                        <li key={match.id} className="my-2 mx-1">
                            <Match match={match} teams={teams} />
                        </li>
                    )}
                </ul>
            </div>
        </Fragment>
    );    
}

export default MatchDay;
