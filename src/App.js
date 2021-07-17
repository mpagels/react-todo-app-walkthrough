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
    const newToDoObject = {
      id: uuidv4(),
      todo: newTodo,
      status: "Pending",
    };

    setListOfToDos([...listOfToDos, newToDoObject]);
  }

  function deleteToDo(id) {
    const filteredListOfTodos = listOfToDos.filter((todo) => todo.id !== id);
    setListOfToDos(filteredListOfTodos);
  }

  function toggleStatusOfTodo(id) {
    const searchedToDo = getSearchedTodo(id);
    searchedToDo.status =
      searchedToDo.status === "Pending" ? "Done" : "Pending";

    const indexOfSearchedToDo = getIndexOfTodo(id);
    saveToDoToState(searchedToDo, indexOfSearchedToDo);
  }

  function updateToDoThroughEdit(newTodoText, id) {
    const searchedToDo = getSearchedTodo(id);
    searchedToDo.todo = newTodoText;

    const indexOfSearchedToDo = getIndexOfTodo(id);
    saveToDoToState(searchedToDo, indexOfSearchedToDo);
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
      </main>
    </div>
  );

  // helper function
  function getSearchedTodo(id) {
    return listOfToDos.find((todo) => todo.id === id);
  }

  function getIndexOfTodo(id) {
    return listOfToDos.findIndex((todo) => todo.id === id);
  }

  function saveToDoToState(todo, index) {
    setListOfToDos([
      ...listOfToDos.slice(0, index),
      todo,
      ...listOfToDos.slice(index + 1),
    ]);
  }
}

export default App;
