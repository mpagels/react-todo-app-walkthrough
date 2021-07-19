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
      <main>
        <section>
          <button>X</button>
          <p>This is a ToDo</p>
          <button>Pending</button>
        </section>
        <section>
          <button>X</button>
          <p>This is a another ToDo</p>
          <button>Done</button>
        </section>
      </main>
    </div>
  );
}

export default App;
