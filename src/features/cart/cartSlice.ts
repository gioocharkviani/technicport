'use client'
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { useSession } from 'next-auth/react';

export interface Product {
  id: string;
  quantity: number;
  price?:number,
}

interface CartState {
  products: Product[];
  itemsQty: number;
  totalPrice: number;
}

// Save cart state to DB or LOCAL STORAGE
const saveStateToLocalStorage = async (state: CartState) => {
  const {data} = useSession();
  console.log(data)
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('Cart', serializedState);
  } catch (err) {
    console.error('Could not save state to local storage', err);
  }
};

// Load cart state from local storage if available
const loadState = (): CartState => {
  try {
    const serializedState = localStorage.getItem('Cart');
    if (serializedState === null) {
      return { products: [], itemsQty: 0, totalPrice: 0 };
    }
    return JSON.parse(serializedState);
  } catch (err) {
    console.error('Could not load state from local storage', err);
    return { products: [], itemsQty: 0, totalPrice: 0 };
  }
};

// Initial state
const initialState: CartState = loadState();


export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {

    addToCart: (state, action: PayloadAction<Product>) => {
      const productId = action.payload.id;
      const productPrice = action.payload.price || 0; 
      const existingProduct = state.products.find(product => product.id === productId);
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.products.push({ id: productId, quantity: 1 });
      }
      state.totalPrice += productPrice;
      state.itemsQty += 1;
      saveStateToLocalStorage(state)
    },

  },
});

// Action creators are generated for each case reducer function
export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
