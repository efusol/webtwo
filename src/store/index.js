import { configureStore } from "@reduxjs/toolkit";
import userReducer from  '@/store/user.js'

const store = configureStore({
  reducer: {
    users: userReducer
  }
})

export default store;