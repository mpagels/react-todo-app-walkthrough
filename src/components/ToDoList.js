import React from "react";

export default function ToDoList({ todos }) {
  return (
    <ul>
      <li className="ToDo">
        <button className="ToDo__btn delete">X</button>
        <p>This is a ToDo</p>
        <button className="ToDo__btn pending">Pending</button>
      </li>
      <li className="ToDo">
        <button className="ToDo__btn delete">X</button>
        <p>This is a another ToDo</p>
        <button className="ToDo__btn done">Done</button>
      </li>
    </ul>
  );
}
