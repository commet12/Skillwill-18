const BASE_URL = "https://crudapi.co.uk/api/v1/";

export const getAllTasks = async () => {
  const response = await fetch(BASE_URL + "tasks");
  const data = await response.json();
  return data;
};

export const getTaskById = async (id) => {
  const response = await fetch(BASE_URL + `tasks/${id}`);
  const data = await response.json();
  return data;
};

export const addTask = async (task) => {
  const response = await fetch(BASE_URL + "tasks", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(task),
  });
  const data = await response.json();
  return data;
};

export const updateTask = async (id, task) => {
  const response = await fetch(BASE_URL + `tasks/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(task),
  });
  const data = await response.json();
  return data;
};
export const createTask = async (taskData) => {
    try {
      const response = await fetch('/api/tasks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(taskData),
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
      throw new Error('Failed to create task');
    }
  };
  export const getTask = async (taskId) => {
    try {
      const response = await fetch(`/api/tasks/${taskId}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
      throw new Error(`Failed to get task with ID ${taskId}`);
    }
  };
    

export const deleteTask = async (id) => {
  const response = await fetch(BASE_URL + `tasks/${id}`, {
    method: "DELETE",
  });
  const data = await response.json();
  return data;
};
