import NewTask from "./NewTask"

const Task = () => {
    return (
        <div>
            <h2>Lista de Tarefas</h2>
            <NewTask description="Estudar React no fim de semana"></NewTask>
            <NewTask description="Fazer Chocolate"></NewTask>
        </div>
    )
};

export default Task;