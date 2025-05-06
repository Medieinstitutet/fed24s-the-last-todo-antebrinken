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
        <li style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
            {todo.text}
            <button onClick={() => onToggle(todo.id)}>Klar</button>
            <button onClick={() => onDelete(todo.id)}>Ta bort</button>
            </li>
    );
}