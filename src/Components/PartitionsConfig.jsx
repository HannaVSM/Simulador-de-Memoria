function PartitionConfig({memType}){
    
    const renderComponent = () => {
        switch (memType) {
          case 'Fixed_Memory':
            return(
                <div className="flex flex-row gap-2 justify-center items-center w-full flex-wrap">
                    <label htmlFor="size_partitions" className="">Partitions Size (kB)</label><input type="text" placeholder="1-15000" inputmode="numeric" pattern="[0-9]*" className="max-w-full text-black text-center"/>
                </div>
            )
          case 'Variable_Memory':
            return(
            <div className="flex flex-row gap-2 justify-center items-center w-full">
                <p className="text-white">variable</p>
            <select name="tipo-mem" className='max-w-72 w-full rounded text-emerald-950 text-center h-8'  id="select-tipo-mem">
                <option value="" disabled selected hidden>Seleccione un algoritmo</option>
                <option value="first">First Fit</option>
                <option value="best">Best Fit</option>
                <option value="worst">Worst Fit</option>
            </select>
            </div>
            )
          case 'Dinamic_Memory_without_Compaction':
            return(
            <div className="flex flex-row gap-2 justify-center items-center w-full">
                <p className="text-white">dinamico sin compact</p>
                <select name="tipo-mem" className='max-w-72 w-full rounded text-emerald-950 text-center h-8'  id="select-tipo-mem">
                    <option value="" disabled selected hidden>Seleccione un algoritmo</option>
                    <option value="first">First Fit</option>
                    <option value="best">Best Fit</option>
                    <option value="worst">Worst Fit</option>
                </select>
            </div>
            )
          case 'Dinamic_Memory_with_Compaction':
            return(
            <div className="flex flex-row gap-2 justify-center items-center w-full">
                <p className="text-white">dinamico con compact</p>
            </div>
            )
          default:
            return(<>
                <div className="flex flex-row gap-2 justify-center items-center w-full">
                    
                </div>
            </>
                
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