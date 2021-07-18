import React from "react";
import ToDoItem from "./ToDoItem";

export default function ToDoList({ todos }) {
  return (
    <ul>
      {todos.map((todo) => {
        return <ToDoItem key={todo.todo} todo={todo} />;
      })}
    </ul>
  );
}
