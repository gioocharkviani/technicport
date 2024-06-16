import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

export interface Product {
  id: string;
  quantity: number;
  price?: number;
}

interface dbCartItems {
  productID: string;
  userId: string;
  quantity:number
}

interface CartState {
  products: Product[];
  itemsQty: number;
  totalPrice: number;
  user?: any;
}

// Save cart state to LOCAL STORAGE
const saveStateToLocalStorage = (state: CartState) => {
  try {
    if (typeof window !== 'undefined') {
      const serializedState = JSON.stringify(state);
      localStorage.setItem('Cart', serializedState);
    }
  } catch (err) {
    console.error('Could not save state to local storage', err);
  }
};

// Save cart state to DB
const saveStateToDb = async ({ productID, userId, quantity }: dbCartItems) => {
  try {
    await axios.post('/api/cart/save', {
      userId: userId,
      productId: productID,
      quantity: quantity
    });
  } catch (err) {
    console.error('Could not save state to database', err);
  }
};

// Load cart state from local storage if available
const loadState = (): CartState => {
  try {
    if (typeof window !== 'undefined') {
      const serializedState = localStorage.getItem('Cart');
      if (serializedState === null) {
        return { products: [], itemsQty: 0, totalPrice: 0 };
      }
      return JSON.parse(serializedState);
    }
  } catch (err) {
    console.error('Could not load state from local storage', err);
  }
  return { products: [], itemsQty: 0, totalPrice: 0 };
};

// Initial state
const initialState: CartState = {
  products: [],
  itemsQty: 0,
  totalPrice: 0,
  user: null,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {

    detectUser: (state, action: PayloadAction<any>) => {
      state.user = action.payload;
      if(!action.payload || state.user === null){
        const data = loadState();
        state.itemsQty = data.itemsQty;
        state.products = data.products;
        state.totalPrice = data.totalPrice;
      }
      if(action.payload !== undefined){
        state.user = action.payload.user;
        console.log(action.payload)
        let products:any = [];
        let qty:number = 0;
        let price = 0;
        action.payload.cartItems.forEach((e:any) => {
          products.push(e)
          qty += e.quantity
          price += e.product.price * e.quantity;
        });
        state.products = products;
        state.itemsQty = qty;
        state.totalPrice = price;
      };
    },

    addToCart: (state, action: PayloadAction<Product>) => {
      const productId = action.payload.id;
      const productPrice = action.payload.price || 0;
      const existingProduct = state.products.find(product => product.id === productId);
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.products.push({ id: productId, quantity: 1, price: productPrice });
      }
      state.totalPrice += productPrice;
      state.itemsQty += 1;
      if (state.user) {
        saveStateToDb({ productID: action.payload.id, userId: state.user.id , quantity:1});
      } else {
        saveStateToLocalStorage(state);
      }
    },

    changeQty: (state, action: PayloadAction<{id: string, quantity: number}>) => {
      const { id, quantity } = action.payload;
      if (state.user) {
        saveStateToDb({ productID: id, userId: state.user.id, quantity });
      } else {
        saveStateToLocalStorage(state);
      }
    },

  },
});

// Action creators are generated for each case reducer function
export const { addToCart, detectUser, changeQty } = cartSlice.actions;

export default cartSlice.reducer;
