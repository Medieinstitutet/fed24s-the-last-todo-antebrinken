import styles from './TodoItem.module.css'

interface Todo {
    id: number;
    text:string;
    completed: boolean;

}

interface Props {
    todo: Todo;
    onToggle: (id: number) => void;
    onDelete: (id:number) => void;
}

export default function TodoItem ({ todo, onToggle, onDelete }: Props) {
    return (
        <li className={`flex justify-between items-center p-2 border-b ${todo.completed ? 'line-through text-gray-400' : ''}`}>
        <span>{todo.text}</span>
        <div className="flex gap-2">
          <button
            onClick={() => onToggle(todo.id)}
            className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded"
          >
            Klar
          </button>
          <button
            onClick={() => onDelete(todo.id)}
            className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
          >
            Ta bort
          </button>
        </div>
      </li>
    );
}