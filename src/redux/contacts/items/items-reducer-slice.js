import { createSlice } from "@reduxjs/toolkit";

const itemsReducer = createSlice({
  name: "items",
  initialState: [],
  reducers: {
    add: (store, { payload }) => [...store, payload],
    remove: (store, { payload }) => [
      ...store.filter((el) => el.id !== payload),
    ],
  },
});

export const { add, remove } = itemsReducer.actions;

export default itemsReducer.reducer;
