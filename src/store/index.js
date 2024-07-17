import { configureStore } from "@reduxjs/toolkit";
import userReducer from  '@/store/user.js'
import playerReducer from '@/store/player'
import boardReducer from '@/store/board'

const store = configureStore({
  reducer: {
    players: playerReducer,
    users: userReducer,
    boards : boardReducer
  }
})

export default store;