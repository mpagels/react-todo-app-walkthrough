import React from "react";

export default function FilterButton({ setFilterTo, label, filter }) {
  function handleOnClick(filterName) {
    setFilterTo(filterName);
  }
  return (
    <button
      onClick={() => handleOnClick(label)}
      className={`StatusFilterWrapper__FilterButton ${
        filter === label && `--actvite-${label.toLowerCase()}`
      }`}
    >
      {label}
    </button>
  );
}
