import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

export interface Product {
  id: string;
  quantity: number;
  price?: number;
  title_ge:string,
  title_ru:string,
  title_en:string,
  checked:boolean,
  thumbnail: string,
}

interface dbCartItems {
  productID: string ;
  userId?: string;
  quantity:number
}

interface CartState {
  products: any[];
  itemsQty: number;
  checkedItems?:number,
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
const saveStateToDb = async ({ productID, quantity }: dbCartItems) => {
  try {
    await axios.post('/api/cart/save', {
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
        return { products: [], checkedItems:0, itemsQty: 0, totalPrice: 0 };
      }
      return JSON.parse(serializedState);
    }
  } catch (err) {
    console.error('Could not load state from local storage', err);
  }
  return { products: [], checkedItems:0, itemsQty: 0, totalPrice: 0 };
};

// Calculate total price of checked items
const calculateTotalPrice = (products: Product[]) => {
  return products.filter(p => p.checked).reduce((total, p:any) => total + (p.cartQty * p.price!), 0);
};

// Calculate checked total items
const calculateCheckedTotal = (products: Product[]) => {
  return products.filter(p => p.checked).reduce((total, p:any) => total + p.cartQty, 0);
};

// Initial state
const initialState: CartState = {
  products: [],
  itemsQty: 0,
  checkedItems: 0,
  totalPrice: 0,
  user: null,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {

    detectUser: (state, action: PayloadAction<any>) => {
      state.user = action.payload;
      if(!action.payload){
        const data = loadState();
        state.itemsQty = data.itemsQty;
        state.products = data.products;
        state.totalPrice = data.totalPrice;
        state.checkedItems = calculateCheckedTotal(state.products);
      }
      if(action.payload){
        state.user = action.payload.user;
        const cartItems = action.payload.cartItems;
        let product: Product[] = [];
        cartItems.forEach((i: any) => {
          product.push({ ...i.product, cartQty: i.quantity, checked: i.checked });
        });
        state.products = product;
        state.totalPrice = calculateTotalPrice(state.products);
        state.itemsQty = state.products.reduce((total, p) => total + p.cartQty, 0);
        state.checkedItems = calculateCheckedTotal(state.products);
      };
    },

    addToCart: (state, action: PayloadAction<Product>) => {
      const productId = action.payload.id;
      const productPrice = action.payload.price || 0;
      const title_ge = action.payload.title_ge;
      const thumbnail = action.payload.thumbnail;
      const title_en = action.payload.title_en;
      const title_ru = action.payload.title_ru;
      const quantity = action.payload.quantity;
      const existingProduct = state.products.find(product => product.id === productId);
      if (existingProduct) {
        existingProduct.cartQty += 1;
      } else {
        state.products.push({ id: productId, checked:true,  quantity: quantity , cartQty: 1, price: productPrice , thumbnail, title_en, title_ru , title_ge  });
      }
      state.totalPrice += productPrice;
      state.itemsQty += 1;
      if (state.user) {
        saveStateToDb({ productID: action.payload.id, quantity:1});
      } else {
        saveStateToLocalStorage(state);
      }
    },

    changeQty: (state, action: PayloadAction<{id: string, quantity: number}>) => {
      const { id, quantity } = action.payload;
      const existingProduct = state.products.find(product => product.id === id)
      if(existingProduct){
        state.totalPrice = calculateTotalPrice(state.products);
        state.checkedItems = calculateCheckedTotal(state.products);
        existingProduct.cartQty +=quantity;
        state.itemsQty +=quantity;
        if(quantity === 0){
          const filteredArray = state.products.filter(product => product.id !== id)
          state.products = filteredArray;
        }
        if(existingProduct.cartQty === 0 && quantity === -1){
          const filteredArray = state.products.filter(product => product.id !== id)
          state.products = filteredArray;
        }
        if(state.user){
          saveStateToDb({ productID: id, quantity });
        }
        if(!state.user){
          saveStateToLocalStorage(state)
        }
      }
    },

    checked:(state, action:PayloadAction<any>)=>{
      const { id, checked } = action.payload;
      const product = state.products.find(product => product.id === id);
      if(product){
        product.checked = checked;
      }
      state.totalPrice = calculateTotalPrice(state.products);
      state.checkedItems = calculateCheckedTotal(state.products);
      if(state.user){
        saveStateToDb({ productID: id, quantity:-10 });
      }
      if(!state.user){
        saveStateToLocalStorage(state)
      }
    },

  },
});

// Action creators are generated for each case reducer function
export const { addToCart, detectUser, changeQty ,checked } = cartSlice.actions;

export default cartSlice.reducer;
