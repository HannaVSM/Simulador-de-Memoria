import RightArrow from "../IconComponents/RightArrow";
import Stop from "../IconComponents/Stop";
import Trash from "../IconComponents/Trash";
import { useGlobalState } from "../context/GlobalState";
import { FirstFit, BestFit, WorstFit, DinamicFit } from "../Logic/Adjustment";

function ProcessList() {
  const {
    tasks,
    deleteTask,
    partitionsArray,
    setPartitionsArray,
    fitAlgorithm,
    addPIDRED,
    addPIDGREEN,
    addADDEDPIDS,
    removePIDRED,
    removePIDGREEN,
    removeADDEDPIDs,
    redsPIDs,
    greensPIDs,
    addedPIDs,
  } = useGlobalState();

  function addToPartition(PID, size) {
    if (!partitionsArray.length) {
      addPIDRED(PID);
      return;
    }
    if (fitAlgorithm == "first") {
      const { result, memory } = FirstFit(
        { PID: PID, size: size },
        partitionsArray
      );

      if (result) {
        let arrayparticiones = [...memory];
        setPartitionsArray(arrayparticiones);
        addADDEDPIDS(PID);
        removePIDRED(PID);
        addPIDGREEN(PID);
        return;
      } else {
        removePIDGREEN(PID);
        addPIDRED(PID);
        return;
      }
    }
    if (fitAlgorithm == "best") {
      const { result, memory } = BestFit(
        { PID: PID, size: size },
        partitionsArray
      );
      if (result) {
        let arrayparticiones = [...memory];
        setPartitionsArray(arrayparticiones);
        addADDEDPIDS(PID);
        removePIDRED(PID);
        addPIDGREEN(PID);
        return;
      } else {
        removePIDGREEN(PID);
        addPIDRED(PID);
        return;
      }
    }

    if (fitAlgorithm == "worst") {
      const { result, memory } = WorstFit(
        { PID: PID, size: size },
        partitionsArray
      );
      if (result) {
        let arrayparticiones = [...memory];
        setPartitionsArray(arrayparticiones);
        addADDEDPIDS(PID);
        removePIDRED(PID);
        addPIDGREEN(PID);
        return;
      } else {
        removePIDGREEN(PID);
        addPIDRED(PID);
        return;
      }
    }

    if (fitAlgorithm == "dinamic") {
      let llega = partitionsArray
      console.log("boton  ", llega)
      const { result, memory } = DinamicFit(
        { PID: PID, size: size },
        partitionsArray
      );
      if (result) {
        let arrayparticiones = [...memory];
        setPartitionsArray(arrayparticiones);
        addADDEDPIDS(PID);
        removePIDRED(PID);
        addPIDGREEN(PID);
        return;
      } else {
        removePIDGREEN(PID);
        addPIDRED(PID);
        return;
      }
    }
  }

  function retrieveFromPartition(PID) {
    if (!partitionsArray.length) {
      addPIDRED(PID);
      return;
    }
    if (addedPIDs.has(PID)) {
      let array = partitionsArray.map((partition) => {
        if (partition.pid == PID) {
          partition.pid = "";
          partition.lo = false;
        }
        return partition;
      });
      setPartitionsArray(array);

      removePIDGREEN(PID);
      removeADDEDPIDs(PID);
      removePIDRED(PID);
      return;
    }
  }

  const listProcess = tasks.map((process, i) => {
    return (
      <tr
        className={`${
          redsPIDs.has(process.PID) &&
          !addedPIDs.has(process.PID) &&
          " bg-red-500"
        } " "
        ${
          greensPIDs.has(process.PID) &&
          addedPIDs.has(process.PID) &&
          " bg-emerald-700"
        }`}
        key={i}
      >
        <td className="max-w-[15%] w-[15%] border border-white text-center font-normal text-white">
          {process.PID}
        </td>
        <td className="max-w-[30%] w-[30%] border border-white text-center font-normal text-white">
          {process.task}
        </td>
        <td className="max-w-[30%] w-[30%] border border-white text-center font-normal text-white">
          {process.size}
        </td>
        <td className="max-w-[25%] w-[25%] border border-white text-center font-normal text-white">
          <button
            onClick={() => addToPartition(process.PID, process.size)}
            className="p-1"
            disabled={addedPIDs.has(process.PID)}
          >
            <RightArrow className="hover:text-teal-600" />
          </button>

          <button
            onClick={() => retrieveFromPartition(process.PID)}
            className="p-1 scale-125"
          >
            <Stop className="hover:text-teal-600" />
          </button>

          <button
            onClick={() => {
              deleteTask(process.PID);
              retrieveFromPartition(process.PID);
              removePIDRED(process.PID);
              removePIDGREEN(process.PID);
            }}
            className="p-1"
          >
            <Trash className="hover:text-teal-600" />
          </button>
        </td>
      </tr>
    );
  });

  return (
    <div className="max-w-[90%] h-5/6 max-h-[90%] w-[90%] rounded outline outline-2 outline-white overflow-auto scroll-smooth snap-y">
      <table className="w-full max-w-full border-collapse">
        <thead>
          <tr>
            <th className="max-w-[15%] w-[15%] border border-white text-center font-semibold text-teal-600 bg-white sticky top-0 z-10">
              P. ID
            </th>
            <th className="max-w-[30%] w-[30%] border border-white text-center font-semibold text-teal-600 bg-white sticky top-0 z-10">
              Task
            </th>
            <th className="max-w-[30%] w-[30%] border border-white text-center font-semibold text-teal-600 bg-white sticky top-0 z-10">
              Size
            </th>
            <th className="max-w-[25%] w-[25%] border border-white text-center font-semibold text-teal-600 bg-white sticky top-0 z-10">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>{listProcess}</tbody>
      </table>
    </div>
  );
}

export default ProcessList;
