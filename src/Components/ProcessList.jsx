import RightArrow from "../IconComponents/RightArrow";
import Stop from "../IconComponents/Stop";
import Trash from "../IconComponents/Trash";
import { useGlobalState } from "../context/GlobalState";
import { useState } from "react";

function ProcessList() {
  const {
    tasks,
    deleteTask,
    partitionsArray,
    setPartitionsArray,
    fitAlgorithm,
  } = useGlobalState();

  const [redFade, setRedFade] = useState(false);
  const [greenFade, SetGreenFade] = useState(false);

  function addToPartition(PID, size) {
    if (!partitionsArray.length) {
      setRedFade(true);
      return;
    }
    if (fitAlgorithm == "first") {
      const { result, memory } = FirstFit(
        { PID: PID, size: size },
        partitionsArray
      );
      if (result) {
        setPartitionsArray(memory.partitions);
        SetGreenFade(true);
      } else {
        setRedFade(true);
      }
    }
    if (fitAlgorithm == "best") {
      const { result, memory } = BestFit(
        { PID: PID, size: size },
        partitionsArray
      );
      if (result) {
        setPartitionsArray(memory.partitions);
        SetGreenFade(true);
      } else {
        setRedFade(true);
      }
    }
  }

  const listProcess = tasks.map((process, i) => {
    return (
      <tr
        onAnimationEnd={() => {
          setRedFade(false);
          setRedFade(true);
        }}
        className={`${redFade && "animate-redfade"} ${
          greenFade && "animate-greenfade"
        }snap-end`}
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
            onAnimationEnd={() => {
              setRedFade(false);
              setRedFade(true);
            }}
            className={`${redFade && "animate-redfade"} ${
              greenFade && "animate-greenfade"
            } p-1`}
          >
            <RightArrow className="hover:text-teal-600" />
          </button>

          <button className="p-1 scale-125">
            <Stop className="hover:text-teal-600" />
          </button>

          <button className="p-1" onClick={() => deleteTask(process.PID)}>
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
