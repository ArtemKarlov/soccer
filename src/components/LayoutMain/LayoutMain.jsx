import React, {useState} from "react";
import {Switch, Route} from 'react-router-dom';

import SingIn from "../SingIn/SingIn.jsx";
import CompetitionsList from "../CompetitionsList/CompetitionsList.jsx";
import TeamsList from "../TeamsList/TeamsList.jsx";
import MatchDay from '../MatchDay/MatchDay.jsx';

const TOKEN = "873a7beac6284548acc0a6aac3e3f99a";
const API_HOST = "http://api.football-data.org";

function LayoutMain() {

    const [API_TOKEN, setApiToken] = useState('');
    const getToken = (value) => {
        setApiToken(value);
    };

    const [leagueList, setLeagueList] = useState([]);
    const getLeagueList = (value) => {    
        setLeagueList([...value]); 
    };

    const [teamList, setTeamList] = useState([]);
    const getTeamList = (value) => {    
        setTeamList([...value]); 
    };   


    return (
        <main className="px-20 py-8 mb-auto">
            <Switch>
                <Route exact path="/">
                    <SingIn giveToken={getToken} />
                    {/* <MatchDay teams={teamList}/> */}
                </Route>
                <Route path="/leagues">
                    <CompetitionsList token={API_TOKEN} leagueList={leagueList} giveLeagueList={getLeagueList} />
                </Route>
                <Route path="/teams">
                    <TeamsList token={API_TOKEN} teamList={teamList} giveTeamList={getTeamList} />
                </Route>
            </Switch>
        </main>
    );
}

export default LayoutMain;
