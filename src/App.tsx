import { useState } from 'react'
import './App.css'


interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

function app() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState('');

  const addTodo = () => {
    if [newTodo, setNewTodo] = useState('');

    const addTodo = () => {
      if (newTodo.trim() === '') return;

      const newItem: Todo = {
        id: Date.now(),
        text: newTodo,
        completed: false
      };
      
      setTodos ([...todos, newItem]);
      setNewTodo('');
  
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
        <h1> Philips To-Do Lista</h1>
        <div>
          <input
            type="text"
            value={newTodo}
            onChange={e => setNewTodo(e.target.value)}
            placeholder="What Todo..."
          />
          <button onClick={addTodo}>Lägg till</button>
        </div>
        <ul>
          {todos.map(todo => (
            <li
            key={todo.id}
            style={{textDecoration: todo.completed ? 'line-through' : 'none' }}
  
            >
            {todo.text}
            <button onClick={() => toggleTodo(todo.id)}>✔</button>
            <button onClick={() => deleteTodo(todo.id)}>🗑</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;