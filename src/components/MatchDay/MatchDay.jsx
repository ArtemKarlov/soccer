import React from "react";

import Match from "../Match/Match.jsx";

export default function MatchDay(props) {
  const { matches, teams } = props;

  return (
    <div className="my-4 bg-gray-400 rounded">
      <ul className="py-2 px-1 flex justify-center flex-wrap text-black">
        {matches.map((match) => (
          <li key={match.id} className="my-2 mx-1">
            <Match match={match} teams={teams} />
          </li>
        ))}
      </ul>
    </div>
  );
}
