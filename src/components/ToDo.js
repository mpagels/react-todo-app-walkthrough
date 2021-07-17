import React from "react";
import editSymbol from "../assets/svg/edit.svg";

export default function ToDo({
  handleOnDeleteClick,
  handleOnToggleClick,
  handleToggleEditeMode,
  todo,
}) {
  return (
    <>
      <div className="ToDo__btn--wrapper">
        <button onClick={handleOnDeleteClick} className="ToDo__btn delete">
          X
        </button>
        <button onClick={handleToggleEditeMode} className="ToDo__btn--edit">
          <img src={editSymbol} alt="" />
        </button>
      </div>
      <p>{todo.todo}</p>
      <button
        onClick={handleOnToggleClick}
        className={`ToDo__btn ${
          todo.status === "Pending" ? "pending" : "done"
        }`}
      >
        {todo.status}
      </button>
    </>
  );
}
