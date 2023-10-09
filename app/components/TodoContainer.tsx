"use client";

import { useState } from "react";
import TasksList from "./TasksList";
import TaskForm from "./TaskForm";
import fetchRandomTasks from "../functions/fetchRandomTasks";

const TodoContainer = () => {
  const [tasks, setTasks] = useState([]);
  const [isCreateTask, setIsCreateTask] = useState(false);
  const [isEditTask, setIsEditTask] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  return (
    <article className="min-h-[700px] h-80vh w-[500px] m-auto">
      <div className="w-full h-full flex flex-col items-center background-blur">
        <h1 className="mb-8 pt-4">Todo</h1>
        <div className="flex gap-12 mb-8">
          <button
            className={`btn ${tasks.length > 0 ? "disabled" : ""}`}
            disabled={tasks.length > 0 ? true : false}
            onClick={() => fetchRandomTasks(setTasks, setIsLoading, setIsError)}
          >
            Load Random Tasks
          </button>
          <button
            className={`btn ${isCreateTask ? "disabled" : ""}`}
            disabled={isCreateTask}
            onClick={() => setIsCreateTask(true)}
          >
            Create Task
          </button>
        </div>
        <div className="grow">
          {isCreateTask || isEditTask ? (
            <TaskForm tasks={tasks} setTasks={setTasks} />
          ) : (
            <TasksList tasks={tasks} />
          )}
        </div>
      </div>
    </article>
  );
};

export default TodoContainer;
