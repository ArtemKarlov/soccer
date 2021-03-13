import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";

import CompetitionsList from "../CompetitionsList/CompetitionsList.jsx";
import Calendar from "../Calendar/Calendar.jsx";
import { API_HOST } from "../global/global.js";

export default function CompetitionPage(props) {
  const {
    token: API_TOKEN,
    leagueList,
    teamList,
    returnLeagueList,
    returnTeamList,
  } = props;

  const competitionsUrl = new URL("competitions", API_HOST);
  competitionsUrl.searchParams.append("plan", "TIER_ONE");
  competitionsUrl.searchParams.append("areas", "2077");
  const teamsUrl = new URL("teams", API_HOST);

  useEffect(() => {
    if (leagueList.length === 0) {
      fetch(competitionsUrl, {
        method: "GET",
        headers: {
          "X-Auth-Token": API_TOKEN,
        },
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          returnLeagueList(data.competitions);
        });
    }
    if (teamList.length === 0) {
      fetch(teamsUrl, {
        method: "GET",
        headers: {
          "X-Auth-Token": API_TOKEN,
        },
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          returnTeamList(data.teams);
        });
    }
  });

  return (
    <Switch>
      <Route exact path="/leagues">
        <CompetitionsList leagueList={leagueList} />
      </Route>
      <Route path="/leagues/:id/calendar">
        <Calendar
          type="competitions"
          API_TOKEN={API_TOKEN}
          teams={teamList}
          calendarOwners={leagueList}
        />
      </Route>
      <Route
        path="/leagues/:leagueId/calendar"
        render={(props) => (
          <div>
            <p className="text-black"> hello {props.match.params.leagueId}</p>
          </div>
        )}
      />
    </Switch>
  );
}
