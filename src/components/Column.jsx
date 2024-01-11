import { useState } from "react";
import Task from "./Task";
import { useStore } from "../store";
import { shallow } from "zustand/shallow";

import styles from "./Column.module.css";

const Column = ({ state }) => {
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);
  const tasks = useStore(
    (store) => store.tasks.filter((task) => task.state === state),
    shallow
  );
  const addTask = useStore((store) => store.addTask);

  return (
    <div className={styles.column}>
      <div className={styles.titleWrapper}>
        <p>{state}</p>
        <button onClick={() => setOpen(true)}>Add</button>
      </div>
      {tasks.map((task, index) => (
        <Task key={index} title={task.title} />
      ))}
      {open && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <input
              type="text"
              onChange={(e) => setText(e.target.value)}
              value={text}
            />
            <button
              onClick={() => {
                addTask(text, state);
                setText("");
                setOpen(false);
              }}
            >
              Submit
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Column;
