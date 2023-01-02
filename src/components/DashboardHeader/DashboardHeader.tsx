import React from "react";
import { TaskContextType } from "../../@types/task";
import { TaskContext } from "../../context/taskContext";
import Button from "../Button/Button";
import "./DashBoardHeader.scss";

const DashBoardHeader = () => {
  const { resetToInitialState } = React.useContext(
    TaskContext
  ) as TaskContextType;

  const handleResetClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    resetToInitialState();
  };

  return (
    <div className="dashboardHeader">
      <h1 className="boardTitle">Tableau principal</h1>
      <Button primary onClick={handleResetClick}>
        Initialiser le jeu de données
      </Button>
    </div>
  );
};

export default DashBoardHeader;
