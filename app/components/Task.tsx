import React from "react";

const Task = ({ task, priority, dueBy, difficulty, createdAt }) => {
  return (
    <li>
      <h5>{task}</h5>
      <div>
        <div>{priority}</div>
        <div>{dueBy}</div>
      </div>
    </li>
  );
};

export default Task;
