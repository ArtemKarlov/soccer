import React, { useEffect, useState } from "react";

import Team from "../Team/Team.jsx";

const API_HOST = "http://api.football-data.org";
const TOKEN = "873a7beac6284548acc0a6aac3e3f99a"
const teamsUrl = new URL("v2/teams", API_HOST);

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


function TeamsList(props) {

    const [teams, setTeams] = useState([]);

    useEffect(() => {
        if (teams.length == 0) {
            fetch(teamsUrl, {
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
                setTeams([...data.teams]);
                props.giveTeamList(data.teams);
            });
        }  
    });

    return (
        <ul className="max-w-md mx-auto p-2">
            { teams.map((team) => 
                <li key={team.id} className="my-2">
                    <Team team={team} />
                </li>
            )}                            
        </ul>
    );
}

export default TeamsList;