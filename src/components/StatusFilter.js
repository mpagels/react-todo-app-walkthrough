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
          onClick={() => handleOnClick("pending")}
          className={`StatusFilterWrapper__FilterButton ${
            filter === "pending" && "--actvite-pending"
          }`}
        >
          Pending
        </button>
      </li>
      <li>
        <button
          onClick={() => handleOnClick("done")}
          className={`StatusFilterWrapper__FilterButton ${
            filter === "done" && "--actvite-done"
          }`}
        >
          Done
        </button>
      </li>
    </ul>
  );
}
