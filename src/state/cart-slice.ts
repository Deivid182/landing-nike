import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { products } from '../constants';

export interface ItemCart {
  id: number;
  imgURL: string;
  name: string;
  price: number;
  rating: number;
  count: number;
}

interface CartState {
  items: ItemCart[];
  cart: ItemCart[];
  isOpen: boolean;
  total: number
}

const initialState: CartState = {
  items: products,
  cart: [],
  isOpen: false,
  total: 0
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    openCart: (state) => {
      state.isOpen = true;
    },
    closeCart: (state) => {
      state.isOpen = false;
    },

    setIsCartOpen: (state) => {
      state.isOpen = !state.isOpen;
    },
    addToCart: (state, action: PayloadAction<ItemCart>) => {
      if (state.cart.find((item) => item.id === action.payload.id)) {
        state.cart = state.cart.map((item) => item.id === action.payload.id ? action.payload : item);
      } else {
        state.cart.push(action.payload);
      }
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
    clearCart: (state) => {
      state.cart = [];
    },
    increaseCount: (state, action: PayloadAction<ItemCart>) => {
      const index = state.cart.findIndex((item) => item.id === action.payload.id);
      state.cart[index].count++;
    },
    decreaseCount: (state, action: PayloadAction<ItemCart>) => {
      const index = state.cart.findIndex((item) => item.id === action.payload.id);
      state.cart[index].count--;
    }
  }
})

export const { openCart, closeCart, setIsCartOpen, addToCart, removeFromCart, clearCart, increaseCount, decreaseCount } = cartSlice.actions;

export default cartSlice.reducer;