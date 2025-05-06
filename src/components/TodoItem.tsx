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
        <li className={styles.item}>
            <span className={`${styles.text} ${todo.completed ? styles.completed : ''}`}>
            {todo.text}
            </span>
            <div className={styles.buttonGroup}>
            <button onClick={() => onToggle(todo.id)}>Klar</button>
            <button onClick={() => onDelete(todo.id)}>Ta bort</button>
            </div>
            </li>
    );
}