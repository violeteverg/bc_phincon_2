import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Theme {
  mode: "light" | "dark";
}

interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

interface TodoState {
  todos: Todo[];
  filter: "all" | "active" | "completed";
  theme: Theme;
}

const initialState: TodoState = {
  todos: [],
  filter: "all",
  theme: { mode: "light" },
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (
      state,
      action: PayloadAction<{ text: string; completed: boolean }>
    ) => {
      state.todos.push({
        id: new Date().toISOString(),
        text: action.payload.text,
        completed: action.payload.completed,
      });
    },
    toggleTodo: (state, action: PayloadAction<string>) => {
      const todo = state.todos.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    deleteTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    clearCompleted: (state) => {
      state.todos = state.todos.filter((todo) => !todo.completed);
    },
    setFilter: (
      state,
      action: PayloadAction<"all" | "active" | "completed">
    ) => {
      state.filter = action.payload;
    },

    toggleTheme: (state) => {
      state.theme.mode = state.theme.mode === "light" ? "dark" : "light";
    },
  },
});

export const {
  addTodo,
  toggleTodo,
  deleteTodo,
  clearCompleted,
  setFilter,

  toggleTheme,
} = todoSlice.actions;
export default todoSlice.reducer;
