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
                    bytes: 436201
                });
            break;
            
            case "WSL":
                addTask({
                    PID: "P98",
                    task: "WSL",
                    bytes: 286708
                });
            break;

            case "Valorant":
                addTask({
                    PID: "P97",
                    task: "Valorant",
                    bytes: 2696608
                });
            break;

            case "Netbeans":
                addTask({
                    PID: "P96",
                    task: "Netbeans",
                    bytes: 3996608
                });
            break;

            case "Inkscape":
                addTask({
                    PID: "P95",
                    task: "Inkscape",
                    bytes: 1785608
                });
            break;

            default:
                break;
        }
    };

    const programsDefault = ["Brave | 436201 bytes", "WSL | 286708 bytes", "Valorant | 2696608 bytes", "Netbeans | 3996608 bytes", "Inkscape | 1785608 bytes"];

    return (
        <>
            <h1 className="mb-4 ml-2">DEFAULT TASK</h1>

            <div className='m-2 mr-4 border border-white'>
                <ul>
                    {programsDefault.map((item, index) => (
                        <div className='bg-white m-2 flex justify-center'>
                            <li 
                                key={index} 
                                onClick={() => handleClick(item)} 
                                style={{ cursor: 'pointer' }}
                                className='text-black'
                            >
                                {item}
                            </li>
                        </div>
                    ))}
                </ul>
            </div>
        </>        
    )
}

export default ProgramsDefault