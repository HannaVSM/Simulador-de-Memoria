import { createContext, useContext, useReducer, useState } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  tasks: [],
};

export const Context = createContext();

export const useGlobalState = () => {
  const context = useContext(Context);
  return context;
};

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  const [memMapBuild, setMemMapBuild] = useState("Default");
  const [partitionsArray, setPartitionsArray] = useState([]);
  const [fitAlgorithm, setFitAlgorithm] = useState("first");

  const [redsPIDs, SetRedsPIDs] = useState(new Set());
  const [greensPIDs, SetGreensPIDs] = useState(new Set());
  const [addedPIDs, SetAddedPIDs] = useState(new Set());

  const addPIDRED = (PID) => {
    SetRedsPIDs((redsPIDs) => new Set([...redsPIDs, PID]));
  };

  const addPIDGREEN = (PID) => {
    SetGreensPIDs((greensPIDs) => new Set([...greensPIDs, PID]));
  };

  const addADDEDPIDS = (PID) => {
    SetAddedPIDs((addedPIDs) => new Set([...addedPIDs, PID]));
  };

  const removePIDRED = (PID) => {
    SetRedsPIDs((redsPIDs) => new Set([...redsPIDs].filter((x) => x != PID)));
  };

  const removePIDGREEN = (PID) => {
    SetRedsPIDs(
      (greensPIDs) => new Set([...greensPIDs].filter((x) => x != PID))
    );
  };

  const removeADDEDPIDs = (PID) => {
    SetAddedPIDs(
      (addedPIDs) => new Set([...addedPIDs].filter((x) => x != PID))
    );
  };

  const addTask = (task) => {
    const ArrayPIDS = state.tasks.map((task) => {
      return task.PID;
    });

    const isDuplicated = ArrayPIDS.some((currentPID) => {
      return currentPID == task.PID;
    });
    if (!isDuplicated) {
      dispatch({
        type: "ADD_PROCESS",
        payload: task,
      });
    }
  };

  const deleteTask = (PID) => {
    dispatch(
      {
        type: "DELETE_PROCESS",
        payload: PID,
      } //action
    );
  };

  const changeMemMapBuild = (memType) => {
    if (memType === "Fixed") setMemMapBuild("Fixed");
    if (memType === "Variable") setMemMapBuild("Variable");
    if (memType === "Dinamic") {
      setMemMapBuild("Dinamic");
      setFitAlgorithm("dinamic");
      console.log("a");
    }
    if (memType === "Default") {
      setMemMapBuild("Default");
      setFitAlgorithm("first");
    }
  };

  const resetProcessListColor = () => {
    SetRedsPIDs(new Set());
    SetGreensPIDs(new Set());
    SetAddedPIDs(new Set());
  };

  return (
    <Context.Provider
      value={{
        tasks: state.tasks,
        addTask,
        deleteTask,
        changeMemMapBuild,
        memMapBuild,
        partitionsArray,
        setPartitionsArray,
        fitAlgorithm,
        setFitAlgorithm,
        addPIDRED,
        addPIDGREEN,
        addADDEDPIDS,
        removePIDRED,
        removePIDGREEN,
        removeADDEDPIDs,
        SetRedsPIDs,
        SetGreensPIDs,
        SetAddedPIDs,
        redsPIDs,
        greensPIDs,
        addedPIDs,
        resetProcessListColor,
      }}
    >
      {children}
    </Context.Provider>
  );
};
