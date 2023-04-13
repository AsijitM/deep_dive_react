//Slice literally means to slicing data in small pieces and storing them for later use

// make a initial state
// import createSlice from redux
// reducers will contain the functions we need to use to change the state(these are pure functions)

import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add(state, action) {
      // return [...state, action.payload]
      state.push(action.payload);
    },
    remove(state, action) {
    return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;
