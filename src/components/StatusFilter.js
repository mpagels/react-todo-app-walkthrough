import React from "react";

export default function StatusFilter() {
  return (
    <ul className="StatusFilterWrapper">
      <li>
        <button className="StatusFilterWrapper__FilterButton">All</button>
      </li>
      <li>
        <button className="StatusFilterWrapper__FilterButton">Pending</button>
      </li>
      <li>
        <button className="StatusFilterWrapper__FilterButton">Done</button>
      </li>
    </ul>
  );
}
