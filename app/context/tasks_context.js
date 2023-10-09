import React, { useContext, useReducer } from "react";
import reducer from '../reducers/tasks_reducer';
import {
  SET_LOADING,
  SET_ERROR,
  GET_TASKS,
  CREATE_TASK,
  EDIT_TASK,
  DELETE_TASK,
  DELETE_ALL_TASKS,
} from "../actions";

const initialState = {
  tasks = [],
}

const TasksContext = React.createContext();

export const TasksProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchTasks = () => {
    dispatch({type: GET_TASKS})
  }
}