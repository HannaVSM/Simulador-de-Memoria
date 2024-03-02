import { useState } from "react";
import PartitionConfig from "./PartitionsConfig";

function Management(){

    const [memTypeSelected, setMemTypeSelected] = useState('');

    const handleSelectChange = (event) => {
        setMemTypeSelected(event.target.value);
    };

    return(
        <div id='parameters' className='h-full w-1/4 flex flex-col align-top gap-4 border-4 border-white'>
            <div id="config" className="w-full h-auto flex flex-col items-center justify-around align-top">
                <div id="wrapper-tipo-mem" className="w-full h-auto flex flex-col items-center justify-around align-top p-2 pb-4">
                    <h2 className="max-w-full w-[90%] text-white text-xl mb-2">Memory Management</h2>
                    <select name="tipo-mem" value={memTypeSelected} onChange={handleSelectChange} 
                        className='max-w-full w-[90%] rounded text-emerald-950 text-center h-8'  
                        id="select-mem-type">
                        <option value="" disabled selected hidden>Select the memory type</option>
                        <option value="Fixed_Memory">Fixed Memory</option>
                        <option value="Variable_Memory">Variable Memory</option>
                        <option value="Dinamic_Memory_without_Compaction">Dinamic Memory without Compaction</option>
                        <option value="Dinamic_Memory_with_Compaction">Dinamic Memory with Compaction</option>
                    </select>
                </div>
                <div className="w-full h-60 p-2 border-y-4 border-white text-white flex flex-col gap-4 items-center justify-between overflow-x-hidden overflow-y-auto scroll">
                    <PartitionConfig memType = {memTypeSelected}/>
                </div>
            </div>
            <div id="executed-processes" className="w-full h-auto flex flex-col items-center justify-around p-2">
                <h2 className="max-w-full w-[90%] text-white text-xl mb-2">Processes In Execution</h2>
            </div>
                



        </div>
    );
};

export default Management;