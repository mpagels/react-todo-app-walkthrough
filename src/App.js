import "./App.css";

function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
