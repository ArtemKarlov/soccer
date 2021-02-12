import React, { useState, useEffect, Fragment } from "react";
import { useLocation, useParams, useRouteMatch } from "react-router-dom";

import MatchDay from "../MatchDay/MatchDay.jsx";
import DateFilter from "../Filters/DateFilter.jsx";

import { API_HOST } from "../global/global.jsx";

export default function Calendar(props) {
    const [matches, setMatches] = useState([]);
    const [isMatchesLoaded, setIsMatchesLoaded] = useState(false);

    const { teams, API_TOKEN } = props;
    const { id } = useParams();
    const currentTeam = teams.find((team) => team.id === parseInt(id, 10));

    const location = useLocation();
    const matchesUrl = new URL(`v2/teams/${id}/matches`, API_HOST);

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
            <MatchDay matches={matches} teams={teams} />
        </Fragment>
    );    
}
