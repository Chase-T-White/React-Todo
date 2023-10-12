import React from "react";
import healthBarTimer from "../functions/healthBarTimer";
import { create } from "domain";

const Task = ({ task, priority, dueBy, difficulty, createdAt }) => {
  const [healthBarRemaining, headsUpMessage] = healthBarTimer(dueBy, createdAt);
  console.log(healthBarRemaining, headsUpMessage);

  return (
    <li
      style={{
        backgroundImage: `linear-gradient(to right, green 0 ${healthBarRemaining}%, red ${healthBarRemaining}% 100%)`,
      }}
      className="relative flex justify-between border-4 border-solid border-stone-800 p-2"
    >
      <h5>{task}</h5>
      <div>
        <div>{priority}</div>
        <div>{dueBy}</div>
      </div>
      {headsUpMessage !== null && (
        <h6 className="absolute right-0 -top-6">{headsUpMessage}</h6>
      )}
    </li>
  );
};

export default Task;
