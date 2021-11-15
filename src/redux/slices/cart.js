import { createSlice } from '@reduxjs/toolkit';
import {
  addToCart,
  incrementProductQuantity,
  decrementProductQuantity,
  toggleShowCart,
} from '../reducers/cartReducers';

const initialState = {
  products: [
    {
      id: 1,
      title: 'Test (Initial state product)',
      description: 'This is a first product - amazing!',
      quantity: 3,
      price: 6,
      total: 18,
    },
  ],
  showCart: false,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart,
    incrementProductQuantity,
    decrementProductQuantity,
    toggleShowCart,
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
