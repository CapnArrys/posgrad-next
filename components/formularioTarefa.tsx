'use client'
import { useState, FormEvent } from 'react';


type FormularioTarefaProps = {
  adicionarTarefa: (titulo: string) => void;
};


export default function FormularioTarefa({ adicionarTarefa }: FormularioTarefaProps) {
    const [titulo, setTitulo] = useState('');




    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (titulo.trim()) {
            adicionarTarefa(titulo);
            setTitulo('');
        }
    };




    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Nova Tarefa"
                value={titulo}
                onChange={(e) => setTitulo(e.target.value)}
            />
            <button type="submit">Adicionar</button>
        </form>
    );
}
