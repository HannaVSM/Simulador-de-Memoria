import { useState } from "react";
import PartitionConfig from "./PartitionsConfig";
import ExecutedProcess from "./ExecutedProcess";

function Management(){

    const [memTypeSelected, setMemTypeSelected] = useState('');

    const handleSelectChange = (event) => {
        setMemTypeSelected(event.target.value);
    };

    return(
        <div id='parameters' className='h-full w-1/4 flex flex-col align-top gap-4 border-4 border-white overflow-auto'>
            <div id="config" className="w-full h-auto flex flex-col items-center justify-around align-top">
                <section id="wrapper-tipo-mem" className="w-full h-auto flex flex-col items-center justify-around align-top p-2 pb-4">
                    <h2 className="max-w-full w-[90%] font-semibold text-white text-xl mb-2">Memory Management</h2>
                    <select name="tipo-mem" value={memTypeSelected} onChange={handleSelectChange} 
                        className='max-w-full w-[90%] rounded text-emerald-950 text-center h-8'  
                        id="select-mem-type">
                        <option value="" disabled defaultValue hidden>Select the memory type</option>
                        <option value="Fixed_Memory">Fixed Memory</option>
                        <option value="Variable_Memory">Variable Memory</option>
                        <option value="Dinamic_Memory_without_Compaction">Dinamic Memory without Compaction</option>
                        <option value="Dinamic_Memory_with_Compaction">Dinamic Memory with Compaction</option>
                    </select>
                </section>
                <section className="w-full h-auto p-2 border-y-4 border-white text-white">
                    <PartitionConfig memType = {memTypeSelected}/>
                </section>
            </div>
            <section id="executed-processes" className="w-full h-full flex flex-col items-center justify-top px-2">
                <h2 className="max-w-full w-[90%] font-semibold text-white text-xl mb-2">Processes In Execution</h2>
                <div className="max-w-[90%] h-5/6 max-h-[90%] w-[90%] rounded outline outline-2 outline-white overflow-auto scroll-smooth snap-y">
                    <table className="w-full max-w-full border-collapse">
                        <thead>
                            <tr>
                                <th className="max-w-[15%] w-[15%] border border-white text-center font-semibold text-white bg-teal-950 sticky top-0 z-10">P. ID</th>
                                <th className="max-w-[30%] w-[30%] border border-white text-center font-semibold text-white bg-teal-950 sticky top-0 z-10">Task</th>
                                <th className="max-w-[30%] w-[30%] border border-white text-center font-semibold text-white bg-teal-950 sticky top-0 z-10">Size</th>
                                <th className="max-w-[25%] w-[25%] border border-white text-center font-semibold text-white bg-teal-950 sticky top-0 z-10">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <ExecutedProcess pid="PC1" name="Bloc de Notas" size="1.048.576"/>
                        </tbody>
                    </table>
                </div>
                <div id="program-buttons" className="w-full max-w-full flex flex-row justify-center p-4 gap-2 lg:gap-16 flex-wrap text-white">
                    {/* <input type="button" value="Unassign" className='max-w-22 w-24 border-2 border-white p-2 rounded-md hover:bg-emerald-800 hover:scale-105'/> */}
                    <input type="button" value="Clear" className='max-w-22 w-24 border-2 border-white p-2 rounded-md hover:bg-emerald-800 hover:scale-105'/>
                </div>
            </section>
                



        </div>
    );
};

export default Management;