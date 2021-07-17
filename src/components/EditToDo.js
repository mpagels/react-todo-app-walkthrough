import React from "react";

export default function EditToDo({
  handleToggleEditeMode,
  handleOnInputChange,
  handleOnSubmit,
  input,
}) {
  return (
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
  );
}
