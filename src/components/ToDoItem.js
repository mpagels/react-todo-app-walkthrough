import React, { useState } from "react";
import editSymbol from "../assets/svg/edit.svg";
export default function ToDo({
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
    deleteToDo(todo.todo);
  }

  function handleOnToggleClick() {
    toggleStatusOfTodo(todo.todo);
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
      ) : (
        <div className="ToDo__btn--wrapper">
          <button onClick={handleToggleEditeMode} className="ToDo__btn delete">
            X
          </button>
          <form onSubmit={handleOnSubmit} className="ToDo__Form">
            <input
              className="ToDo__Input"
              onChange={handleOnInputChange}
              value={input}
            />
            <button type="submit" className="ToDo__btn">
              Update
            </button>
          </form>
        </div>
      )}
    </li>
  );
}
