import Management from "./Components/Management"
import ProcessAssignation from "./Components/ProcessAssignation"
import MemMap from "./Components/MemMap"

function App() {

  

  return (
    <div className='px-14 bg-emerald-950 h-screen w-auto'>
    <main className='h-screen'>
        <h1 className='text-center p-8 font-bold text-4xl text-white'>Memory Management Simulator</h1>
        <div className='outline outline-white h-[80%] my-4 outline-4 flex flex-row' id='wrapper'>
          <ProcessAssignation/>
          <Management/>
          <MemMap/>          
        </div>
      
    </main>
    </div>
  )
}

export default App
