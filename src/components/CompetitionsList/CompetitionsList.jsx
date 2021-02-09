import React, { useEffect} from "react";

import Competition from "../Competition/Competition.jsx";

const API_HOST = "http://api.football-data.org";

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
                    <Competition competition={competition} />
                </li>
            )}                            
        </ul>
    );
}

export default CompetitionsList;