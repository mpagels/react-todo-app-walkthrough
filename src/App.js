import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import ToDoList from "./components/ToDoList";

const initialTodDos = [
  {
    todo: "Buy milk",
    status: "Pending",
  },
  {
    todo: "Buy butter",
    status: "Done",
  },
];

function App() {
  const [listOfToDos, setListOfToDos] = useState(initialTodDos);

  function addNewTodo(newTodo) {
    const copyOfListOfTodos = [...listOfToDos];

    const newToDoObject = {
      todo: newTodo,
      status: "Pending",
    };

    copyOfListOfTodos.push(newToDoObject);

    setListOfToDos(copyOfListOfTodos);
  }
  return (
    <div className="App">
      <Header addNewTodo={addNewTodo} />
      <main>
        <ToDoList todos={listOfToDos} />
      </main>
    </div>
  );
}

export default App;
