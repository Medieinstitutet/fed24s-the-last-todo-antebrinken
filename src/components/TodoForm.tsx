import { useState } from "react";

interface Props {
    onAdd: (text: string) => void;
}

export default function TodoForm({ onAdd }: Props) {
    const [input, setInput] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (input.trim() ==='') return;
        onAdd(input);
        setInput('');
    };

    return (
        <form onSubmit={handleSubmit}>
        <input 
         type="text"
         value={input}
         onChange={e => setInput(e.target.value)}
         placeholder="What Todo?"
         />
         <button type="submit">Lägg till Todo</button>
         </form>
    );
}