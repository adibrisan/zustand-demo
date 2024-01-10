import { useStore } from "../store";

import styles from "./Task.module.css";

const Task = ({ title }) => {
  const task = useStore((store) =>
    store.tasks.find((task) => task.title === title)
  );
  const combinedClass = `${styles.status} ${styles[task.state]}`;
  return (
    <div className={styles.task}>
      <div>{task.title}</div>
      <div className={styles.bottomWrapper}>
        <div></div>
        <div className={combinedClass}>{task.state}</div>
      </div>
    </div>
  );
};

export default Task;
