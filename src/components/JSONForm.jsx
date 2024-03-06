import { useState } from "react";
import { useGlobalState } from "../context/GlobalState";

function JSONForm() {
    const { addTask } = useGlobalState();
    
    const initialJSON = 
    `{\n  "PID": "",\n  "task": "",\n  "text":"",\n  "data": "",\n  "bss": "",\n}`;          
    
    const [textArea, setTextArea] = useState(initialJSON);

    const onSubmit = () => {
        const formJSON = JSON.parse(textArea);

        addTask({
            PID: formJSON.PID,
            task: formJSON.task,
            bytes: + formJSON.bytes + formJSON.text + formJSON.bss + formJSON.data + 65536 + 131072
        });

        setTextArea(initialJSON);
    };

    return (
        <>
            <h1 className="mb-4 ml-2">JSON ASIGNATION</h1>

            <div className="ml-4 mr-4">
                <textarea
                    value={textArea}
                    onChange={(e) => setTextArea(e.target.value)}
                    rows={7}
                    className="bg-white text-black w-full"
                />
            </div>

            <div className="flex justify-center">
                <button 
                    onClick={onSubmit}
                    className="mt-2 mb-4"
                >
                    Assign
                </button>
            </div>
        </>
    )
}

export default JSONForm;