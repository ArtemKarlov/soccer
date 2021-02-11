import React, {useState} from "react";
import {Switch, Route, Redirect} from 'react-router-dom';

import SingIn from "../SingIn/SingIn.jsx";
import CompetitionPage from "../CompetitionPage/CompetitionPage.jsx";
import TeamPage from "../TeamPage/TeamPage.jsx";

function LayoutMain() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const getLoggedStatus = (value) => {
        setIsLoggedIn(value);
    }
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
                    {
                        isLoggedIn ? 
                            <Redirect to="/leagues" /> : 
                            <SingIn returnToken={getToken} returnLoggedStatus={getLoggedStatus} />
                    }
                </Route>
                <Route path="/leagues">
                    <CompetitionPage token={API_TOKEN} leagueList={leagueList} returnLeagueList={getLeagueList} />
                </Route>
                <Route path="/teams">
                    <TeamPage token={API_TOKEN} teamList={teamList} returnTeamList={getTeamList} />
                </Route>
            </Switch>
        </main>
    );
}

export default LayoutMain;
