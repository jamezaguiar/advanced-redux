import { configureStore } from '@reduxjs/toolkit';
import cart from './slices/cart';

const store = configureStore({
  reducer: { cart },
});

export default store;
