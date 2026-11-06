import { useState } from "react";
import "./App.css";
import TodoList from "./TodoList.jsx";
import TodoForm from "./TodoForm.jsx";

export default function App() {
  const [todoList, setTodoList] = useState([]);

  function addTodo(todoTitle) {
    const newTodo = { id: Date.now(), title: todoTitle };
    setTodoList((previous) => [newTodo, ...previous]);
  }

  return (
    <div>
      <h1>My To-do List</h1>
      <TodoForm onAddTodo={addTodo} />
      <TodoList todoList={todoList} />
    </div>
  );
}
