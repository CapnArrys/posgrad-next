'use client'
import { useState } from 'react';
import FormularioTarefa from '@/components/formularioTarefa';
import ListaTarefas from '@/components/listaTarefas';
import Tarefa from '@/types/tarefa';




export default function Tarefas() {
    const [tarefas, setTarefas] = useState<Tarefa[]>([]);
   
    const adicionarTarefa = (titulo: string) => {
        const novaTarefa = {
            id: Date.now(),
            titulo: titulo,
            concluida: false
        };
        setTarefas([...tarefas, novaTarefa]);
    };




    const marcarConcluida = (id: number) => {
        setTarefas(
            tarefas.map((tarefa) =>
                tarefa.id === id ? { ...tarefa, concluida: !tarefa.concluida } : tarefa
            )
        );
    };




    const removerTarefa = (id: number) => {
        setTarefas(tarefas.filter((tarefa) => tarefa.id !== id));
    };




    const tarefasPendentes = tarefas.filter((tarefa) => !tarefa.concluida).length;
    const tarefasConcluidas = tarefas.filter((tarefa) => tarefa.concluida).length;




    return (
        <div>
            <h1>Lista de Tarefas</h1>
            <FormularioTarefa adicionarTarefa={adicionarTarefa} />
            <ListaTarefas tarefas={tarefas} marcarConcluida={marcarConcluida} removerTarefa={removerTarefa} />
            <p>Tarefas Pendentes: {tarefasPendentes}</p>
            <p>Tarefas Concluídas: {tarefasConcluidas}</p>
        </div>
    );
}
