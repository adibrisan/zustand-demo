import { create } from "zustand";

const store = (set) => ({
  tasks: [{ title: "TestTask", state: "ONGOING" }],
  addTask: (title, state) =>
    set((prevData) => ({ tasks: [...prevData.tasks, { title, state }] })),
  deleteTask: (title) =>
    set((prevData) => ({
      tasks: prevData.tasks.filter((task) => task.title !== title),
    })),
});

export const useStore = create(store);
