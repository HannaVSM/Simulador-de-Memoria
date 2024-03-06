import { useGlobalState } from "../context/GlobalState";

function ProcessExecution() {
    const data = useGlobalState();
    
    return (
        <div>
            <h1>Process in Execution</h1>
            <div>
                {JSON.stringify(data)}
            </div>
        </div>
    )
}

export default ProcessExecution