import React from 'react'
import { useGlobalState } from "../context/GlobalState";

function ProgramsDefault() {
    const { addTask } = useGlobalState();
    
    const handleClick = (item) => {
        switch (item) {
            case "Brave":
                addTask({
                    PID: "P99",
                    task: "Brave",
                    size: 436201
                });
            break;
            
            case "WSL":
                addTask({
                    PID: "P98",
                    task: "WSL",
                    size: 286708
                });
            break;

            case "Valorant":
                addTask({
                    PID: "P97",
                    task: "Valorant",
                    size: 2696608
                });
            break;

            case "Netbeans":
                addTask({
                    PID: "P96",
                    task: "Netbeans",
                    size: 3996608
                });
            break;

            case "Inkscape":
                addTask({
                    PID: "P95",
                    task: "Inkscape",
                    size: 1785608
                });
            break;

            default:
                break;
        }
    };

    const programsDefault = ["Brave", "WSL", "Valorant", "Netbeans", "Inkscape"];

    return (
        <div className="mb-4 mx-2">
            <h1>Default Task</h1>
            <div className='m-2 mr-4 border border-white'>
                <ul className='w-full max-w-full'>
                    {programsDefault.map((item, index) => (
                        <div key={index} className='bg-white m-2 flex justify-center'>
                            <li onClick={() => handleClick(item)} style={{ cursor: 'pointer' }} className='text-black w-full text-center'>
                                {item}
                            </li>
                        </div>
                    ))}
                </ul>
            </div>
        </div>        
    )
}

export default ProgramsDefault