import { useState } from 'react';
import './App.css';
import TodoItem from './components/TodoItem';
import TodoForm from './components/TodoForm';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (text: string) => {
    const newItem: Todo = {
      id: Date.now(),
      text,
      completed: false
    };

    setTodos([...todos, newItem]);
  };

  const toggleTodo = (id: number) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="app">
      <h1>Philips To-Do Lista</h1>
      <div>
        <TodoForm onAdd={addTodo} />
        <ul>
          {todos.map(todo => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onToggle={toggleTodo}
              onDelete={deleteTodo}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
