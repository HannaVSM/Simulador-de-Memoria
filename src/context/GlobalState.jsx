import { createContext , useContext, useReducer} from "react";
import AppReducer from './AppReducer'

const initialState = {
    tasks: [{"PID":"SO","task":"Sistema Operativo","bytes":"1048576"}]
}

export const Context = createContext();

export const useGlobalState = () => {
    const context = useContext(Context);
    return context;
}

export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    const addTask = (task) => {
        dispatch({
            type: "ADD_PROCESS",
            payload: task
        })
    }

    return (
        <Context.Provider 
            value={{
                tasks: state.tasks,
                addTask
            }}
        >
            {children}
        </Context.Provider>
    )
}