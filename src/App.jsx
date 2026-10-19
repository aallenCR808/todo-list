import { useState } from "react";
import "./App.css";
import TodoList from "./TodoList.jsx";
import TodoForm from "./TodoForm.jsx";

const todos = [
  { id: 1, title: "Read" },
  { id: 2, title: "Work" },
  { id: 3, title: "Sleep" },
];

export default function App() {
  const [todoList, setTodoList] = useState(todos);
  return (
    <div>
      <h1>My To-do List</h1>
      <TodoForm />
      <TodoList todoList={todoList} />
    </div>
  );
}
