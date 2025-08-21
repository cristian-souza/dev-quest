import NewTask from "./NewTask"

const Task = () => {
    return (
        <div>
            <h2>Lista de Tarefas</h2>
            <NewTask description="Estudar React"></NewTask>
            <NewTask></NewTask>
        </div>
    )
};

export default Task;