import { createContext , useContext, useReducer, useState} from "react";
import AppReducer from './AppReducer'

const initialState = {
    tasks: []
}

export const Context = createContext();

export const useGlobalState = () => {
    const context = useContext(Context);
    return context;
}

export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);
    const [memMapBuild, setMemMapBuild] = useState("Default")
    const [partitionsArray, setPartitionsArray] = useState([])

    const addTask = (task) => {
        dispatch({
            type: "ADD_PROCESS",
            payload: task
        })
    }

    const deleteTask = (PID) => {
        dispatch(
            {
                type: "DELETE_PROCESS",
                payload: PID
            }//action
        )
    }


    const changeMemMapBuild = (memType)=>{
        if(memType === "Fixed")
            setMemMapBuild("Fixed")
        if(memType === "Variable")
            setMemMapBuild("Variable")
        if(memType === "Dinamic")
            setMemMapBuild("Dinamic")
        if(memType === "Default")
            setMemMapBuild("Default")
    }

    return (
        <Context.Provider 
            value={{
                tasks: state.tasks,
                addTask,
                deleteTask,
                changeMemMapBuild,
                memMapBuild,
                partitionsArray,
                setPartitionsArray
            }}
        >
            {children}
        </Context.Provider>
    )
}