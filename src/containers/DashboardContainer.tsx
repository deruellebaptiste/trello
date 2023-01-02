import React from 'react';
import { TaskContextType } from '../@types/task';
import Dashboard from '../components/Dashboard/Dashboard';
import { TaskContext } from '../context/taskContext';


const DashboardContainer = () => {

 const { taskLists } = React.useContext(TaskContext) as TaskContextType;

  return (
    <>
        <Dashboard taskLists={taskLists}/>
    </>
  );
};

export default DashboardContainer;