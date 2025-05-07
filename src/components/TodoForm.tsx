import { useState } from "react";
import "tailwindcss";

interface Props {
  onAdd: (text: string) => void;
}

export default function TodoForm({ onAdd }: Props) {
  const [input, setInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() === '') return;
    onAdd(input);
    setInput('');
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row gap-4 items-center p-4 bg-white shadow-md rounded-md max-w-md mx-auto"
    >
      <input
        type="text"
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder="What Todo?"
        className="border border-black rounded px-3 py-2 w-full sm:w-auto flex-1"
      />
      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
      >
        Lägg till Todo
      </button>
    </form>
  );
}