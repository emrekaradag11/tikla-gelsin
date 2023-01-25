import { createSlice } from '@reduxjs/toolkit'

export const reducerSlice = createSlice({
  name: 'appReducer',
  initialState: {
    isLogin: false
  },
  reducers: {
    setLogin: (state,action) => {
      state.isLogin = action.payload
    },
  }
})

// Action creators are generated for each case reducer function
export const { setLogin } = reducerSlice.actions

export default reducerSlice.reducer