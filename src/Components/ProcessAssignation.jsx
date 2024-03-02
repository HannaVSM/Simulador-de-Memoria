import Program from "./Program"
function ProcessAssignation(){
    return(
        <div className='h-full w-1/4 flex flex-col border-4 border-white' id='programs'>
            <div id="program-list" className='flex flex-col place-items-center align-top  h-[90%] p-4'>
                <Program name="NotePad"/>
                <Program name="Word"/>
                <Program name="LOL"/>
            </div>
            <div id="program-buttons" className="flex flex-row justify-center h-[10%] text-white">
                <input type="button" value="Install" className='mx-8'/>
                <input type="button" value="Delete" className='mx-8'/>
            </div>
        </div>
    )
}

export default ProcessAssignation;