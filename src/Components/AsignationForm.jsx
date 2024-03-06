import { useState } from "react";
import { useGlobalState } from "../context/GlobalState";

function AsignationForm() {
    const { addTask } = useGlobalState();
    
    const [task, setTask] = useState();
    const [size, setSize] = useState();
    const [counter, setCounter] = useState(1);
    
    const onSubmit = (e) => {
        e.preventDefault();
        
        addTask({
            PID: "P" + counter,
            task,
            size: +size
        });

        setCounter(counter + 1);

        setTask("");
        setSize("");
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
                    <input type="number" onChange={(e) => setSize(e.target.value)} value={size*1024}/>
                    <span> KiB</span>
                </div>
                
                <button>
                    Assign
                </button>
            </form>
        </div>
    )
}

export default AsignationForm;