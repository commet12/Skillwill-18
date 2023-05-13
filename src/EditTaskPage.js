import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import TaskForm from "./TaskForm";
import { getTask, updateTask } from "./api";

const EditTaskPage = () => {
  const { id } = useParams();
  const [task, setTask] = useState(null);

  useEffect(() => {
    const fetchTask = async () => {
      const data = await getTask(id);
      setTask(data);
    };
    fetchTask();
  }, [id]);

  const handleSubmit = async (updatedTask) => {
    await updateTask(id, updatedTask);
    window.location = "/";
  };

  return (
    <div>
      <h2>Edit Task</h2>
      {task ? <TaskForm task={task} onSubmit={handleSubmit} /> : <p>Loading...</p>}
    </div>
  );
};

export default EditTaskPage;

