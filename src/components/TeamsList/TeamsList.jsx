import React, { useEffect} from "react";

import Team from "../Team/Team.jsx";

const API_HOST = "http://api.football-data.org";


function TeamsList(props) {

    const teams = props.teamList;
    const TOKEN = props.token;
    const teamsUrl = new URL("v2/teams", API_HOST);

    useEffect(() => {
        if (teams.length === 0) {
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
                props.returnTeamList(data.teams);
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