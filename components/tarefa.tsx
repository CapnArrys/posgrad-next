import TarefaType from "@/types/tarefa";


type TarefaProps = {
  tarefa: TarefaType;
  marcarConcluida: (id: number) => void;
  removerTarefa: (id: number) => void;
};


export default function Tarefa({ tarefa, marcarConcluida, removerTarefa }: TarefaProps) {
    return (
        <li>
            <input
                type="checkbox"
                checked={tarefa.concluida}
                onChange={() => marcarConcluida(tarefa.id)}
            />
            <span style={{ textDecoration: tarefa.concluida ? 'line-through' : 'none' }}>
                {tarefa.titulo}
            </span>
            <button onClick={() => removerTarefa(tarefa.id)}>Remover</button>
        </li>
    );
}
