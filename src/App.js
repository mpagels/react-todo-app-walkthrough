import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import ToDoList from "./components/ToDoList";

function App() {
  const [listOfToDos, setListOfToDos] = useState([]);

  function addNewTodo(newTodo) {
    const copyOfListOfTodos = [...listOfToDos];

    const newToDoObject = {
      todo: newTodo,
      status: "Pending",
    };

    copyOfListOfTodos.push(newToDoObject);

    setListOfToDos(copyOfListOfTodos);
  }

  function deleteToDo(toDoName) {
    const filteredListOfTodos = listOfToDos.filter(
      (todo) => todo.todo !== toDoName
    );
    setListOfToDos(filteredListOfTodos);
  }

  function toggleStatusOfTodo(toDoName) {
    const searchedToDo = listOfToDos.find((todo) => todo.todo === toDoName);
    searchedToDo.status =
      searchedToDo.status === "Pending" ? "Done" : "Pending";

    const indexOfSearchedToDo = listOfToDos.findIndex(
      (todo) => todo.todo === toDoName
    );

    setListOfToDos([
      ...listOfToDos.slice(0, indexOfSearchedToDo),
      searchedToDo,
      ...listOfToDos.slice(indexOfSearchedToDo + 1),
    ]);
  }

  return (
    <div className="App">
      <Header addNewTodo={addNewTodo} />
      <main>
        <ToDoList
          todos={listOfToDos}
          deleteToDo={deleteToDo}
          toggleStatusOfTodo={toggleStatusOfTodo}
        />
        <ul>
          <li>
            <button>All</button>
          </li>
          <li>
            <button>Pending</button>
          </li>
          <li>
            <button>Done</button>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
