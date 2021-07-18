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
      {todos.filter(whichToDoToRender).map((todo) => {
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

  // helper function
  function whichToDoToRender(todo) {
    if (filter === "All") {
      return true;
    } else {
      return todo.status === filter;
    }
  }
}
