import RightArrow from "../IconComponents/RightArrow";
import Stop from "../IconComponents/Stop";
import Trash from "../IconComponents/Trash";

function ProcessList(){

    const processesList = [{"pid":"PC1", "name":"Bloc de Notas", "size": "1.048.576"}]
    
    
    const listProcess = processesList.map((process, i) => {//falta el origen de processesList
        return(
            <tr className="snap-end" key={i}>
                <td className="max-w-[15%] w-[15%] border border-white text-center font-normal text-white">{process.pid}</td>
                <td className="max-w-[30%] w-[30%] border border-white text-center font-normal text-white">{process.name}</td>
                <td className="max-w-[30%] w-[30%] border border-white text-center font-normal text-white">{process.size}</td>
                <td className="max-w-[25%] w-[25%] border border-white text-center font-normal text-white">
                    <button className="p-1">
                        <RightArrow className="hover:text-teal-600"/>
                    </button>

                    <button className="p-1 scale-125">
                        <Stop className="hover:text-teal-600"/>
                    </button>

                    <button className="p-1">
                        <Trash className="hover:text-teal-600"/>
                    </button>
                </td>
            </tr>
        )
    })

    return(
        <div className="max-w-[90%] h-5/6 max-h-[90%] w-[90%] rounded outline outline-2 outline-white overflow-auto scroll-smooth snap-y">
            <table className="w-full max-w-full border-collapse">
                <thead>
                    <tr>
                        <th className="max-w-[15%] w-[15%] border border-white text-center font-semibold text-white bg-teal-950 sticky top-0 z-10">P. ID</th>
                        <th className="max-w-[30%] w-[30%] border border-white text-center font-semibold text-white bg-teal-950 sticky top-0 z-10">Task</th>
                        <th className="max-w-[30%] w-[30%] border border-white text-center font-semibold text-white bg-teal-950 sticky top-0 z-10">Size</th>
                        <th className="max-w-[25%] w-[25%] border border-white text-center font-semibold text-white bg-teal-950 sticky top-0 z-10">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {listProcess}
                </tbody>
            </table>
        </div>
    )
}

export default ProcessList;