import React from "react";
import { useState } from "react";
import { TaskContextType } from "../../@types/task";
import { TaskContext } from "../../context/taskContext";
import Button from "../Button/Button";
import SubmitInput from "../SubmitInput/SubmitInput";
import "./addTaskList.scss";

const AddTaskList = () => {
  const [inputVisible, setInputVisible] = useState(false);
  const { addList } = React.useContext(TaskContext) as TaskContextType;

  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    setInputVisible(!inputVisible);
  };

  const handleInputValueChange = (text: string) => {
    addList(text);
    setInputVisible(false);
  };

  const handleCloseInputMode = (boolean: boolean) => {
    setInputVisible(boolean);
  };

  return (
    <div className="addTaskList">
      <form
        className="formAddTaskList"
        style={
          inputVisible
            ? { backgroundColor: "white", padding: "4px" }
            : { backgroundColor: "rgba(255, 255, 255, 0.24)" }
        }
      >
        {inputVisible ? (
          <div>
            <SubmitInput
              onButtonClick={handleInputValueChange}
              onCloseButtonClick={handleCloseInputMode}
              input
              buttonName={"Ajouter une liste"}
            />
          </div>
        ) : (
          <Button className={"addListButton"} secondary onClick={handleClick}>
            {" "}
            <span className="addIcon"></span> Ajouter une autre liste
          </Button>
        )}
      </form>
    </div>
  );
};

export default AddTaskList;
