import {useState, useEffect} from "react";
import { useGlobalState } from "../context/GlobalState";

function MemMap() {

    const {memMapBuild} = useGlobalState()
    
    // useEffect(() => {
    //     console.log("memMapBuild value:", memMapBuild);
    // }, [memMapBuild]);

    const renderComponent = () => {

        const [partitions, setPartitions] = useState([]);

        const DIVSIZE = {
            "SMALL":"max-h-4 h-4",
            "NORMAL":"max-h-6 h-6",
            "BIG":"max-h-8 h-8",
            "GIANT":"max-h-10 h-10",
        }


        function divSize(size){
            if(size<=3932160)
                return DIVSIZE.SMALL
            if(size>3932160 && size<=(3932160*2))
                return DIVSIZE.NORMAL
                if(size>(3932160*2) && size<=(3932160*3))
                return DIVSIZE.BIG
                if(size>(3932160*3) && size<=(3932160*4))
                return DIVSIZE.GIANT
        }

        const partitionsTable = partitions?.map((partition)=>{
            return(
                <div>
                    
                </div>
            )
        })

        switch (memMapBuild) {
            case "Fixed":
            
                return(
                    <div className="max-w-full w-full flex flex-col h-full max-h-full items-center justify-between">
                        
                        <div id="Memory" className="mt-4 w-full max-w-[90%] h-[40rem] max-h-[40rem] outline outline-white">
                            
                        </div>

                        <div id="MemoryState" className="mb-4 flex flex-row w-full max-w-[90%] justify-start items-center outline outline-white text-white">
                            <div className="flex flex-row h-full justify-center items-center border-r border-white">
                                <p className="text-center p-2">Estado de la memoria</p>
                            </div>
                            <div className="flex flex-col h-full justify-start items-start grow">
                                <div className="flex flex-row border-b border-white w-full">
                                    <span className="p-2 w-24">Ocuppied:</span><p className="p-2">{1}</p>
                                </div>
                                <div className="flex flex-row ">
                                    <span className="p-2 w-24">Free:</span><p className="p-2">{1}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                )
            case "Variable":
            
                return(
                    <div className="">
                        
                        <div className="">

                        </div>
                    </div>

                )
            case "Dinamic":
            
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