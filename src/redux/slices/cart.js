import { createSlice } from '@reduxjs/toolkit';
import {
  addToCart,
  incrementProductQuantity,
  decrementProductQuantity,
  toggleShowCart,
} from '../reducers/cartReducers';

const initialState = {
  products: [],
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
