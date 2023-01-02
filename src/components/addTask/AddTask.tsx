import React from "react";
import { useState } from "react";
import { ITask, TaskContextType } from "../../@types/task";
import { TaskContext } from "../../context/taskContext";
import Button from "../Button/Button";
import SubmitInput from "../SubmitInput/SubmitInput";
import "./AddTask.scss";

interface IProps {
  tasks?: ITask[];
  listId?: number;
}

const AddTask = ({ tasks, listId }: IProps) => {
  const [inputVisible, setInputVisible] = useState(false);
  const { addTask } = React.useContext(TaskContext) as TaskContextType;

  const handleInputValueChange = (text: string) => {
    if (!listId) return;
    addTask(text, listId);
    setInputVisible(false);
  };

  const handleClick = (event: React.MouseEvent<any, MouseEvent>) => {
    event.preventDefault();
    setInputVisible(!inputVisible);
  };

  const handleCloseInputMode = () => {
    setInputVisible(!inputVisible);
  };

  const hasTasks = tasks ? tasks.length > 0 : null;

  return (
    <div className="addTask">
      <form
        className="formAddTask"
        style={
          inputVisible
            ? { backgroundColor: "rgb(235, 236, 240)", padding: "8px" }
            : { backgroundColor: "rgba(255, 255, 255, 0.24)" }
        }
      >
        {inputVisible ? (
          <div>
            <SubmitInput
              onButtonClick={handleInputValueChange}
              onCloseButtonClick={handleCloseInputMode}
              buttonName={"Ajouter une carte"}
            />
          </div>
        ) : (
          <Button ternary onClick={handleClick}>
            {" "}
            <span className="addIcon"></span>
            {hasTasks ? "Ajouter une autre carte" : "Ajouter une carte"}
          </Button>
        )}
      </form>
    </div>
  );
};

export default AddTask;
