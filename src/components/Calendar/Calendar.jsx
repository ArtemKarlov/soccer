import React, { useState, useEffect, Fragment } from "react";
import { useLocation, useParams } from "react-router-dom";

import MatchDay from "../MatchDay/MatchDay.jsx";
import DateFilter from "../Filters/DateFilter.jsx";

import { API_HOST, API_TOKEN } from "../global/global.js";

export default function Calendar(props) {
  const [matches, setMatches] = useState([]);
  const [isMatchesLoaded, setIsMatchesLoaded] = useState(false);
  const [calendarName, setCalendrName] = useState("");

  const { calendarOwners, type, teams } = props;
  const { id } = useParams();

  console.log(calendarOwners);

  const location = useLocation();
  const matchesUrl = new URL(`${type}/${id}/matches`, API_HOST);

  function getData(url) {
    fetch(url, {
      method: "GET",
      headers: {
        "X-Auth-Token": API_TOKEN,
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setMatches([...data.matches]);
      });
  }

  const handleFilter = () => {
    setIsMatchesLoaded(false);
  };

  useEffect(() => {
    const dateFrom = new URLSearchParams(location.search).get("dateFrom");
    const dateTo = new URLSearchParams(location.search).get("dateTo");
    matchesUrl.searchParams.append(
      "dateFrom",
      dateFrom !== null ? dateFrom : ""
    );
    matchesUrl.searchParams.append("dateTo", dateTo !== null ? dateTo : "");
    getData(matchesUrl);
    setIsMatchesLoaded(true);
  }, [isMatchesLoaded]);

  return (
    <Fragment>
      <div className="pt-0 pb-4 px-10">
        <p className="font-bold text-xl text-gray-800 text-center">
          {calendarName}
        </p>
      </div>
      <DateFilter handleClick={handleFilter} />
      <MatchDay matches={matches} teams={teams} />
    </Fragment>
  );
}
