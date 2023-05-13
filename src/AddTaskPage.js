import React from "react";
import TaskForm from "./TaskForm";
import { createTask } from "./api";

const AddTaskPage = ({ history }) => {

  const handleSubmit = async (newTask) => {
    await createTask(newTask);
    history.push("/");
  };

  return (
    <div>
      <h2>Add Task</h2>
      <TaskForm onSubmit={handleSubmit} />
    </div>
  );
};

export default AddTaskPage;

