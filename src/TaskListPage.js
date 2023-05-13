import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getAllTasks } from "./api";
import Task from "./Task";

const TaskListPage = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getAllTasks();
      setTasks(result);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>My Tasks</h1>
      <Link to="/addTask">Add Task</Link>
      {tasks.length > 0 ? (
        <div>
          {tasks.map((task) => (
            <Task key={task.id} task={task} />
          ))}
        </div>
      ) : (
        <p>No tasks to display</p>
      )}
    </div>
  );
};

export default TaskListPage;
