import React from "react";

export default function ToDoList({ todos }) {
  return (
    <ul>
      {todos.map((todo) => {
        return (
          <li key={todo.todo} className="ToDo">
            <button className="ToDo__btn delete">X</button>
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
      })}
    </ul>
  );
}
