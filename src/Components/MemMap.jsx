import {useState} from "react";
function MemMap() {
    
    const renderComponent = () => {

        const [partitions, setPartitions] = useState([]);
        const partitionsTable = partitions?.map((partition)=>{
            return(
                <div>

                </div>
            )
        })

        switch (undefined) {
            case "Ready":
            
                return(
                    <div className="">
                        
                        <div className="">

                        </div>
                    </div>

                )
        
            default:
                return(
                    <div className="flex flex-col items-center gap-2 w-full text-center text-white justify-center">
                        <p className="font-medium text-3xl">Choose a Memory type and save the parameters</p>
                    </div>
                )
                
        }
    }

    return(
        <div className='h-full w-2/4 flex flex-col items-center justify-center outline outline-2 outline-white overflow-auto' id='mem-map'>
              {renderComponent()}
        </div>
    )
}

export default MemMap;