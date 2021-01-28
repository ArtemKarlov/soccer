import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

import logo from '../../img/logo-white.png';
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
            <header className="px-4 space-x-4 flex justify-between items-center bg-gray-800">
                <div>
                    <img src={logo} 
                        alt="logo" width="100px" />
                </div>
                <nav className="text-white hidden md:block">
                    <ul className="flex space-x-4">
                        <li className="block py-2 px-3 text-gray-300 rounded-md bg-gray-900">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="block py-2 px-3 text-gray-300 rounded-md hover:bg-gray-700">
                            <Link to="/leagues">Leagues</Link>
                        </li>
                        <li className="block py-2 px-3 text-gray-300 rounded-md hover:bg-gray-700">
                            <Link to="/teams">Teams</Link>
                        </li>
                    </ul>
                </nav>
                <Button name="Log In" />
                
            </header>

            <main className="px-20 py-8 mb-auto">

                <h1 className="text-2xl font-bold text-black text-center">Leagues</h1>

                {/* <!-- Filters --> */}
                <div className="my-2 p-2 bg-gray-400 rounded">
                    <label className="text-black">
                        <input type="text" className="w-28 p-1 text-black" placeholder="Search" />
                    </label>
                </div>
                <CompetitionsList />
                <TeamsList getTeamList={getTeamList} />

                <MatchDay teams={teamList}/>
            </main>

            <footer className="px-4 h-16 bg-gray-800">
                <p>2021 SimbirSoft Test</p>
            </footer>        
        </div>
    );
  }
  
  export default Layout;