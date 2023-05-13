import React from "react";
import { Link } from "react-router-dom";
import { updateTask, deleteTask } from "./api";

const Task = ({ task }) => {
  const { id, name, isCompleted } = task;

  const handleCheckboxChange = async () => {
    const updatedTask = { ...task, isCompleted: !isCompleted };
    await updateTask(updatedTask);
  };

  const handleDelete = async () => {
    await deleteTask(id);
  };

  return (
    <div>
      <input
        type="checkbox"
        checked={isCompleted}
        onChange={handleCheckboxChange}
      />
      <Link to={`/editTask/${id}`}>{name}</Link>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default Task;
