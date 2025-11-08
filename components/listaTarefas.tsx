import Tarefa from './tarefa';
import TarefaType from '@/types/tarefa'


type ListaTarefasProps = {
  tarefas: TarefaType[];
  marcarConcluida: (id: number) => void;
  removerTarefa: (id: number) => void;
};


export default function ListaTarefas({ tarefas, marcarConcluida, removerTarefa }: ListaTarefasProps) {
    return (
        <ul>
            {tarefas.map((tarefa) => (
                <Tarefa
                    key={tarefa.id}
                    tarefa={tarefa}
                    marcarConcluida={marcarConcluida}
                    removerTarefa={removerTarefa}
                />
            ))}
        </ul>
    );
}
