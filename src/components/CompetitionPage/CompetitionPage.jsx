import React from "react";
import { Route, Switch } from "react-router-dom";

import CompetitionsList from "../CompetitionsList/CompetitionsList.jsx";

export default function CompetitionPage(props) {

    const {token: API_TOKEN, leagueList, returnLeagueList: getLeagueList} = props;

    return (
        <Switch>
            <Route exact path="/leagues">
                <CompetitionsList token={API_TOKEN} leagueList={leagueList} returnLeagueList={getLeagueList} />
            </Route>
            <Route path="/leagues/:leagueId/calendar" 
                render={(props) => 
                    <div><p className="text-black"> hello {props.match.params.leagueId}</p></div>
                }                
            />
        </Switch>
    );   
}
