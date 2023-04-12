import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';

const store = configureStore({
  reducer: {
    cart: cartReducer,
    // product: productReducer,
  },
});

export default store;
