import React, {useEffect} from "react";
import { Route, Switch } from "react-router-dom";

import CompetitionsList from "../CompetitionsList/CompetitionsList.jsx";
import MatchDay from "../MatchDay/MatchDay.jsx";
import { API_HOST } from "../global/global.jsx";


export default function CompetitionPage(props) {

    const {token: API_TOKEN, leagueList, returnLeagueList} = props;

    const competitionsUrl = new URL("v2/competitions", API_HOST);
        competitionsUrl.searchParams.append("plan", "TIER_ONE");
        competitionsUrl.searchParams.append("areas", "2077");
 
    useEffect(() => {
        if (leagueList.length === 0) {
            fetch(competitionsUrl, {
            method: 'GET',
            headers: {
                'X-Auth-Token': API_TOKEN,
            },
            })
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                returnLeagueList(data.competitions)
            });
        }  
    });


    return (
        <Switch>
            <Route exact path="/leagues">
                <CompetitionsList leagueList={leagueList} />
            </Route>
            <Route path="/leagues/:id/calendar" >
                <MatchDay teams={leagueList} API_TOKEN={API_TOKEN}/> 
            </Route>
            <Route path="/leagues/:leagueId/calendar" 
                render={(props) => 
                    <div><p className="text-black"> hello {props.match.params.leagueId}</p></div>
                }                
            />
        </Switch>
    );   
}
