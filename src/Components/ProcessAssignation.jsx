import AsignationForm from './AsignationForm';
import JSONForm from './JSONForm';
import ProgramsDefault from './ProgramsDefault';

function ProcessAssignation(){
    return(
        <div className='flex flex-col max-w-[25%] w-full border border-white border-r-1 border-l-1 border-t-0 border-l-0 border-b-0'>
            <div className='mb-4 mt-2 border border-white border-b-1 border-r-0 border-l-0 border-t-0'>
              <AsignationForm />
            </div>
            <div className='mb-2 mt-2 border border-white border-b-1 border-r-0 border-l-0 border-t-0'>
              <JSONForm />
            </div>
            <div className=''>
              <ProgramsDefault />
            </div>
        </div>
    )
}

export default ProcessAssignation;