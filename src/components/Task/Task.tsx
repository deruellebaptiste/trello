import useModal from "../../hooks/useModal";
import Modal from "../Modal/modal";
import { CgEye } from "react-icons/cg"
import { BsTextLeft } from "react-icons/bs"
import "./Task.scss"
import React from "react";

const Task = ({task, listTitle, listId} : any) => {
    
    const { isShowing, toggle } = useModal();

    return (
        <div className="task">
        <button className="taskButton" onClick={toggle}>
            <h2 className="taskName">{task.title}</h2>
            <div className="infos">
                {task.followed && <span className="iconSpan"><CgEye /></span>}
                {task.description && <span className="iconSpan"><BsTextLeft /></span>}
            </div>
        </button>

        <Modal isShowing={isShowing} hide={toggle} task={task} listTitle={listTitle} listId={listId}/>
        
    </div>
    )  
}

export default React.memo(Task);