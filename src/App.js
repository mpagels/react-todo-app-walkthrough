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

  return (
    <div className="App">
      <Header />
      <main>
        <ToDoList todos={listOfToDos} />
      </main>
    </div>
  );
}

export default App;
