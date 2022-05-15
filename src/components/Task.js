import React, { useState, useEffect } from "react";
import classes from "./Task.module.css";

const Task = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [num, setNum] = useState("");
  const [validForm, setValidForm] = useState(false);

  useEffect(() => {
    setValidForm(enteredName.trim().length > 0);
  }, [enteredName]);

  const addTaskHandler = (e) => {
    e.preventDefault();
    props.onAddTask(enteredName, num);
    setEnteredName("");
    setNum("");
    console.log(enteredName, num);
  };

  const nameChangeHandler = (e) => {
    setEnteredName(e.target.value);
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
            placeholder="Type here"
            style={{ margin: "1rem" }}
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
