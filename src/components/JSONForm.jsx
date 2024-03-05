import { useState } from "react";
import { useGlobalState } from "../context/GlobalState";

function JSONForm() {
    const { addTask } = useGlobalState();
    
    const initialJSON = 
    `{\n  "PID": "",\n  "task": "",\n  "bytes": "",\n  "text":"",\n  "data": "",\n  "bss": "",\n  "heap": "",\n  "stack": ""\n}`;          
    
    const [textArea, setTextArea] = useState(initialJSON);

    const onSubmit = () => {
        const formJSON = JSON.parse(textArea);

        addTask({
            PID: formJSON.PID,
            task: formJSON.task,
            bytes: formJSON.bytes
        });

        setTextArea(initialJSON);
    };

    return (
        <div>
            <h1>Asignación por JSON</h1>

            <div>
                <textarea
                    value={textArea}
                    onChange={(e) => setTextArea(e.target.value)}
                    rows={10}
                />
            </div>

            <button onClick={onSubmit}>
                Asignar
            </button>
        </div>
    )
}

export default JSONForm;