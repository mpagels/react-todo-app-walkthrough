import React from "react";
import ToDoItem from "./ToDoItem";

export default function ToDoList({
  todos,
  filter,
  deleteToDo,
  toggleStatusOfTodo,
}) {
  return (
    <ul>
      {todos
        .filter((todo) => {
          if (filter === "all") {
            return true;
          } else {
            return todo.status === filter;
          }
        })
        .map((todo) => {
          return (
            <ToDoItem
              key={todo.todo}
              todo={todo}
              deleteToDo={deleteToDo}
              toggleStatusOfTodo={toggleStatusOfTodo}
            />
          );
        })}
    </ul>
  );
}
