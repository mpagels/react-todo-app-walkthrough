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
        <section className="ToDo">
          <button className="ToDo__btn delete">X</button>
          <p>This is a ToDo</p>
          <button className="ToDo__btn pending">Pending</button>
        </section>
        <section className="ToDo">
          <button className="ToDo__btn delete">X</button>
          <p>This is a another ToDo</p>
          <button className="ToDo__btn done">Done</button>
        </section>
      </main>
    </div>
  );
}

export default App;
