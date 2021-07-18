import React, { useState } from "react";
import EditToDo from "./EditToDo";
import ToDo from "./ToDo";
export default function ToDoItem({
  todo,
  deleteToDo,
  toggleStatusOfTodo,
  updateToDoThroughEdit,
}) {
  const [isEditMode, setIsEditMode] = useState(false);
  const [input, setInput] = useState(todo.todo);

  function handleToggleEditeMode() {
    setIsEditMode((previousState) => !previousState);
    setInput(todo.todo);
  }
  function handleOnDeleteClick() {
    deleteToDo(todo.id);
  }

  function handleOnToggleClick() {
    toggleStatusOfTodo(todo.id);
  }

  function handleOnInputChange(event) {
    setInput(event.target.value);
  }

  function handleOnSubmit(event) {
    event.preventDefault();
    updateToDoThroughEdit(input, todo.id);
    setIsEditMode(false);
  }
  return (
    <li className="ToDo">
      {!isEditMode ? (
        <ToDo
          handleOnDeleteClick={handleOnDeleteClick}
          handleOnToggleClick={handleOnToggleClick}
          handleToggleEditeMode={handleToggleEditeMode}
          todo={todo}
        />
      ) : (
        <EditToDo
          handleToggleEditeMode={handleToggleEditeMode}
          handleOnInputChange={handleOnInputChange}
          handleOnSubmit={handleOnSubmit}
          input={input}
        />
      )}
    </li>
  );
}
