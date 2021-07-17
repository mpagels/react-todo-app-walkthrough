import React from "react";
import ToDoItem from "./ToDoItem";

export default function ToDoList({
  todos,
  filter,
  deleteToDo,
  toggleStatusOfTodo,
  updateToDoThroughEdit,
}) {
  return (
    <ul>
      {todos.filter(whichToDoToRender).map((todo) => {
        return (
          <ToDoItem
            key={todo.id}
            todo={todo}
            deleteToDo={deleteToDo}
            toggleStatusOfTodo={toggleStatusOfTodo}
            updateToDoThroughEdit={updateToDoThroughEdit}
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
