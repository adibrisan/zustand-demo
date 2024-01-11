import { create } from "zustand";

const store = (set) => ({
  tasks: [{ title: "TestTask", state: "ONGOING" }],
  draggedTask: null,
  addTask: (title, state) =>
    set((prevData) => ({ tasks: [...prevData.tasks, { title, state }] })),
  deleteTask: (title) =>
    set((prevData) => ({
      tasks: prevData.tasks.filter((task) => task.title !== title),
    })),
  setDraggedTask: (title) => set({ draggedTask: title }),
  moveTask: (title, state) =>
    set((prevData) => ({
      tasks: prevData.tasks.map((task) =>
        task.title === title ? { title, state } : task
      ),
    })),
});

export const useStore = create(store);
