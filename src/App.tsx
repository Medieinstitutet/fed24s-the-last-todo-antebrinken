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
    <div className="app">
      <h1>Philips To-Do Lista</h1>
      <TodoForm onAdd={addTodo} />
      
      
      <div>
        <label htmlFor="sortTodos">Sortera efter: </label>
        <select id="sortTodos" value={sortOrder} onChange={handleSortChange}>
          <option value="all">Alla</option>
          <option value="completed">Klara</option>
          <option value="incomplete">Inte klara</option>
        </select>
      </div>
      
      <ul>
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
