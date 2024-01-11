import { useStore } from "../store";
import trash from "../assets/trash-2.svg";

import styles from "./Task.module.css";

const Task = ({ title }) => {
  const task = useStore((store) =>
    store.tasks.find((task) => task.title === title)
  );
  const deleteTask = useStore((store) => store.deleteTask);
  const setDraggedTask = useStore((store) => store.setDraggedTask);

  const combinedClass = `${styles.status} ${styles[task.state]}`;
  return (
    <div
      className={styles.task}
      draggable
      onDragStart={() => setDraggedTask(task.title)}
    >
      <div>{task.title}</div>
      <div className={styles.bottomWrapper}>
        <div>
          <img
            src={trash}
            alt="trash icon"
            onClick={() => deleteTask(task.title)}
          />
        </div>
        <div className={combinedClass}>{task.state}</div>
      </div>
    </div>
  );
};

export default Task;
