import React from "react";

export default function ToDo({ todo, deleteToDo, toggleStatusOfTodo }) {
  function handleOnClick() {
    deleteToDo(todo.todo);
  }

  function handleOnToggleClick() {
    toggleStatusOfTodo(todo.todo);
  }
  return (
    <li className="ToDo">
      <button onClick={handleOnClick} className="ToDo__btn delete">
        X
      </button>
      <p>{todo.todo}</p>
      <button
        onClick={handleOnToggleClick}
        className={`ToDo__btn ${
          todo.status === "Pending" ? "pending" : "done"
        }`}
      >
        {todo.status}
      </button>
    </li>
  );
}
