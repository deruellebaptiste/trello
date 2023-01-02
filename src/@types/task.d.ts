export interface ITaskLists {
  id: number;
  title: string;
  tasks: ITask[];
}
export interface ITask {
    id: number;
    title: string;
    description: string;
    followed: boolean;
  }
  export type TaskContextType = {
    taskLists: ITaskLists[];
    addTask: (title: string, idList: number) => void;
    updateTask: (id: number) => void;
    deleteTask: (id:number, idList:number) => void;
    followTask: (id: number, idList: number, follow: boolean) => void;
    updateTaskDescription: (id: number, idList: number, description: string) => void
    addList: (title: string) => void;
    deleteList: (id: number) => void;
    resetToInitialState : () => void;
  };