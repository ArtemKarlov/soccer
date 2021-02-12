import React from "react";
import { Link } from "react-router-dom";

import Competition from "../Competition/Competition.jsx";


export default function CompetitionsList(props) {
    const {leagueList} = props;

    return (
        <ul className="max-w-md mx-auto p-2">
            { leagueList.map((competition) => 
                <li key={competition.id} className="my-2">
                    <Link to={`/leagues/${competition.id}/calendar`} className="py-2 px-4 space-x-4 flex justify-start items-center bg-gray-600 rounded hover:bg-gray-700 active:bg-gray-800">
                        <Competition competition={competition} />
                    </Link>
                </li>
            )}                            
        </ul>
    );
}
