import { loadTodos } from "../utils/localStorage";
import {createSlice} from "@reduxjs/toolkit";

let initialState = loadTodos();

const todoSlice = createSlice({
  name: "todo",
  initialState: initialState,
  reducers: {
    addTodo: (state, action) => {
      return { ...state, tasks: [...state.tasks, action.payload] };
    },
    delTodo: (state, action) => {
      const filtered = state.tasks.filter((e) => e.id !== action.payload);
      return { ...state, tasks: filtered };
    },
    changeStatus: (state, action) => {
      const updatedTasks = state.tasks.map((e) =>
        e.id === action.payload.id
          ? { ...e, completed: action.payload.check }
          : e,
      );
      return { ...state, tasks: updatedTasks };
    },
    filterTask: (state, action) => {
      return { ...state, filter: action.payload };
    },
  },
});

export const { addTodo, delTodo, changeStatus, filterTask } = todoSlice.actions;
export const todoReducer = todoSlice.reducer;