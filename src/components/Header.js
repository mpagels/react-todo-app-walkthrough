import React from "react";

export default function Header({ addNewTodo }) {
  function handleSubmit(event) {
    event.preventDefault();

    const form = event.target;
    const inputValue = form.addTodo.value;

    if (inputValue !== "") {
      addNewTodo(inputValue);
      form.reset();
    }
  }

  return (
    <header>
      <h1>Martins ToDo App</h1>
      <form onSubmit={handleSubmit}>
        <input
          id="addTodo"
          name="addTodo"
          type="text"
          placeholder="Buy Milk"
        ></input>
        <button>Add Todo</button>
      </form>
    </header>
  );
}
