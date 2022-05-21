import "./App.css";
import { useState } from "react";
import Task from "./components/Task";
import TaskList from "./components/TaskList";

export default function App() {
  const [taskLists, setTaskLists] = useState([]);
  const [emptyTask, setEmptytask] = useState(false);

  const TaskAddHandler = (task1, num1) => {
    setTaskLists((prevTaskLists) => {
      return [
        ...prevTaskLists,
        { title: task1, number: num1.toString(), id: Math.random().toString() },
      ];
    });
    setEmptytask(false);
    console.log(taskLists, "working");
  };

  return (
    <div className="App text-3xl">
      <h1>Task Manager</h1>
      <Task onAddTask={TaskAddHandler} />
      <section>
        <TaskList users={taskLists} />
        {!emptyTask && taskLists.length === 0 && <p>No Task Added.</p>}
      </section>
    </div>
  );
}
