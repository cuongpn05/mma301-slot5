import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
  name: "tasks",

  initialState: [],

  reducers: {
    // Thêm task
    add: (state, action) => {
      state.push({
        id: Date.now(),
        text: action.payload,
        done: false,
      });
    },

    // Done / Undone task
    toggle: (state, action) => {
      const task = state.find((t) => t.id === action.payload);

      if (task) {
        task.done = !task.done;
      }
    },

    // Xóa task
    remove: (state, action) => {
      const index = state.findIndex((t) => t.id === action.payload);

      if (index > -1) {
        state.splice(index, 1);
      }
    },
  },
});

export const { add, toggle, remove } = taskSlice.actions;

export default taskSlice.reducer;
