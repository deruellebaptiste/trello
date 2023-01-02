import { ITaskLists, TaskContextType } from "../../@types/task";
import AddTask from "../addTask/AddTask";
import Task from "../Task/Task";
import "./TaskList.scss";
import { AiOutlineEllipsis } from "react-icons/ai";
import React from "react";
import { TaskContext } from "../../context/taskContext";

const TaskList = ({ title, id, tasks }: ITaskLists) => {
  const { deleteList } = React.useContext(TaskContext) as TaskContextType;

  const text = `Vous allez supprimer la liste nommée ${title}.\nAppuyez sur "OK" pour continuer. \nOu sur "Annuler" pour fermer.`;

  const handleDeleteClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    if (window.confirm(text)) {
      deleteList(id);
    } else {
      console.log("Cancelled");
    }
  };

  return (
    <div className="taskList">
      <div className="box">
        <div className="titleContainer">
          <div className="listTitle">{title}</div>
          <button className="test" onClick={handleDeleteClick}>
            <AiOutlineEllipsis />
          </button>
        </div>
        <div className="tasksContainer">
          {tasks.map((task, index) => (
            <Task key={index} task={task} listTitle={title} listId={id} />
          ))}
        </div>

        <AddTask tasks={tasks} listId={id} />
      </div>
    </div>
  );
};

export default TaskList;
