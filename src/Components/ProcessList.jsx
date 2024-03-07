import RightArrow from "../IconComponents/RightArrow";
import Stop from "../IconComponents/Stop";
import Trash from "../IconComponents/Trash";
import { useGlobalState } from "../context/GlobalState";
import { useState } from "react";
import { FirstFit, BestFit, WorstFit } from "../Logic/Adjustment";

function ProcessList() {
  const {
    tasks,
    deleteTask,
    partitionsArray,
    setPartitionsArray,
    fitAlgorithm,
  } = useGlobalState();

  const [redsPIDs, SetRedsPIDs] = useState(new Set());
  const [greensPIDs, SetGreensPIDs] = useState(new Set());

  const addPIDRED = (PID) => {
    SetRedsPIDs((previousState) => new Set([...previousState, PID]));
  };

  const addPIDGREEN = (PID) => {
    SetGreensPIDs((previousState) => new Set([...previousState, PID]));
  };

  const removePIDRED = (PID) => {
    SetRedsPIDs((prev) => new Set([...prev].filter((x) => x !== PID)));
  };

  const removePIDGREEN = (PID) => {
    SetRedsPIDs((prev) => new Set([...prev].filter((x) => x !== PID)));
  };

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

  function retrieveFromPartition(PID) {}

  const listProcess = tasks.map((process, i) => {
    return (
      <tr
        className={`${redsPIDs.has(process.PID) && "bg-red-500"} 
        ${greensPIDs.has(process.PID) && "bg-emerald-700"} 
        ${
          !greensPIDs.has(process.PID) &&
          !redsPIDs.has(process.PID) &&
          "bg-transparent"
        } `}
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
          >
            <RightArrow className="hover:text-teal-600" />
          </button>

          <button className="p-1 scale-125">
            <Stop className="hover:text-teal-600" />
          </button>

          <button
            onClick={() => {
              deleteTask(process.PID);
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
