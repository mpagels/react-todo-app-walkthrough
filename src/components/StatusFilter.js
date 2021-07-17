import React from "react";
import FilterButton from "./FilterButton";

export default function StatusFilter({ setFilterTo, filter }) {
  return (
    <ul className="StatusFilterWrapper">
      <li>
        <FilterButton label="All" setFilterTo={setFilterTo} filter={filter} />
      </li>
      <li>
        <FilterButton
          label="Pending"
          setFilterTo={setFilterTo}
          filter={filter}
        />
      </li>
      <li>
        <FilterButton label="Done" setFilterTo={setFilterTo} filter={filter} />
      </li>
    </ul>
  );
}
