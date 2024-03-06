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
        <>
            <h1 className="mb-2 ml-2">TASK ASIGNATION</h1>

            <form onSubmit={onSubmit}>
                <div>
                    <label className="font-normal mx-1.5 ml-4">Task: </label>
                    <input 
                        type="text" 
                        onChange={(e) => setTask(e.target.value)} 
                        value={task}
                        className="bg-white text-black px-7 py-0 mr-4 my-2"
                    />
                </div>
                
                <div>
                    <label className="font-normal mx-1.5 ml-4">Size: </label>
                    <input 
                        type="number" 
                        onChange={(e) => setBytes(e.target.value)} 
                        value={bytes}
                        className="bg-white text-black px-1 py-0 mr-2 my-2"
                    />
                    <span> bytes</span>
                </div>
                
                <div className="flex justify-center">
                    <button className="mt-2 mb-4">
                        Assign
                    </button>
                </div>
            </form>
        </>
    )
}

export default AsignationForm;