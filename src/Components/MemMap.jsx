import {useState, useEffect} from "react";
import { useGlobalState } from "../context/GlobalState";

function MemMap() {

    const {memMapBuild} = useGlobalState()

    const [partitions, setPartitions] = useState([]);
    
    const DIVSIZE = {
        "SMALL":"max-h-20",
        "NORMAL":"max-h-24",
        "BIG":"max-h-28",
        "GIANT":"max-h-32",
    }

    
    useEffect(() => {
        let partts = JSON.parse(sessionStorage.getItem("partitions"));
        setPartitions(partts?.partitions);        
        console.log("aaaaa")
    }, [sessionStorage.getItem("partitions")]);//Aca falta escuchar otro elemento que lo actualice al cambiar los valores del size y al poner programas en el array

    const memoryCanvas = () =>{
        return(
            <>
            <div id="Memory" className="mt-4 w-full max-w-[90%] h-[40rem] max-h-[40rem] flex flex-col outline outline-white py-4 overflow-auto">
                {partitionsTable}
            </div>

            <div id="MemoryState" className="mb-4 flex flex-row w-full max-w-[90%] justify-start items-center outline outline-white text-white">
                <div className="flex flex-row h-full justify-center items-center border-r border-white">
                    <p className="text-center p-2">Estado de la memoria</p>
                </div>
                <div className="flex flex-col h-full justify-start items-start grow">
                    <div className="flex flex-row border-b border-white w-full">
                        <span className="p-2 w-24">Ocuppied:</span><p className="p-2">{ }</p>
                    </div>
                    <div className="flex flex-row ">
                        <span className="p-2 w-24">Free:</span><p className="p-2">{ }</p>
                    </div>
                </div>
            </div>
            </>
        )
    }

    const partitionsTable = partitions?.map((partition, i)=>{
        return(
            <div key={i} className={`${divSize(partition.size)} flex flex-row w-full w-max-full h-full justify-center items-center text-white`}>
                <div className="w-full max-w-[10%] h-full flex flex-col justify-end items-end text-center">
                    {
                        (parseInt(partition.initial_position) == 0) &&<div className='text-xs pr-1'> {partition.initial_position} </div>
                    }
                    
                    <div className="text-xs pr-1 ">{partition.final_position} </div>
                </div>
                <div className="w-full max-w-[50%] h-full border border-white flex flex-row justify-center items-center text-center">{partition.pid || "    "} </div>
            </div>
        )
    })


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

    const renderComponent = () => {

        switch (memMapBuild) {
            case "Fixed":
            
                return(
                    <div className="max-w-full w-full flex flex-col h-full max-h-full items-center justify-between">
                        {memoryCanvas()}
                    </div>
                )
            case "Variable":
            
                return(
                    <div className="max-w-full w-full flex flex-col h-full max-h-full items-center justify-between">
                        {memoryCanvas()}
                        <p>Variable</p>
                    </div>

                )
            case "Dinamic":
            
                return(
                    <div className="max-w-full w-full flex flex-col h-full max-h-full items-center justify-between">
                        {memoryCanvas()}
                        <p>Dinamic</p>
                    </div>

                )
        
            case "Default":
                return(
                    <div className="flex flex-col items-center gap-2 w-full text-center text-white justify-center">
                        <p className="font-medium text-3xl">Choose a Memory type and save the parameters</p>
                    </div>
                )
                
        }
    }

    return(
        <div className='h-full w-2/4 flex flex-col items-center justify-center outline outline-2 outline-white border-l-2 border-white overflow-auto' id='mem-map'>
              {renderComponent()}
        </div>
    )
}

export default MemMap;