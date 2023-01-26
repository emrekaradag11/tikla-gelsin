import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isLogin: false,
  cart: [],
}

export const reducerSlice = createSlice({
  name: 'appReducer',
  initialState: initialState,
  reducers: {
    setLogin: (state, action) => {
      state.isLogin = action.payload
    },
    addCart: (state, action) => {
      state.cart = [
        action.payload,
        ...state.cart,
      ]
    },
    emptyCart: (state, action) => {
      state.cart = []
    },
    removeCart: (state, action) => {
      state.cart = state.cart.filter(item => item.id !== action.payload)
    },
    incrementQuantity: (state, action) => {
      state.cart = state.cart.map((item) => {
        if (item.id === action.payload.id) {
          item.quantity += action.payload.quantity;
        }
        return item;
      })
    },
    decrementQuantity: (state, action) => {
      state.cart = state.cart.map((item) => {
        if (item.id === action.payload.id) {
          item.quantity -= action.payload.quantity;
        }
        return item;
      })
    },
  }
})

// Action creators are generated for each case reducer function
export const { setLogin, addCart, incrementQuantity, decrementQuantity, removeCart, emptyCart } = reducerSlice.actions

export default reducerSlice.reducer