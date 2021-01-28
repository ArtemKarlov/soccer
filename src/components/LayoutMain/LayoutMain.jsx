import React from "react";
import {Switch, Route} from 'react-router-dom';

import CompetitionsList from "../CompetitionsList/CompetitionsList.jsx";
import TeamsList from "../TeamsList/TeamsList.jsx";
import MatchDay from '../MatchDay/MatchDay.jsx';

function LayoutMain() {
    return (
        <main className="px-20 py-8 mb-auto">
            {/* <CompetitionsList />
            <TeamsList getTeamList={getTeamList} /> */}
            <Switch>
                <Route exact path="/leagues" component={ CompetitionsList }/>
                <Route exact path="/teams">
                    <TeamsList />
                </Route>
                {/* <MatchDay teams={teamList}/> */}
            </Switch>
        </main>
    );
}

export default LayoutMain;
