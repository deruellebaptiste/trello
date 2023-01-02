import * as React from "react";
import { TaskContextType, ITaskLists } from "../@types/task";

interface IProps {
  children: React.ReactNode;
}

export const TaskContext = React.createContext<TaskContextType | null>(null);

const TaskProvider: React.FC<IProps> = ({ children }: IProps) => {
  const initialData = [
    {
      id: 1,
      title: "liste 1",
      tasks: [
        {
          id: 1,
          title: "task1",
          description: "descriptionTask1",
          followed: false,
        },
      ],
    },
    {
      id: 2,
      title: "liste 2",
      tasks: [
        {
          id: 2,
          title: "task2",
          description: "descriptionTask2",
          followed: true,
        },
      ],
    },
  ];

  const getInitialState = () => {
    const data = localStorage.getItem("taskLists");
    return data ? JSON.parse(data) : [];
  };

  const [taskLists, setTaskLists] = React.useState<ITaskLists[]>(
    getInitialState()
  );

  React.useEffect(() => {
    window.localStorage.setItem("taskLists", JSON.stringify(taskLists));
  }, [taskLists]);

  const addTask = (title: string, idList: number) => {
    if (!title) {
      return;
    }
    const updatedTaskLists = [...taskLists];
    console.log(updatedTaskLists);
    const index = updatedTaskLists.findIndex((list) => list.id === idList);
    updatedTaskLists[index] = {
      ...updatedTaskLists[index],
      tasks: [
        ...updatedTaskLists[index].tasks,
        {
          id: Date.now(), // génère un ID unique en utilisant la date actuelle
          title,
          description: "",
          followed: false,
        },
      ],
    };
    setTaskLists(updatedTaskLists);
  };

  const updateTask = (id: number) => {};

  const deleteTask = (id: number, idList: number) => {
    const updatedTaskLists = taskLists.map((list) => {
      if (list.id !== idList) return list;
      return {
        ...list,
        tasks: list.tasks.filter((task) => task.id !== id),
      };
    });
    setTaskLists(updatedTaskLists);
  };

  const followTask = (id: number, idList: number, followed: boolean) => {
    const updatedTaskLists = taskLists.map((list) => {
      if (list.id !== idList) return list;
      return {
        ...list,
        tasks: list.tasks.map((task) => {
          if (task.id !== id) return task;
          return {
            ...task,
            followed: !followed,
          };
        }),
      };
    });
    setTaskLists(updatedTaskLists);
  };

  const updateTaskDescription = (
    id: number,
    idList: number,
    description: string
  ) => {
    const updatedTaskLists = taskLists.map((list) => {
      if (list.id !== idList) return list;
      return {
        ...list,
        tasks: list.tasks.map((task) => {
          if (task.id !== id) return task;
          return {
            ...task,
            description,
          };
        }),
      };
    });
    setTaskLists(updatedTaskLists);
  };

  const addList = (title: string) => {
    const newList = {
      id: Date.now(), // génère un ID unique en utilisant la date actuelle
      title,
      tasks: [],
    };
    const updatedTaskLists = [...taskLists, newList];
    setTaskLists(updatedTaskLists);
  };

  const deleteList = (id: number) => {
    const updatedTaskLists = taskLists.filter((list) => list.id !== id);
    setTaskLists(updatedTaskLists);
  };

  const resetToInitialState = () => {
    setTaskLists(initialData);
  };

  return (
    <TaskContext.Provider
      value={{
        taskLists,
        addTask,
        updateTask,
        deleteTask,
        followTask,
        updateTaskDescription,
        addList,
        deleteList,
        resetToInitialState,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export default TaskProvider;
