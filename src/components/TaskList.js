import React from "react";
import classes from "./TaskList.module.css";

const TaskList = (props) => {
  return (
    <React.Fragment>
      <ul className={classes.tasks}>
        {props.users.map((tasks) => (
          <li key={tasks.id}>
            {tasks.title} {tasks.number}
            {/* <button style={{ cursor: "pointer" }} key={tasks.id}>
              here
            </button> */}
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
};

export default TaskList;
