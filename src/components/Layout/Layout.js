import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

import LayoutHeader from "../LayoutHeader/LayoutHeader.jsx";
import Router from "../Router/Router.jsx";
import Button from "../Button/Button.jsx";
import CompetitionsList from "../CompetitionsList/CompetitionsList.jsx";
import TeamsList from "../TeamsList/TeamsList.jsx";
import Match from "../Match/Match.jsx";
import MatchDay from '../MatchDay/MatchDay.jsx';


function Layout() {

    // useEffect(() => {
    //     fetch('http://api.football-data.org/v2/competitions/PL', {
    //         method: 'GET',
    //         headers: {
    //             'X-Auth-Token': '873a7beac6284548acc0a6aac3e3f99a',
    //         },
    //     })
    //     .then((response) => {
    //         return response.json();
    //     })
    //     .then((data) => {
    //         // console.log(data);
    //         if (isObjEmpty(leagues)) {
    //             setLeagues({...data});
    //             console.log(data);
    //         }
    //     });
    // });

    const [teamList, setTeamList] = useState([]);

    const getTeamList = (value) => {    
        setTeamList([...value]); 
    }


    return (
        <div className="container mx-auto flex flex-col justify-between min-h-screen bg-gray-200 text-white">
            <LayoutHeader />

            <main className="px-20 py-8 mb-auto">

                <h1 className="text-2xl font-bold text-black text-center">Leagues</h1>

                {/* <!-- Filters --> */}
                <div className="my-2 p-2 bg-gray-400 rounded">
                    <label className="text-black">
                        <input type="text" className="w-28 p-1 text-black" placeholder="Search" />
                    </label>
                </div>
                {/* <CompetitionsList />
                <TeamsList getTeamList={getTeamList} /> */}
                <Router />
                {/* <MatchDay teams={teamList}/> */}
            </main>

            <footer className="px-4 h-16 bg-gray-800">
                <p>2021 SimbirSoft Test</p>
            </footer>        
        </div>
    );
  }
  
  export default Layout;