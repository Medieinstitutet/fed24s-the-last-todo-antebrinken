import { useState } from 'react';
import './App.css'; 
import TodoItem from './components/TodoItem';
import TodoForm from './components/TodoForm';
import "tailwindcss";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [sortOrder, setSortOrder] = useState<'completed' | 'incomplete' | 'all'>('all'); 

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

  const sortedTodos = () => {
    switch (sortOrder) {
      case 'completed':
        return todos.filter(todo => todo.completed);
      case 'incomplete':
        return todos.filter(todo => !todo.completed);
      default:
        return todos;
    }
  };

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOrder(event.target.value as 'completed' | 'incomplete' | 'all');
  };

  return (
    <div className="app min-h-screen bg-cover bg-center bg-fixed bg-gradient-to-r from-green-400 via-blue-500 to-purple-600">
      
      <div className="flex flex-col sm:flex-row justify-between items-center px-6 py-4 bg-gray-100 shadow-md mb-6">
        
        <h1 className="text-4xl font-bold text-center sm:text-left sm:w-auto w-full">
          Philips Todo Lista
        </h1>
        
        
        <div className="mt-4 sm:mt-0 sm:ml-auto flex items-center gap-2">
          <label htmlFor="sortTodos" className="font-medium text-gray-700">Sortera efter:</label>
          <select
            id="sortTodos"
            value={sortOrder}
            onChange={handleSortChange}
            className="border border-gray-300 rounded px-3 py-1"
          >
            <option value="all">Alla</option>
            <option value="completed">Klara</option>
            <option value="incomplete">Inte klara</option>
          </select>
        </div>
      </div>

      
      <TodoForm onAdd={addTodo} />

      
      <ul className='space-y-4'>
        {sortedTodos().map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={toggleTodo}
            onDelete={deleteTodo}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
