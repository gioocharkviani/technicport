import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// Define the Product interface
export interface Product {
  id: string
  name: string
  price: number
  quantity: number
  image: any
}

// Define the CartState interface
export interface CartState {
  products: Product[]
  totalQuantity: number
  totalPrice: number 
}

// Check if running in the browser
const isBrowser = typeof window !== "undefined";

// Load cart state from local storage if available
const loadStateFromLocalStorage = (): CartState => {
  if (!isBrowser) return { products: [], totalQuantity: 0, totalPrice: 0 };
  
  try {
    const serializedState = localStorage.getItem('cart')
    if (serializedState === null) {
      return { products: [], totalQuantity: 0, totalPrice: 0 }
    }
    return JSON.parse(serializedState)
  } catch (err) {
    console.error('Could not load state from local storage', err)
    return { products: [], totalQuantity: 0, totalPrice: 0 }
  }
}

// Save cart state to local storage
const saveStateToLocalStorage = (state: CartState) => {
  if (!isBrowser) return;
  
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem('cart', serializedState)
  } catch (err) {
    console.error('Could not save state to local storage', err)
  }
}

const initialState: CartState = loadStateFromLocalStorage()

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {

    addToCart: (state, action: PayloadAction<Product>) => {
      const existingProduct = state.products.find(product => product.id === action.payload.id);
      if (existingProduct) {
        existingProduct.quantity += 1
      } else {
        state.products.push({ ...action.payload, quantity: 1 })
      }
      state.totalQuantity += 1
      state.totalPrice += action.payload.price
      saveStateToLocalStorage(state)
    },
    
    removeFromCart: (state, action: PayloadAction<string>) => {
      const existingProduct = state.products.find(product => product.id === action.payload)
      if (existingProduct) {
        state.totalQuantity -= existingProduct.quantity
        state.totalPrice -= existingProduct.price * existingProduct.quantity
        state.products = state.products.filter(product => product.id !== action.payload)
        saveStateToLocalStorage(state)
      }
    },

    clearCart: (state) => {
      state.products = []
      state.totalQuantity = 0
      state.totalPrice = 0
      saveStateToLocalStorage(state)
    },

    checkout: (state) => {
      state.products = []
      state.totalQuantity = 0
      state.totalPrice = 0
      // Additional logic for checkout can be added here
      saveStateToLocalStorage(state)
    },

    incrementQuantity: (state, action: PayloadAction<string>) => {
      const existingProduct = state.products.find(product => product.id === action.payload)
      if (existingProduct) {
        existingProduct.quantity += 1
        state.totalQuantity += 1
        state.totalPrice += existingProduct.price
        saveStateToLocalStorage(state)
      }
    },

    decrementQuantity: (state, action: PayloadAction<string>) => {
      const existingProduct = state.products.find(product => product.id === action.payload)
      if (existingProduct && existingProduct.quantity > 0) {
        existingProduct.quantity -= 1
        state.totalQuantity -= 1
        state.totalPrice -= existingProduct.price
        if (existingProduct.quantity === 0) {
          state.products = state.products.filter(product => product.id !== action.payload)
        }
        saveStateToLocalStorage(state)
      }
    }
  },
})

// Action creators are generated for each case reducer function
export const { addToCart, removeFromCart, clearCart, checkout, incrementQuantity, decrementQuantity } = cartSlice.actions

export default cartSlice.reducer
