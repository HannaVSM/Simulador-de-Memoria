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
            bytes: +bytes
        });

        setCounter(counter + 1);

        setTask("");
        setBytes("");
    }

    return (
        <div>
            <h1>Task Asignation</h1>

            <form onSubmit={onSubmit}>
                <div>
                    <label>Task: </label>
                    <input type="text" onChange={(e) => setTask(e.target.value)} value={task}/>
                </div>
                
                <div>
                    <label>Size: </label>
                    <input type="number" onChange={(e) => setBytes(e.target.value)} value={bytes}/>
                    <span> bytes</span>
                </div>
                
                <button>
                    Assign
                </button>
            </form>
        </div>
    )
}

export default AsignationForm;