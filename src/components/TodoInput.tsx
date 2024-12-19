


import { useState } from "react";

interface TodoInputProps {
  addTodo: (text: string) => void;
}

const TodoInput: React.FC<TodoInputProps> = ({ addTodo }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); 
    if (input.trim()) {
      addTodo(input);
      setInput("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex mb-4">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="flex-1 px-3 py-2 border rounded-md"
        placeholder="Add your task"
      />
      <button type="submit" className="bg-orange-500 text-black px-4 py-2 rounded-md">
        ADD+
      </button>
    </form>
  );
};

export default TodoInput;
