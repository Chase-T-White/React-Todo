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

const tasks_reducer = (state, action) => {
  switch (action.type) {
    case LOAD_TASKS:
      return { ...state, loading: true };
    case TASKS_ERROR:
      return { ...state, loading: false, error: true };
    case GET_TASKS:
      // check local storage for tasks
      if (window.localStorage.getItem("tasks")) {
        let tasksArray = JSON.parse(window.localStorage.getItem("tasks"));
        return {
          ...state,
          tasks: tasksArray,
          loading: false,
        };
      }

      return { ...state, loading: false };
    case GET_RANDOM_TASKS:
      return { ...state, tasks: action.payload };
    case CREATE_TASK:
      const newTask = {
        task: action.payload[0].value,
        priority: action.payload[1].value,
        difficulty: action.payload[2].value,
        dueBy: action.payload[3].value,
        createdAt: new Date(),
      };

      // window.localStorage.setItem("tasks", JSON.stringify([...tasks, newTask]));

      return { ...state, tasks: [...state.tasks, newTask] };
    default:
      break;
  }
};

export default tasks_reducer;
