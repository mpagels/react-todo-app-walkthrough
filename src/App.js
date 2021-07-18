import "./App.css";
import Header from "./components/Header";
import ToDoList from "./components/ToDoList";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <ToDoList />
      </main>
    </div>
  );
}

export default App;
