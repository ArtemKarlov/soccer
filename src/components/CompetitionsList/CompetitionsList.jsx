import React, { useEffect, useState } from "react";

import Competition from "../Competition/Competition.jsx";

const API_HOST = "http://api.football-data.org";
const TOKEN = "873a7beac6284548acc0a6aac3e3f99a"
const competitionsUrl = new URL("v2/competitions", API_HOST);
competitionsUrl.searchParams.append("plan", "TIER_ONE");
competitionsUrl.searchParams.append("areas", "2077");

// async function getData(url, token) {
//     const response = await fetch(url, {
//         method: 'GET',
//         headers: {
//             'X-Auth-Token': token,
//         },
//     });
//     const json = await response.json();

//     return json;
// }


function CompetitionsList() {

    const [competitions, setCompetitions] = useState([]);

    useEffect(() => {
        // if (competitions === null) {
        //     const leagues = getData(leageusUrl, TOKEN);
        //     setCompetitions(leagues.competitions);
        // }

        if (competitions.length == 0) {
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
                // console.log(data);
                setCompetitions([...data.competitions])
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