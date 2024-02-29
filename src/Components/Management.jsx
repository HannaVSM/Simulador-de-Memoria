import { useState } from "react";
import PartitionConfig from "./PartitionsConfig";

function Management(){

    const [memType, setMemType] = useState("");


    return(
        <div className='h-full w-1/4 flex flex-col place-items-center align-top outline outline-2 outline-white gap-4' id='parameters'>
            <select name="tipo-mem" className='w-72 rounded text-emerald-950 text-center h-8 mt-4'  id="select-mem-type">
                <option value="" disabled selected hidden>Select the memory type</option>
                <option value="Fixed_Memory" onClick={()=> setMemType("Fixed_Memory")}>Fixed Memory</option>
                <option value="Variable_Memory" onClick={()=> setMemType("Variable_Memory")}>Variable Memory</option>
                <option value="Dinamic_Memory_without_Compaction" onClick={()=> setMemType("Dinamic_Memory_without_Compaction")}>Dinamic Memory without Compaction</option>
                <option value="Dinamic_Memory_with_Compaction" onClick={()=>    setMemType("Dinamic_Memory_with_Compaction")}>Dinamic Memory with Compaction</option>
            </select>
            <PartitionConfig MemType= {memType}/>
            <select name="tipo-mem" className='w-72 rounded text-emerald-950 text-center h-8'  id="select-tipo-mem">
                <option value="" disabled selected hidden>Seleccione un algoritmo</option>
                <option value="first">First Fit</option>
                <option value="best">Best Fit</option>
                <option value="worst">Worst Fit</option>
            </select>
        </div>
    )
}

export default Management;