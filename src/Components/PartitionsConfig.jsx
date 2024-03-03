import TablePartition from "./TablePartition";

function PartitionConfig({memType}){
    
    const renderComponent = () => {
        switch (memType) {
          case 'Fixed_Memory':
            return(
              <div className="flex flex-col justify-between items-center overflow-x-hidden overflow-y-auto max-h-full h-auto">
                <div className="py-2 flex flex-row gap-2 justify-center items-center w-full flex-wrap">
                    <label htmlFor="size_partitions" className="text-lg">Partitions Size (kiB)</label><input type="text" placeholder="1-15360" inputmode="numeric" pattern="[0-9]*" className="max-w-full rounded text-black text-center"/>
                </div>
                <div className="py-2 flex flex-row gap-2 justify-center items-center w-full flex-wrap">
                  <input type="button" value="Save" className='max-w-22 w-24 border-2 border-white p-2 rounded-md hover:bg-emerald-800 hover:scale-105'/>
                </div>
                
              </div>
            )
          case 'Variable_Memory':
            return(
              <div className="flex flex-col justify-between items-center overflow-x-hidden overflow-y-auto h-auto">
                <div className="py-2 h-5/6 flex flex-row gap-2 justify-around max-w-[90%] w-full overflow-auto">
                  <div className="py-2 flex flex-col items-center justify-center">
                    <label htmlFor="number_partitions" className="text-lg text-center">Number<br/>Partitions</label><input type="text" placeholder="1-45" inputmode="numeric" pattern="[0-9]*" className="max-w-16 rounded text-black text-center"/>
                  </div>
                  <div className="py-2 flex flex-col items-center justify-center">
                    <label htmlFor="size_partitions" className="text-lg text-center">Partitions<br/>Size (kiB)</label><input type="text" placeholder="1-15360" inputmode="numeric" pattern="[0-9]*" className="max-w-20 rounded text-black text-center"/>
                  </div>
                  <div className="py-2 flex flex-col items-center justify-center">
                    <input type="button" value="Add" className='max-w-22 w-24 border-2 border-white p-2 rounded-md hover:bg-emerald-800 hover:scale-105'/>
                  </div>
                </div>

                <div className="my-2 max-w-[90%] h-full max-h-[83.333333%] w-[90%] rounded outline outline-2 outline-white overflow-auto scroll-smooth snap-y"> {/*tabla de particiones a añadir*/}
                  <table className="w-full max-w-full border-collapse">
                    <thead>
                      <tr>
                          <th className="max-w-[15%] w-full border border-white text-center font-semibold text-white bg-teal-950 sticky top-0 z-10">#</th>
                          <th className="max-w-[60%] w-full border border-white text-center font-semibold text-white bg-teal-950 sticky top-0 z-10">Size</th>
                          <th className="max-w-[25%] w-full border border-white text-center font-semibold text-white bg-teal-950 sticky top-0 z-10">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <TablePartition number="1" size="2097152"/>
                    </tbody>
                  </table>
                </div>

                <div className="py-2 flex flex-row justify-center items-center w-full">
                  <select name="tipo-mem" className='max-w-72 w-full rounded text-emerald-950 text-center h-8'  id="select-tipo-mem">
                    <option value="" disabled selected hidden>Select the allocation algorithm</option>
                    <option value="first">First Fit</option>
                    <option value="best">Best Fit</option>
                    <option value="worst">Worst Fit</option>
                  </select>
                </div>

                <div className="py-2 flex flex-row gap-2 justify-center items-center w-full flex-wrap">
                  <input type="button" value="Save" className='max-w-22 w-24 border-2 border-white p-2 rounded-md hover:bg-emerald-800 hover:scale-105'/>
                </div>
              </div>
            )
          case 'Dinamic_Memory_without_Compaction':
            return(
              <div className="flex flex-col justify-between items-center overflow-x-hidden overflow-y-auto max-h-full h-auto">
                <div className="py-2 flex flex-row gap-2 justify-center items-center w-full">
                  <select name="tipo-mem" className='max-w-72 w-full rounded text-emerald-950 text-center h-8'  id="select-tipo-mem">
                    <option value="" disabled selected hidden>Select the allocation algorithm</option>
                    <option value="first">First Fit</option>
                    <option value="best">Best Fit</option>
                    <option value="worst">Worst Fit</option>
                  </select>
                </div>
                <div className="py-2 flex flex-row gap-2 justify-center items-center w-full flex-wrap">
                  <input type="button" value="Save" className='max-w-22 w-24 border-2 border-white p-2 rounded-md hover:bg-emerald-800 hover:scale-105'/>
                </div>
              </div>
            )
          case 'Dinamic_Memory_with_Compaction':
            return(
              <div className="flex flex-col justify-center items-center overflow-x-hidden overflow-y-auto max-h-[13.5rem] h-auto">
                <div className="py-2 flex flex-row gap-2 justify-center items-center w-full flex-wrap">
                  <input type="button" value="Compact" className='max-w-22 w-24 border-2 border-white p-2 rounded-md hover:bg-emerald-800 hover:scale-105'/>
                </div>
              </div>
            )
          default:
            return(
                <div className="flex flex-col items-center gap-2 w-full text-center justify-center min-h-52">
                    <p className="font-medium text-3xl">Choose a memory type to configure the parameters</p>
                </div>
                
            )
        }
    };

    return (
        <div>
          {renderComponent()}
        </div>
    );

}

export default PartitionConfig;