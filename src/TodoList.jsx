export default function TodoList() {
  const todoList = [
    { id: 1, title: "Read" },
    { id: 2, title: "Work" },
    { id: 3, title: "Sleep" },
  ];
  return (
    <ul>
      {todoList.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  );
}
