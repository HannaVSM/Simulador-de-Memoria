import { useState } from "react";
import { useGlobalState } from "../context/GlobalState";

function AsignationForm() {
  const { addTask } = useGlobalState();

  const [task, setTask] = useState("");
  const [size, setSize] = useState("");
  const [counter, setCounter] = useState(1);

  const onSubmit = (e) => {
    e.preventDefault();

    addTask({
      PID: "P" + counter,
      task,
      size: +size * 1024,
    });

    setCounter(counter + 1);

    setTask("");
    setSize("");
  };

  return (
    <div>
      <h1 className="mb-2 ml-2">Task Asignation</h1>

      <form onSubmit={onSubmit}>
        <div>
          <label className="font-normal mx-1.5 ml-4">Task: </label>
          <input
            type="text"
            onChange={(e) => setTask(e.target.value)}
            value={task}
            className="bg-white text-black max-w-80 px-1 w-full py-0 mr-4 my-2 rounded"
          />
        </div>

        <div>
          <label className="font-normal mx-1.5 ml-4">Size: </label>
          <input
            className="bg-white text-black px-1 py-0 mr-2 my-2 rounded"
            type="number"
            onChange={(e) => setSize(e.target.value)}
            value={size}
          />
          <span> KiB</span>
        </div>

        <div className="flex justify-center">
          <button className="mt-2 mb-4 text-white bg-teal-600 w-20 p-1 rounded">
            Assign
          </button>
        </div>
      </form>
    </div>
  );
}

export default AsignationForm;
