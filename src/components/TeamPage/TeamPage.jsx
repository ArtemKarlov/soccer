import React from "react";
import { Route, Switch } from "react-router-dom";

import TeamsList from "../TeamsList/TeamsList.jsx";

export default function TeamPage(props) {

    const {token: API_TOKEN, teamList, returnTeamList: getTeamList} = props;
    
    return (
        <Switch>
            <Route exact path="/teams">
                <TeamsList token={API_TOKEN} teamList={teamList} returnTeamList={getTeamList} />
            </Route>
            <Route path="/teams/:teamId" 
                render={(props) => 
                    <div><p className="text-black"> hello {props.match.params.teamId}</p></div>
                }                
            />
        </Switch>
    );
}
