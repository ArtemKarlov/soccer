import React, { useEffect} from "react";
import { Link } from "react-router-dom";

import Competition from "../Competition/Competition.jsx";
import { API_HOST } from "../global/global.jsx";


function CompetitionsList(props) {

    const competitionsUrl = new URL("v2/competitions", API_HOST);
    competitionsUrl.searchParams.append("plan", "TIER_ONE");
    competitionsUrl.searchParams.append("areas", "2077");
    const TOKEN = props.token;
    const competitions = props.leagueList;

    useEffect(() => {
        if (competitions.length === 0) {
            fetch(competitionsUrl, {
            method: 'GET',
            headers: {
                'X-Auth-Token': TOKEN,
            },
            })
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                props.returnLeagueList(data.competitions)
            });
        }  
    });

    return (
        <ul className="max-w-md mx-auto p-2">
            { competitions.map((competition) => 
                <li key={competition.id} className="my-2">
                    <Link to={`/leagues/${competition.id}/calendar`} className="py-2 px-4 space-x-4 flex justify-start items-center bg-gray-600 rounded hover:bg-gray-700 active:bg-gray-800">
                        <Competition competition={competition} />
                    </Link>
                </li>
            )}                            
        </ul>
    );
}

export default CompetitionsList;