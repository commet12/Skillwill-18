import React from "react";
import { Route } from "react-router-dom";
import HomePage from "./HomePage";
import TaskListPage from "./TaskListPage";
import AddTaskPage from "./AddTaskPage";
import EditTaskPage from "./EditTaskPage";

const App = () => {
  return (
    <div>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/tasks" component={TaskListPage} />
      <Route exact path="/addTask" component={AddTaskPage} />
      <Route exact path="/editTask/:id" component={EditTaskPage} />
    </div>
  );
};

export default App;



