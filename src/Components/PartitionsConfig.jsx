import { useState, useEffect, useRef} from "react";
import Trash from "../IconComponents/Trash";

function PartitionConfig({memType}){

  const MAX_PARTITIONS_ROWS = 45;
  const MAX_PARTITIONS_SIZE = 15360;

  const [wiggle, setWiggle] = useState(false); //wiggle animation for the buttons

  const [sizeValueFixed, setSizeValueFixed] = useState('');
  const [sizeValueVariable, setSizeValueVariable] = useState('');
  const [numberPartitionsValue, setNumberPartitionsValue] = useState('');
  const [partitions_rows, setPartitions_rows] = useState([]);
  const [partitions_rows_size_sum, setPartitions_rows_size_sum] = useState(0);
  const [partitions_rows_number_sum, setPartitions_rows_number_sum] = useState(0);
  const [partitions_rows_sum_ids, setPartitions_rows_sum_ids] = useState(0);

  const sizeInputFixed = useRef(null);
  const sizeInputVariable = useRef(null);
  const numberPartitionsInput = useRef(null);
  const addBtn = useRef(null);
  
  //elementos de la lista
  const listPartitionRows = partitions_rows.map((partition) => (
    <tr className="snap-end">
      <td className="max-w-[15%] w-[15%] border border-white text-center font-normal text-white">{partition.number}</td>
      <td className="max-w-[60%] w-[60%] border border-white text-center font-normal text-white">{partition.size}</td>
      <td className="max-w-[25%] w-[25%] border border-white text-center font-normal text-white">
          <button className="p-1" onClick={()=> DeletePartitionRow(partition.id)}>
              <Trash className="hover:text-teal-600"/>
          </button>
      </td>
    </tr>
  ));

  //update size and partitions summatory config
  useEffect(() => {
    setPartitions_rows_size_sum(partitions_rows.reduce((partition,next_partition)=> partition+(parseInt(next_partition.size)*parseInt(next_partition.number)),0))
    setPartitions_rows_number_sum(partitions_rows.reduce((partition,next_partition)=> partition+parseInt(next_partition.number),0))
  } ,[partitions_rows])

  //fixed size validation
  useEffect(() => {
    if(sizeValueFixed && validateInputSize(sizeValueFixed)){
      sizeInputFixed.current.className = "max-w-full rounded text-black text-center";
      
    }
    if(sizeValueFixed && !validateInputSize(sizeValueFixed)){
      sizeInputFixed.current.className = "max-w-full rounded text-red-600 text-center";
    }

  }, [sizeValueFixed])

  //variable size validation
  useEffect(() => {
    if(sizeValueVariable && validateInputSize(sizeValueVariable)){
      sizeInputVariable.current.className = "max-w-20 rounded text-black text-center";
    }
    if(sizeValueVariable && !validateInputSize(sizeValueVariable)){
      sizeInputVariable.current.className = "max-w-20 rounded text-red-600 text-center";
    }
  },[sizeValueVariable])

  //variable num partitions validation
  useEffect(() => {
    if(numberPartitionsValue && validateNumberPartitions(numberPartitionsValue)){
      numberPartitionsInput.current.className = "max-w-16 rounded text-black text-center";
    }
    if(numberPartitionsValue && !validateNumberPartitions(numberPartitionsValue)){
      numberPartitionsInput.current.className = "max-w-16 rounded text-red-600 text-center";
    }
  },[numberPartitionsValue])

  const validateInputSize = (value) => {
    return (parseInt(value)>0 && parseInt(value)<=MAX_PARTITIONS_SIZE);
  }
  const validateNumberPartitions = (value) => {
    return (parseInt(value)>0 && parseInt(value)<=MAX_PARTITIONS_ROWS);
  }

  const handleChangeInputSizeFixed = event => {
    setSizeValueFixed(event.target.value);
  }
  const handleChangeInputSizeVariable = event => {
    setSizeValueVariable(event.target.value);
  }
  const handleChangeNumberPartitions = event => {
    setNumberPartitionsValue(event.target.value);
  }

  const handleClickAddBtn = event => {
    if(numberPartitionsValue && validateNumberPartitions(numberPartitionsValue) && sizeValueVariable && validateInputSize(sizeValueVariable) && (partitions_rows_size_sum+(parseInt(numberPartitionsValue)*parseInt(sizeValueVariable))<=MAX_PARTITIONS_SIZE && (partitions_rows_number_sum+parseInt(numberPartitionsValue))<=MAX_PARTITIONS_ROWS)){
      
      setPartitions_rows([...partitions_rows, {"number": numberPartitionsValue, "size": sizeValueVariable, "id": partitions_rows_sum_ids}]);
      setPartitions_rows_sum_ids(partitions_rows_sum_ids+1)
      setNumberPartitionsValue('');
      setSizeValueVariable('');
    }else{
      setWiggle(true);
    }
  }

  const DeletePartitionRow = (id) => {
    let filteredArr = partitions_rows.filter((el) => el.id !== id);
    setPartitions_rows(filteredArr);
  } 

    const renderComponent = () => {
        switch (memType) {
          case 'Fixed_Memory':
            return(
              <div className="flex flex-col justify-between items-center overflow-x-hidden overflow-y-auto max-h-full h-auto">
                <div className="py-2 flex flex-row gap-2 justify-center items-center w-full flex-wrap">
                    <label htmlFor="size_partitions" className="text-lg">Partitions Size (kiB)</label><input type="text" placeholder={'1-'+MAX_PARTITIONS_SIZE} inputMode="numeric" onChange={handleChangeInputSizeFixed} value={sizeValueFixed}  pattern="[0-9]*" className="max-w-full rounded text-black text-center" ref={sizeInputFixed}/>
                </div>
                <div className="py-2 flex flex-row gap-2 justify-center items-center w-full flex-wrap">
                  <input type="button" value="Save" className='max-w-22 w-24 border-2 border-white p-2 rounded-md hover:bg-emerald-800 hover:scale-105'/>
                </div>
                
              </div>
            )
          case 'Variable_Memory':
            return(
              <div className="flex flex-col justify-between items-center overflow-x-hidden overflow-y-auto h-auto">
                <div className="py-2 h-5/6 flex flex-row gap-2 justify-around max-w-[90%] w-full overflow-auto">
                  <div className="py-2 flex flex-col items-center justify-center">
                    <label htmlFor="number_partitions" className="text-lg text-center">Number<br/>Partitions</label><input type="text" placeholder={'1-'+MAX_PARTITIONS_ROWS} inputMode="numeric" pattern="[0-9]*" className="max-w-16 rounded text-black text-center" onChange={handleChangeNumberPartitions} value={numberPartitionsValue} ref={numberPartitionsInput}/>
                  </div>
                  <div className="py-2 flex flex-col items-center justify-center">
                    <label htmlFor="size_partitions" className="text-lg text-center">Partitions<br/>Size (kiB)</label><input type="text" placeholder={'1-'+MAX_PARTITIONS_SIZE} inputMode="numeric" pattern="[0-9]*" className="max-w-20 rounded text-black text-center" onChange={handleChangeInputSizeVariable} value={sizeValueVariable} ref={sizeInputVariable}/>
                  </div>
                  <div className="py-2 flex flex-col items-center justify-center">
                    <input type="button" value="Add" onClick={handleClickAddBtn} onAnimationEnd={() => setWiggle(false)} ref={addBtn} className={`${
                      wiggle && "animate-wiggle"
                      } max-w-22 w-24 border-2 border-white p-2 rounded-md hover:bg-emerald-800 hover:scale-105`}/>
                  </div>
                </div>

                <div className="my-2 max-w-[90%] h-full max-h-[83.333333%] w-[90%] rounded outline outline-2 outline-white overflow-auto scroll-smooth snap-y"> {/*tabla de particiones a añadir*/}
                  <table className="w-full max-w-full border-collapse">
                    <thead>
                      <tr>
                          <th className="max-w-[15%] w-full border border-white text-center font-semibold text-white bg-teal-950 sticky top-0 z-10">#</th>
                          <th className="max-w-[60%] w-full border border-white text-center font-semibold text-white bg-teal-950 sticky top-0 z-10">Size</th>
                          <th className="max-w-[25%] w-full border border-white text-center font-semibold text-white bg-teal-950 sticky top-0 z-10">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {listPartitionRows}
                    </tbody>
                  </table>
                </div>

                <h2 className="pt-2 max-w-full w-[90%] font-normal text-white text-lg mb-2 text-center">Select an adjustment algorithm</h2>
                <div className="py-2 flex flex-row justify-center items-center w-full">
                  <select name="tipo-mem" className='max-w-72 w-full rounded text-emerald-950 text-center h-8'  id="select-tipo-mem">
                    <option value="first">First Fit</option>
                    <option value="best">Best Fit</option>
                    <option value="worst">Worst Fit</option>
                  </select>
                </div>

                <div className="py-2 flex flex-row gap-2 justify-center items-center w-full flex-wrap">
                  <input type="button" value="Save" className='max-w-22 w-24 border-2 border-white p-2 rounded-md hover:bg-emerald-800 hover:scale-105'/>
                </div>
              </div>
            )
          case 'Dinamic_Memory_without_Compaction':
            return(
              <div className="flex flex-col justify-between items-center overflow-x-hidden overflow-y-auto max-h-full h-auto">
                <h2 className="pt-2 max-w-full w-[90%] font-normal text-white text-lg mb-2 text-center">Select an adjustment algorithm</h2>
                <div className="py-2 flex flex-row gap-2 justify-center items-center w-full">
                  <select name="tipo-mem" className='max-w-72 w-full rounded text-emerald-950 text-center h-8'  id="select-tipo-mem">
                    <option value="first">First Fit</option>
                    <option value="best">Best Fit</option>
                    <option value="worst">Worst Fit</option>
                  </select>
                </div>
                <div className="py-2 flex flex-row gap-2 justify-center items-center w-full flex-wrap">
                  <input type="button" value="Save" className='max-w-22 w-24 border-2 border-white p-2 rounded-md hover:bg-emerald-800 hover:scale-105'/>
                </div>
              </div>
            )
          case 'Dinamic_Memory_with_Compaction':
            return(
              <div className="flex flex-col justify-center items-center overflow-x-hidden overflow-y-auto max-h-[13.5rem] h-auto">
                <div className="py-2 flex flex-row gap-2 justify-center items-center w-full flex-wrap">
                  <input type="button" value="Compact" className='max-w-22 w-24 border-2 border-white p-2 rounded-md hover:bg-emerald-800 hover:scale-105'/>
                </div>
              </div>
            )
          default:
            return(
                <div className="flex flex-col items-center gap-2 w-full text-center justify-center min-h-52">
                    <p className="font-medium text-3xl">Choose a memory type to configure the parameters</p>
                </div>
                
            )
        }
    };

    return (
        <div>
          {renderComponent()}
        </div>
    );

}

export default PartitionConfig;