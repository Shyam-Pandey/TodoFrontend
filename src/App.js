import Navbar from "./components/navbar"
import Todo from "./components/Todos/Todo"
import Task from "./components/Task/task"
import './App.css';
import Todolist from "./components/Todos/Todolist";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="flex flex-row">
        <div className="flex flex-col bg-white">
          <Todo />
          <Todolist />
        </div>
        <Task />
      </div>
    </div>
  );
}

export default App;
