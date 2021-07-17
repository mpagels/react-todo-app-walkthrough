import React from "react";

export default function StatusFilter({ setFilterTo }) {
  function handleOnClick(filterName) {
    setFilterTo(filterName);
  }
  return (
    <ul className="StatusFilterWrapper">
      <li>
        <button
          onClick={() => handleOnClick("all")}
          className="StatusFilterWrapper__FilterButton"
        >
          All
        </button>
      </li>
      <li>
        <button
          onClick={() => handleOnClick("pending")}
          className="StatusFilterWrapper__FilterButton"
        >
          Pending
        </button>
      </li>
      <li>
        <button
          onClick={() => handleOnClick("done")}
          className="StatusFilterWrapper__FilterButton"
        >
          Done
        </button>
      </li>
    </ul>
  );
}
