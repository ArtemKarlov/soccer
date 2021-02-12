import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function DateFilter(props) {

    const [dateFrom, setDateFrom] = useState('');
    const [dateTo, setDateTo] = useState('');
    const location = useLocation();

    const dateRange = 360;
    const maxDateLimit = new Date(dateFrom);
        maxDateLimit.setDate(maxDateLimit.getDate() + dateRange);
    const formatedMaxDateLimit = getFormatedDate(maxDateLimit);
    const minDateLimit = new Date(dateTo);
        minDateLimit.setDate(minDateLimit.getDate() - dateRange);
    const formatedMinDateLimit = getFormatedDate(minDateLimit);

    function getFormatedDate(date) {
        const formatedDate = date.getFullYear() + '-' + ('0' + (date.getMonth() + 1)).slice(-2) + '-' + ('0' + date.getDate()).slice(-2);
        return formatedDate;
    }

    return (
        <div className="p-2 bg-gray-400 rounded flex justify-start items-center space-x-3">
            <label className="text-gray-800">
                <span>From: </span>  
                <input id="dateFrom" type="date" value={dateFrom} min={formatedMinDateLimit} max={dateTo} className="h-8 py-1 text-sm text-gray-800 rounded"
                    onChange={(event) => setDateFrom(event.target.value)}
                />
            </label>
            <label className="text-gray-800">
                <span>To: </span>
                <input id="dateTo" type="date" value={dateTo} min={dateFrom} max={formatedMaxDateLimit} className="h-8 py-1 text-sm text-gray-800 rounded" 
                    onChange={(event) => setDateTo(event.target.value)}
                />
            </label>
            <Link to={`${location.pathname}?dateFrom=${dateFrom ? dateFrom : dateTo ? formatedMinDateLimit : ''}&dateTo=${dateTo ? dateTo : dateFrom ? formatedMaxDateLimit : ''}`} className="py-1 px-4 rounded space-x-4 flex justify-start items-center bg-blue-400 hover:bg-blue-500 active:bg-blue-800" 
                 onClick={() => {props.handleClick()}}
            >
                Search
            </Link>
        </div>
    );    
}