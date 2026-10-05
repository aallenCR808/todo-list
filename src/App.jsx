import "./App.css";

function App() {
  let todoList = [
    { id: 1, title: "Read" },
    { id: 2, title: "Work" },
    { id: 3, title: "Sleep" },
  ];

  return (
    <div>
      <h1> My To-do List</h1>
      <ul>
        {todoList.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
