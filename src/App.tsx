import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import DashboardContainer from './containers/DashboardContainer';
import TaskProvider from './context/taskContext';

function App() {
  return (
    <TaskProvider>
      <div className="App">
        <Header></Header>
        <DashboardContainer></DashboardContainer>
      </div>
    </TaskProvider>
  );
}

export default App;
