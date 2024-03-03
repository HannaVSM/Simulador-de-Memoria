import RightArrow from "../IconComponents/RightArrow";
import Stop from "../IconComponents/Stop";
import Trash from "../IconComponents/Trash";

function ExecutedProcess(props){
    return(
        <tr className="snap-end">
            <td className="max-w-[15%] w-[15%] border border-white text-center font-normal text-white">{props.pid}</td>
            <td className="max-w-[30%] w-[30%] border border-white text-center font-normal text-white">{props.name}</td>
            <td className="max-w-[30%] w-[30%] border border-white text-center font-normal text-white">{props.size}</td>
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
}

export default ExecutedProcess;