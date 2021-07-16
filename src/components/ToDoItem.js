import React from "react";

export default function ToDo({ todo, deleteToDo }) {
  function handleOnClick() {
    deleteToDo(todo.todo);
  }
  return (
    <li className="ToDo">
      <button onClick={handleOnClick} className="ToDo__btn delete">
        X
      </button>
      <p>{todo.todo}</p>
      <button
        className={`ToDo__btn ${
          todo.status === "Pending" ? "pending" : "done"
        }`}
      >
        {todo.status}
      </button>
    </li>
  );
}
