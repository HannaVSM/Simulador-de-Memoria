import { useState } from "react";
import { useGlobalState } from "../context/GlobalState";

function AsignationForm() {
    const { addTask } = useGlobalState();
    
    const [task, setTask] = useState();
    const [bytes, setBytes] = useState(0);
    
    const onSubmit = (e) => {
        e.preventDefault();
        addTask({
            id: 1,
            task,
            bytes
        });
        console.log(task, bytes);
    }

    return (
        <div>
            <h1>Asignación de Tareas</h1>

            <form onSubmit={onSubmit}>
                <div>
                    <label>Tarea: </label>
                    <input type="text" onChange={(e) => setTask(e.target.value)}/>
                </div>
                
                <div>
                    <label>Tamaño: </label>
                    <input type="number" onChange={(e) => setBytes(e.target.value)} />
                    <span> bytes</span>
                </div>
                
                <button>
                    Asignar
                </button>
            </form>
        </div>
    )
}

export default AsignationForm