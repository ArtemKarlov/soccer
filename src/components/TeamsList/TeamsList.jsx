import React, { useEffect} from "react";
import { Link } from "react-router-dom";

import Team from "../Team/Team.jsx";

import { API_HOST } from "../global/global.jsx";

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
                    <Link to={`/teams/${team.id}`} className="py-2 px-4 space-x-4 flex justify-start items-center bg-gray-600 rounded hover:bg-gray-700 active:bg-gray-800">
                        <Team team={team} />
                    </Link>
                </li>
            )}                            
        </ul>
    );
}

export default TeamsList;