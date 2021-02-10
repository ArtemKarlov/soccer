import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";

import TeamsList from "../TeamsList/TeamsList.jsx";
import MatchDay from "../MatchDay/MatchDay.jsx";

import { API_HOST } from "../global/global.jsx";

export default function TeamPage(props) {

    const {token: API_TOKEN, teamList, returnTeamList} = props;

    const test = 'teams';
  
    const teamsUrl = new URL(`v2/${test}`, API_HOST);

    useEffect(() => {
        if (teamList.length === 0) {
            fetch(teamsUrl, {
            method: 'GET',
            headers: {
                'X-Auth-Token': API_TOKEN,
            },
            })
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                returnTeamList(data.teams);
            });
        }  
    });

    
    return (
        <Switch>
            <Route exact path="/teams">
                <TeamsList teamList={teamList} />
            </Route>
            {/* <Route path="/teams/:teamId" 
                render={(props) => 
                    <div><p className="text-black"> hello {props.match.params.teamId}</p></div>
                }                
            /> */}
            <Route path="/teams/:teamId/calendar">
                <MatchDay teams={teamList} API_TOKEN={API_TOKEN}/> 
            </Route>
        </Switch>
    );
}
