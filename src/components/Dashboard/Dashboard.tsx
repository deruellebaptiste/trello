import { ITaskLists } from "../../@types/task";
import AddTaskList from "../addTaskList/addTaskList";
import DashBoardHeader from "../DashboardHeader/DashboardHeader";
import TaskList from "../TaskList/TaskList";
import "./Dashboard.scss";

interface IProps {
  taskLists: ITaskLists[];
}

const DashBoard = ({ taskLists }: IProps) => {
  return (
    <>
      <DashBoardHeader />
      <div className="listContainer">
        {taskLists.map((taskList, index) => (
          <TaskList
            key={index}
            title={taskList.title}
            id={taskList.id}
            tasks={taskList.tasks}
          ></TaskList>
        ))}
        <AddTaskList />
      </div>
    </>
  );
};

export default DashBoard;
