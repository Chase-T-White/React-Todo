import React from "react";
import Task from "./Task";

const TasksList = ({ tasks }) => {
  return (
    <ul className="w-full flex flex-col gap-4">
      {!tasks ? (
        <h4>No Tasks to display</h4>
      ) : (
        tasks.map((task) => {
          return <Task key={task.id} {...task} />;
        })
      )}
    </ul>
  );
};

export default TasksList;
