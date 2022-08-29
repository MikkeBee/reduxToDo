import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todo",
  initialState: [],
  reducers: {
    addItem: (state, action) => {
      const newTask = {
        id: Math.random(),
        content: action.payload,
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
