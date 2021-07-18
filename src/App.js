import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import Header from "./components/Header";
import ToDoList from "./components/ToDoList";
import StatusFilter from "./components/StatusFilter";

function App() {
  const [listOfToDos, setListOfToDos] = useState([]);
  const [filter, setFilter] = useState("All");

  function addNewTodo(newTodo) {
    const copyOfListOfTodos = [...listOfToDos];

    const newToDoObject = {
      id: uuidv4(),
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

  function updateToDoThroughEdit(newTodoText, id) {
    const searchedToDo = listOfToDos.find((todo) => todo.id === id);
    searchedToDo.todo = newTodoText;

    const indexOfSearchedToDo = listOfToDos.findIndex((todo) => todo.id === id);

    setListOfToDos([
      ...listOfToDos.slice(0, indexOfSearchedToDo),
      searchedToDo,
      ...listOfToDos.slice(indexOfSearchedToDo + 1),
    ]);
  }

  function setFilterTo(newFilter) {
    setFilter(newFilter);
  }
  return (
    <div className="App">
      <Header addNewTodo={addNewTodo} />
      <main>
        <ToDoList
          todos={listOfToDos}
          filter={filter}
          deleteToDo={deleteToDo}
          toggleStatusOfTodo={toggleStatusOfTodo}
          updateToDoThroughEdit={updateToDoThroughEdit}
        />
        <StatusFilter setFilterTo={setFilterTo} filter={filter} />
      </main>
    </div>
  );
}

export default App;
