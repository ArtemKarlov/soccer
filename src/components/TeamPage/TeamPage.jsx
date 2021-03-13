import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";

import TeamsList from "../TeamsList/TeamsList.jsx";
import Calendar from "../Calendar/Calendar.jsx";

import { API_HOST, API_TOKEN } from "../global/global.js";

export default function TeamPage(props) {
  const { teamList, returnTeamList } = props;

  const teamsUrl = new URL("teams", API_HOST);

  useEffect(() => {
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
      <Route exact path="/teams">
        <TeamsList teamList={teamList} />
      </Route>
      <Route path="/teams/:id/calendar">
        <Calendar
          type="teams"
          API_TOKEN={API_TOKEN}
          teams={teamList}
          calendarOwners={teamList}
        />
      </Route>
    </Switch>
  );
}
