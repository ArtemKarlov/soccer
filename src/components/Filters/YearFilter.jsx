import React from "react";

export default function YearFilter(props) {
  const handleSelect = (event) => {
    console.log(event.target.value);
  };

  const currentYear = new Date().getFullYear();
  console.log(currentYear);
  const optionYearPool = [];
  for (let i = currentYear - 30; i <= currentYear; i++) {
    if (i !== currentYear) {
      optionYearPool.push(<option value={i}>{i}</option>);
    } else {
      optionYearPool.push(
        <option value={i} selected>
          {i}
        </option>
      );
    }
  }

  return (
    <div className="p-2 bg-gray-400 rounded flex justify-start items-center space-x-3">
      <select
        name="year"
        size="1"
        className="h-8 p-1 pr-10 text-gray-800"
        onChange={(e) => handleSelect(e)}
      >
        {optionYearPool}
      </select>
    </div>
  );
}
