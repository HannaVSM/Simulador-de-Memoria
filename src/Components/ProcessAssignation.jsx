import AsignationForm from './AsignationForm';
import JSONForm from './JSONForm';
import ProgramsDefault from './ProgramsDefault';

function ProcessAssignation(){
    return(
        <div className='h-full w-1/4 flex flex-col border-4 border-white' id='programs'>
            <AsignationForm />  
            <JSONForm />
            <ProgramsDefault />
        </div>
    )
}

export default ProcessAssignation;