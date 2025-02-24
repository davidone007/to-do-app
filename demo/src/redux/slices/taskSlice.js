import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
  currentFilter: "todas",
  searchQuery: "",
  categories: [
    { id: 1, name: "Personal", color: "#FF6B6B" },
    { id: 2, name: "Trabajo", color: "#4ECDC4" },
    { id: 3, name: "Estudio", color: "#45B7D1" },
  ],
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.unshift({
        id: Date.now(),
        ...action.payload,
        completed: false,
        createdAt: new Date().toISOString(),
      });
    },
    toggleTask: (state, action) => {
      const task = state.tasks.find((t) => t.id === action.payload);
      if (task) task.completed = !task.completed;
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((t) => t.id !== action.payload);
    },
    editTask: (state, action) => {
      const index = state.tasks.findIndex((t) => t.id === action.payload.id);
      if (index !== -1) state.tasks[index] = action.payload;
    },
    setFilter: (state, action) => {
      state.currentFilter = action.payload;
    },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload.toLowerCase();
    },
  },
});

export const {
  addTask,
  toggleTask,
  deleteTask,
  editTask,
  setFilter,
  setSearchQuery,
} = taskSlice.actions;
export default taskSlice.reducer;
