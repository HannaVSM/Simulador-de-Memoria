import Program from "./Components/Program"

function App() {

  

  return (
    <div className='px-14 bg-emerald-950 h-screen w-auto'>
    <main className='h-screen'>
        <h1 className='text-center p-8 font-bold text-4xl text-white'>Memory Management Simulator</h1>
        <div className='outline outline-white h-[80%] my-4 outline-4 flex flex-row' id='wrapper'>
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
          <div className='h-full w-1/4 flex flex-col place-items-center align-top outline outline-2 outline-white' id='parameters'>
              <select name="tipo-mem" className='w-72 rounded text-emerald-950 text-center h-8 my-8'  id="select-mem-type">
                <option value="" disabled selected hidden>Select the memory type</option>
                <option value="Fixed_Memory">Fixed Memory</option>
                <option value="Variable_Memory">Variable Memory</option>
                <option value="Dinamic_Memory_without_Compaction">Dinamic Memory without Compaction</option>
                <option value="Dinamic_Memory_with_Compaction">Dinamic Memory with Compaction</option>
              </select>
              <select name="tipo-mem" className='w-72 rounded text-emerald-950 text-center h-8'  id="select-tipo-mem">
                <option value="" disabled selected hidden>Seleccione un algoritmo</option>
                <option value="first">First Fit</option>
                <option value="best">Best Fit</option>
                <option value="worst">Worst Fit</option>
              </select>
          </div>
          <div className='h-full w-2/4 flex flex-col place-items-center align-top outline outline-2 outline-white' id='mem-map'>
              
          </div>
        </div>
      
    </main>
    </div>
  )
}

export default App
