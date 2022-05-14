import React, { useState } from "react";
import classes from "./Task.module.css";

const Task = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [num, setNum] = useState("");
  const [validForm, setValidForm] = useState(false);

  const addTaskHandler = (e) => {
    e.preventDefault();
    props.onAddTask(enteredName, num);
    setEnteredName("");
    setNum("");
    console.log(enteredName, num);
  };

  const nameChangeHandler = (e) => {
    setEnteredName(e.target.value);
    setValidForm(e.target.value.trim().length > 1);
  };

  const numChangeHandler = (e) => {
    setNum(e.target.value);
  };

  return (
    <React.Fragment>
      <form onSubmit={addTaskHandler} className={classes.listt}>
        <div>
          <input
            value={enteredName}
            onChange={nameChangeHandler}
            type="text"
            style={{ margin: "2rem" }}
          />
        </div>
        <div>
          <input value={num} onChange={numChangeHandler} type="date" />
        </div>
        <button type="submit" className={classes.button} disabled={!validForm}>
          Add task
        </button>
      </form>
    </React.Fragment>
  );
};

export default Task;
