import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userList: [],

  currentId: 1,
};

export const gameState = createSlice({
  name: "user",
  initialState,
  reducers: {
    get: (state, action) => {
      const { id } = action.payload;

      return id ? state.userList[id] : state.userList;
    },
    add: (state, action) => {
      const { name, email, avatar } = action.payload;

      state.userList.push({ id: state.currentId, name, email, avatar });
      state.currentId++;
    },
    update: (state, action) => {
      const { id, name, email } = action.payload;

      console.log(id, name, email);

      state.userList.map((item) => {
        if (item.id === id) {
          item.name = name;
          item.email = email;
        }
      });
    },
    remove: (state, action) => {
      const { id } = action.payload;

      state.userList = state.userList.filter((item) => item.id !== id);
    },
  },
});

export const { get, add, update, remove } = gameState.actions;

export default gameState.reducer;
