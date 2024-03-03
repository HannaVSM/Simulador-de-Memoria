import {GlobalProvider} from './context/GlobalState'
import AsignationForm from './components/AsignationForm';
import JSONForm from './components/JSONForm';
import ProgramsDefault from './components/ProgramsDefault';
import ProcessExecution from './components/ProcessExecution';

function App() {
  return (
    <GlobalProvider>

      <AsignationForm />
      <JSONForm />
      <ProgramsDefault />
      <ProcessExecution />

    </GlobalProvider>
  )
}

export default App;