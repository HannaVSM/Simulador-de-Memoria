import { useState } from "react";
import { useGlobalState } from "../context/GlobalState";

function JSONForm() {
    const { addTask } = useGlobalState();
    
    const initialJSON = 
    `{\n  "PID": "",\n  "task": "",\n  "text": "",\n  "data": "",\n  "bss": "",\n}`;          
    
    const [textArea, setTextArea] = useState(initialJSON);

    const onSubmit = () => {
        const formJSON = JSON.parse(textArea);

        addTask({
            PID: formJSON.PID,
            task: formJSON.task,
            size: formJSON.text+formJSON.bss+formJSON.data+65536+131072
        });

        setTextArea(initialJSON);
    };

    return (
        <div>
            <h1>JSON Asignation</h1>

            <div>
                <textarea
                    value={textArea}
                    onChange={(e) => setTextArea(e.target.value)}
                    rows={10}
                />
            </div>

            <button onClick={onSubmit}>
                Assign
            </button>
        </div>
    )
}

export default JSONForm;