import "./App.css";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
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
