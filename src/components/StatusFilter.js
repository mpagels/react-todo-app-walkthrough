import React from "react";

export default function StatusFilter({ setFilterTo, filter }) {
  function handleOnClick(filterName) {
    setFilterTo(filterName);
  }
  return (
    <ul className="StatusFilterWrapper">
      <li>
        <button
          onClick={() => handleOnClick("all")}
          className={`StatusFilterWrapper__FilterButton ${
            filter === "all" && "--actvite-all"
          }`}
        >
          All
        </button>
      </li>
      <li>
        <button
          onClick={() => handleOnClick("Pending")}
          className={`StatusFilterWrapper__FilterButton ${
            filter === "Pending" && "--actvite-pending"
          }`}
        >
          Pending
        </button>
      </li>
      <li>
        <button
          onClick={() => handleOnClick("Done")}
          className={`StatusFilterWrapper__FilterButton ${
            filter === "Done" && "--actvite-done"
          }`}
        >
          Done
        </button>
      </li>
    </ul>
  );
}
