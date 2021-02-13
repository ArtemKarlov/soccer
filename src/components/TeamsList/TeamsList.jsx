import React from "react";
import { Link } from "react-router-dom";

import Team from "../Team/Team.jsx";

function TeamsList(props) {
  const teams = props.teamList;

  return (
    <ul className="max-w-md mx-auto p-2">
      {teams.map((team) => (
        <li key={team.id} className="my-2">
          <Link
            to={`/teams/${team.id}/calendar`}
            className="py-2 px-4 space-x-4 flex justify-start items-center bg-gray-600 rounded hover:bg-gray-700 active:bg-gray-800"
          >
            <Team team={team} />
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default TeamsList;
