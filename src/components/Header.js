import React from "react";

export default function Header() {
  return (
    <header>
      <h1>Martins ToDo App</h1>
      <form>
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
