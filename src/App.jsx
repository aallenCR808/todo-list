import "./App.css";
import TodoList from "./TodoList.jsx";
import TodoForm from "./TodoForm.jsx";

export default function App() {
  return (
    <div>
      <h1>My To-do List</h1>
      <TodoForm />
      <TodoList />
    </div>
  );
}
