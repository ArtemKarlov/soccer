import React, {useState} from "react";
import {Switch, Route} from 'react-router-dom';

import Home from "../Home/Home.jsx";
import CompetitionsList from "../CompetitionsList/CompetitionsList.jsx";
import TeamsList from "../TeamsList/TeamsList.jsx";
import MatchDay from '../MatchDay/MatchDay.jsx';

function LayoutMain() {

    const [teamList, setTeamList] = useState([]);
    const getTeamList = (value) => {    
        setTeamList([...value]); 
    }

    return (
        <main className="px-20 py-8 mb-auto">
            <Switch>
                <Route exact path="/">
                    <Home />
                    {/* <MatchDay teams={teamList}/> */}
                </Route>
                <Route path="/leagues" component={ CompetitionsList }/>
                <Route path="/teams">
                    <TeamsList giveTeamList={getTeamList}/>
                </Route>
            </Switch>
        </main>
    );
}

export default LayoutMain;
