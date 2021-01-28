import React from 'react';
import {Switch, Route} from 'react-router-dom';

import CompetitionsList from "../CompetitionsList/CompetitionsList.jsx";
import TeamsList from "../TeamsList/TeamsList.jsx";

export default function Router() {
    return (
        <Switch>
            <Route exact path="/leagues" component={ CompetitionsList }/>
            <Route exact path="/teams">
                <TeamsList />
            </Route>
        </Switch>
    );
}
