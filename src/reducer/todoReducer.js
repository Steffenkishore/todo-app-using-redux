import { loadTodos } from "../utils/localStorage";

let initialState = loadTodos();

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return { ...state, tasks: [...state.tasks, action.payload] };
    case "DEL_TODO":
      const filtered = state.tasks.filter((e) => e.id !== action.payload);
      return { ...state, tasks: filtered };
    case "CHANGE_STATUS":
      const updatedTasks = state.tasks.map((e) =>
        e.id === action.payload.id
          ? { ...e, completed: action.payload.check }
          : e,
      );
      return { ...state, tasks: updatedTasks };
    case "FILTER_TASK":
      return { ...state, filter: action.payload };
    default:
      return state;
  }
};
