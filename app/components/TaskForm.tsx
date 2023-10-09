const TaskForm = ({ tasks, setTasks }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
    const formData = e.target;
    setTasks([...tasks], {
      task: formData[0].value,
      priority: formData[1].value,
      difficulty: formData[2].value,
      dueBy: formData[3].value,
      createdAt: new Date(),
    });
  };

  return (
    <form action="" onSubmit={(e) => handleSubmit(e)}>
      <input type="text" name="task" id="task" placeholder="Task" />
      <div>
        <select name="priority" id="priority">
          <option value="1">Eh</option>
          <option value="2">Low</option>
          <option value="3">Medium</option>
          <option value="4">High</option>
          <option value="5">Fatal</option>
        </select>
        <input
          type="number"
          name="difficulty"
          id="difficulty"
          max={10}
          min={1}
          placeholder="Difficulty"
        />
      </div>
      <input type="date" name="dueBy" id="dueBy" />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
