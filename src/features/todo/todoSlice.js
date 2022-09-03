import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addItem: (state, action) => {
      const newTask = {
        id: Math.random() * 100,
        content: action.payload.todo,
      };
      state.push(newTask);
    },
    deleteItem: (state, action) => {
      return state.filter((item) => item.id !== action.payload.id);
    },
  },
});

export const { addItem, deleteItem } = todoSlice.actions;

export default todoSlice.reducer;
