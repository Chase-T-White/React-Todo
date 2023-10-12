"use client";

import { useState } from "react";
import { useTasksContext } from "../context/tasks_context";
import TasksList from "./TasksList";
import TaskForm from "./TaskForm";

const TodoContainer = () => {
  const { tasks, fetchRandomTasks, createTask } = useTasksContext();
  const [isCreateTask, setIsCreateTask] = useState(false);
  const [isEditTask, setIsEditTask] = useState(false);
  return (
    <article className="min-h-[800px] h-80vh w-[800px] m-auto">
      <div className="w-full h-full flex flex-col items-center background-blur">
        <h1 className="mb-8 pt-4">Todo</h1>
        <div className="flex gap-12 mb-8">
          <button
            className={`btn ${tasks.length > 0 ? "disabled" : ""}`}
            disabled={tasks.length > 0 ? true : false}
            onClick={fetchRandomTasks}
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
        <div className="w-full px-12 grow">
          {isCreateTask || isEditTask ? (
            <TaskForm
              tasks={tasks}
              createTask={createTask}
              setIsCreateTask={setIsCreateTask}
            />
          ) : (
            <TasksList tasks={tasks} />
          )}
        </div>
      </div>
    </article>
  );
};

export default TodoContainer;
