
import { useState } from "react";
import TodoInput from "./components/TodoInput"; 
import ToDoList from "./components/TodoList";

interface Todo {
  id: number;
  text: string;
}

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (text: string) => { 
    const newTodo: Todo = {
      id: Date.now(),
      text,
    };
    setTodos((prev) => [...prev, newTodo]);
  };

  const deleteTodo = (id: number) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <div className="flex items-center justify-center bg-gray-900 min-h-screen">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">📋 To-Do List</h1>
        <TodoInput addTodo={addTodo} />
        <ToDoList todos={todos} deleteTodo={deleteTodo} />
      </div>
    </div>
  );
}

export default App;
