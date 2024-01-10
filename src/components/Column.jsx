import Task from "./Task";

import styles from "./Column.module.css";
import { useStore } from "../store";
import { shallow } from "zustand/shallow";

const Column = ({ state }) => {
  const tasks = useStore(
    (store) => store.tasks.filter((task) => task.state === state),
    shallow
  );
  return (
    <div className={styles.column}>
      <p>{state}</p>
      {tasks.map((task, index) => (
        <Task key={index} title={task.title} />
      ))}
    </div>
  );
};

export default Column;
