import React, { useState, useEffect, Fragment } from "react";
import { useLocation, useParams, useRouteMatch } from "react-router-dom";

import Match from "../Match/Match.jsx";
import DateFilter from "../Filters/DateFilter.jsx";

import { API_HOST } from "../global/global.jsx";

function MatchDay(props) {
    const [matches, setMatches] = useState([]);
    const [isMatchesLoaded, setIsMatchesLoaded] = useState(false);

    const { teams, API_TOKEN } = props;
    const { teamId } = useParams();
    const currentTeam = teams.find((team) => team.id === parseInt(teamId, 10));

    const location = useLocation();
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
    
    const handleFilter = () => { 
        setIsMatchesLoaded(false);  
    }
    
    useEffect(() => {
        if (!isMatchesLoaded) {
            const dateFrom = (new URLSearchParams(location.search).get("dateFrom"));
            const dateTo = (new URLSearchParams(location.search).get("dateTo"));
            matchesUrl.searchParams.append("dateFrom", dateFrom !== null ? dateFrom : '');
            matchesUrl.searchParams.append("dateTo", dateTo !== null ? dateTo : '');
            getData(matchesUrl);
            setIsMatchesLoaded(true);
        }  
    });

    return (
        <Fragment>
            <DateFilter handleClick={handleFilter} />
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
