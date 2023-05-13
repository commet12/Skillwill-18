import React, { useState } from "react";

const TaskForm = ({ task, onSubmit }) => {
  const [name, setName] = useState(task ? task.name : "");
  const [isCompleted, setIsCompleted] = useState(task ? task.isCompleted : false);
  const [deadline, setDeadline] = useState(task ? task.deadline : "");
  const [assigneeFirstName, setAssigneeFirstName] = useState(task ? task.assigneeFirstName : "");
  const [assigneeLastName, setAssigneeLastName] = useState(task ? task.assigneeLastName : "");
  const [additionalInfo, setAdditionalInfo] = useState(task ? task.additionalInfo : "");

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({
      name,
      isCompleted,
      deadline,
      assigneeFirstName,
      assigneeLastName,
      additionalInfo,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Task name:</label>
        <input type="text" id="name" value={name} onChange={(event) => setName(event.target.value)} required />
      </div>
      <div>
        <label htmlFor="isCompleted">Completed:</label>
        <input type="checkbox" id="isCompleted" checked={isCompleted} onChange={(event) => setIsCompleted(event.target.checked)} />
      </div>
      <div>
        <label htmlFor="deadline">Deadline:</label>
        <input type="date" id="deadline" value={deadline} onChange={(event) => setDeadline(event.target.value)} />
      </div>
      <div>
        <label htmlFor="assigneeFirstName">Assignee first name:</label>
        <input type="text" id="assigneeFirstName" value={assigneeFirstName} onChange={(event) => setAssigneeFirstName(event.target.value)} />
      </div>
      <div>
        <label htmlFor="assigneeLastName">Assignee last name:</label>
        <input type="text" id="assigneeLastName" value={assigneeLastName} onChange={(event) => setAssigneeLastName(event.target.value)} />
      </div>
      <div>
        <label htmlFor="additionalInfo">Additional information:</label>
        <textarea id="additionalInfo" value={additionalInfo} onChange={(event) => setAdditionalInfo(event.target.value)} />
      </div>
      <button type="submit">{task ? "Save Changes" : "Add Task"}</button>
    </form>
  );
};

export default TaskForm;
