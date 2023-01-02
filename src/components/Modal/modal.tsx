import React, { useState } from "react";
import ReactDOM from "react-dom";
import ActionButton from "../ActionButton/ActionButton";
import "./Modal.scss"
import { CgEye } from "react-icons/cg"
import { MdHorizontalRule } from "react-icons/md"
import { TaskContext } from "../../context/taskContext";
import { TaskContextType } from "../../@types/task";
import SubmitInput from "../SubmitInput/SubmitInput";
import ModalWrapper from "../ModalWrapper/ModalWrapper";


const Modal = ({ isShowing, hide, task, listTitle, listId }: any) => {
    
    const { deleteTask, followTask, updateTaskDescription } = React.useContext(TaskContext) as TaskContextType;
    const [inputVisible, setInputVisible] = useState(false)

    const handleTextareaValueChange = (text: string) => {
        updateTaskDescription(task.id, listId, text);
        setInputVisible(false)
    }

    const handleCloseInputMode = (arg0 : boolean) => {
        setInputVisible(arg0);
    }

    const handleClickDescription = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        event.preventDefault();
        setInputVisible(true)
    }

    const handleDelete = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault();
        deleteTask(task.id, listId);
    }

    const handleFollowTask = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault();
        followTask(task.id, listId, task.followed);
    }

return (
    isShowing
    ? ReactDOM.createPortal(
        <>
        <ModalWrapper hide={hide}>
        <div className="contentModal">
                    <div className="modalHeader">
                        <h3 className="taskName">{task.title}</h3>
                        <div className="fromList">
                            <span>Dans la liste <span className="listName">{listTitle}</span></span>{task.followed && <span className="icon"><CgEye/></span>}
                        </div>
                    </div>
                    <div className="modalBody">
                        <div className="descriptionContainer">
                            <div className="descriptionTitle">Description</div>
                            <div>
                            { inputVisible ? <div>
                                    <form className="form">
                                        <SubmitInput initialText={task.description} onButtonClick={handleTextareaValueChange} onCloseButtonClick={handleCloseInputMode} buttonName={"Enregistrer"} />
                                    </form>
                                </div> : 
                                
                                <div className={task.description ? "description " : "emptyDescription"} onClick={handleClickDescription}>{task.description ? task.description : "Ajouter une description plus détaillée…"}</div>}
                                
                            </div>
                        </div>
                        <div className="actionContainer">
                            <div className="actionTitle">Actions</div>
                        <ActionButton followed={task.followed} icon={<CgEye/>} onClick={handleFollowTask}>Suivre</ActionButton>
                        <ActionButton followed={false} icon={<MdHorizontalRule/>} onClick={handleDelete}>Supprimer</ActionButton>
                        </div>
                       
                    </div>
                </div>
        </ModalWrapper>
  
               
          
        </>,
        document.body
      )
    : null
)
  
}

export default Modal;
