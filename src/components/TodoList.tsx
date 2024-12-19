
interface Todo {
  id: number;
  text: string;
}

interface ToDoListProps {
  todos: Todo[];
  deleteTodo: (id: number) => void;
}

const ToDoList: React.FC<ToDoListProps> = ({ todos, deleteTodo }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <li
          key={todo.id}
          className="flex items-center justify-between p-2 border-b"
        >
          <span className="text-gray-700">{todo.text}</span>
          <button
            onClick={() => deleteTodo(todo.id)}
            className="text-red-500"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ToDoList;
