import Trash from "../IconComponents/Trash";

function TablePartition(props){
    return(
        <tr className="snap-end">
            <td className="max-w-[15%] w-[15%] border border-white text-center font-normal text-white">{props.number}</td>
            <td className="max-w-[60%] w-[60%] border border-white text-center font-normal text-white">{props.size}</td>
            <td className="max-w-[25%] w-[25%] border border-white text-center font-normal text-white">
                <button className="p-1 ">
                    <Trash className="hover:text-teal-600"/>
                </button>
            </td>
        </tr>
    )
}

export default TablePartition;