function PartitionConfig({MemType}){
    if(MemType== "Fixed_Memory"){
        return(<div className="max-w-[90%] outline outline-white">

        </div>
        )
    }
    if(MemType== "Variable_Memory"){
        return(<div>
            
        </div>
        )
    }
    if(MemType== "Dinamic_Memory_without_Compaction"){
        return(<div>
            
        </div>
        )
    }
    if(MemType== "Dinamic_Memory_with_Compaction"){
        return(<div>
            
        </div>
        )
    }
    
    return(
        <div className="max-w-[90%] w-[90%] border-y py-2 border-white text-white flex flex-col gap-4">
            <div className="flex flex-row gap-2">
                <label htmlFor="number_partitions" className="">Numero de particiones</label><input name="number_partitions" type="number" className="w-auto max-w-full"/>
            </div>
        </div>
    )
}

export default PartitionConfig;