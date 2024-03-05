import { useState } from "react";
import { useGlobalState } from "../context/GlobalState";

function AsignationForm() {
    const { addTask } = useGlobalState();
    
    const [task, setTask] = useState();
    const [bytes, setBytes] = useState();
    const [counter, setCounter] = useState(1);
    
    const onSubmit = (e) => {
        e.preventDefault();
        
        addTask({
            PID: "P" + counter,
            task,
            bytes
        });

        setCounter(counter + 1);

        setTask("");
        setBytes("");
    }

    return (
        <div>
            <h1>Asignación de Tareas</h1>

            <form onSubmit={onSubmit}>
                <div>
                    <label>Tarea: </label>
                    <input type="text" onChange={(e) => setTask(e.target.value)} value={task}/>
                </div>
                
                <div>
                    <label>Tamaño: </label>
                    <input type="number" onChange={(e) => setBytes(e.target.value)} value={bytes}/>
                    <span> bytes</span>
                </div>
                
                <button>
                    Asignar
                </button>
            </form>
        </div>
    )
}

export default AsignationForm;