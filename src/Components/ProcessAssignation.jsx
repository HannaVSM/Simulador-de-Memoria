import Program from "./Program"
function ProcessAssignation(){
    return(
        <div className='h-full w-1/4 flex flex-col outline outline-2 outline-white' id='programs'>
            <div id="program-list" className='flex flex-col place-items-center align-top outline outline-white h-[90%] p-4'>
                <Program name="NotePad"/>  
                <Program name="Word"/>  
                <Program name="LOL"/>   
            </div>
            <div id="program-buttons" className="flex flex-row justify-center outline outline-white h-[10%] text-white">
                <input type="button" value="Install" className='mx-8'/>
                <input type="button" value="Delete" className='mx-8'/>
            </div>
        </div>
    )
}

export default ProcessAssignation;