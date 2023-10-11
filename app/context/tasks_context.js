import React, { useEffect, useContext, useReducer } from "react";
import reducer from "../reducers/tasks_reducer";
import {
  LOAD_TASKS,
  TASKS_ERROR,
  GET_TASKS,
  GET_RANDOM_TASKS,
  CREATE_TASK,
  EDIT_TASK,
  DELETE_TASK,
  DELETE_ALL_TASKS,
} from "../actions";

let initialState = {
  tasks: [],
  loading: false,
  error: false,
};

const TasksContext = React.createContext();

export const TasksProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchTasks = () => {
    dispatch({ type: LOAD_TASKS });
    dispatch({ type: GET_TASKS });
  };

  const fetchRandomTasks = async () => {
    dispatch({ type: LOAD_TASKS });
    try {
      const res = await fetch("/api/randomTasks");
      const data = await res.json();
      dispatch({ type: GET_RANDOM_TASKS, payload: data });
    } catch (error) {
      dispatch({ type: TASKS_ERROR });
    }
  };

  const createTask = (newTaskData) => {
    dispatch({ type: CREATE_TASK, payload: newTaskData });
  };

  const editTask = (taskId) => {
    dispatch({ type: EDIT_TASK, payload: taskId });
  };

  const deleteSingleTask = (taskId) => {
    dispatch({ type: DELETE_TASK, payload: taskId });
  };

  const deleteTasks = () => {
    dispatch({ type: DELETE_ALL_TASKS });
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <TasksContext.Provider
      value={{
        ...state,
        fetchRandomTasks,
        createTask,
        editTask,
        deleteSingleTask,
        deleteTasks,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
};

export const useTasksContext = () => {
  return useContext(TasksContext);
};
