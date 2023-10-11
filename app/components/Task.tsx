import React from "react";

const Task = ({ task, priority, dueBy, difficulty, createdAt }) => {
  const currentDay = new Date().getDate();
  console.log(currentDay);
  return (
    <li className="flex justify-between">
      <h5>{task}</h5>
      <div>
        <div>{priority}</div>
        <div>{dueBy}</div>
      </div>
    </li>
  );
};

export default Task;
