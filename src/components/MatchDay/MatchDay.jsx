import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Match from "../Match/Match.jsx";
import { API_HOST } from "../global/global.jsx";

function MatchDay(props) {

    const { teams, API_TOKEN } = props;
    const { teamId } = useParams();
    const matchesUrl = new URL(`v2/teams/${teamId}/matches`, API_HOST);

    const [matches, setMatches] = useState([]);

    useEffect(() => {
        if (matches.length === 0) {
            fetch(matchesUrl, {
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
    });

    return (
        <div className="my-4 bg-gray-400 rounded">
                <div className="pt-4 px-10 text-black">
                    <span>Match Day {teamId}</span>
                </div>
                <ul className="py-2 px-1 flex justify-center flex-wrap text-black">
                    {matches.map((match) =>
                        <li key={match.id} className="my-2 mx-1">
                            <Match match={match} teams={teams} />
                        </li>
                    )}
                </ul>
            </div>
    );    
}

export default MatchDay;
