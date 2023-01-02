import * as React from "react";
import { TaskContextType, ITask, ITaskLists } from "../@types/task";
import { render, fireEvent, waitFor } from "@testing-library/react";
import TaskProvider, { TaskContext } from "./taskContext";

test("deleteTask", () => {
  const { getByTestId } = render(
    <TaskProvider>
      <TaskContext.Consumer>
        {(context: any) => (
          <button
            data-testid="delete-task"
            onClick={() => context.deleteTask(1, 1)}
          >
            Delete Task
          </button>
        )}
      </TaskContext.Consumer>
    </TaskProvider>
  );
  fireEvent.click(getByTestId("delete-task"));

  expect(() => getByTestId("task1")).toThrow();
});

test("followTask", () => {
  const { getByTestId, getByText } = render(
    <TaskProvider>
      <TaskContext.Consumer>
        {(context: any) => (
          <button
            data-testid="follow-task"
            onClick={() => context.followTask(1, 1, false)}
          >
            Follow Task
          </button>
        )}
      </TaskContext.Consumer>
    </TaskProvider>
  );
  fireEvent.click(getByTestId("follow-task"));

  // expect(getByText("followed")).toBeInTheDocument();
});

test("updateTaskDescription", () => {
  const { getByTestId } = render(
    <TaskProvider>
      <TaskContext.Consumer>
        {(context) => (
          <button
            data-testid="update-task-description"
            onClick={() =>
              context?.updateTaskDescription(1, 1, "new description")
            }
          >
            Update Task Description
          </button>
        )}
      </TaskContext.Consumer>
    </TaskProvider>
  );
  fireEvent.click(getByTestId("update-task-description"));
});

test("addList", () => {
  const { getByTestId, getByText } = render(
    <TaskProvider>
      <TaskContext.Consumer>
        {(context) => (
          <button
            data-testid="add-list"
            onClick={() => context?.addList("list3")}
          >
            Add List
          </button>
        )}
      </TaskContext.Consumer>
    </TaskProvider>
  );
  fireEvent.click(getByTestId("add-list"));
});

test("deleteList", () => {
  const { getByTestId } = render(
    <TaskProvider>
      <TaskContext.Consumer>
        {(context) => (
          <button
            data-testid="delete-list"
            onClick={() => context?.deleteList(1)}
          >
            Delete List
          </button>
        )}
      </TaskContext.Consumer>
    </TaskProvider>
  );
  fireEvent.click(getByTestId("delete-list"));

  expect(() => getByTestId("list1")).toThrow();
});

test("resetToInitialState", () => {
  const { getByTestId } = render(
    <TaskProvider>
      <TaskContext.Consumer>
        {(context) => (
          <button
            data-testid="reset-to-initial-state"
            onClick={() => context?.resetToInitialState()}
          >
            Reset To Initial State
          </button>
        )}
      </TaskContext.Consumer>
    </TaskProvider>
  );
  fireEvent.click(getByTestId("reset-to-initial-state"));
});
