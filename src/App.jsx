import {GlobalProvider} from './context/GlobalState'
import AsignationForm from './components/AsignationForm';
import JSONForm from './components/JSONForm';
import ProgramsDefault from './components/ProgramsDefault';
import ProcessExecution from './components/ProcessExecution';

function App() {
  return (
    <GlobalProvider>
      <div className="bg-zinc-800 text-slate-100 w-screen">
        <div className="flex">
          <div className='border border-white border-r-1 border-l-1 border-t-0 border-l-0 border-b-0'>
            <div className='mb-4 mt-4 border border-white border-b-1 border-r-0 border-l-0 border-t-0'>
              <AsignationForm />
            </div>
            
            <div className='mb-4 mt-4 border border-white border-b-1 border-r-0 border-l-0 border-t-0'>
              <JSONForm />
            </div>
            
            <div>
              <ProgramsDefault />
            </div>
          </div>
          
          <div>
            <div>
              <ProcessExecution />
            </div>
          </div>

          <div>
            <div>
              <h1>MEMORY RAM</h1>
            </div>
          </div>
        </div>
      </div>
    </GlobalProvider>
  )
}

export default App;