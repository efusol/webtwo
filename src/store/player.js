<<<<<<< HEAD
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const playerSlice = createSlice({
    name : 'players',
    initialState : {
        players : [],
        category : 'all'
    },
    reducers : {
        initPlayers(state, action) {
            state.players = action.payload
        },
        onChangeCategory(state, action) {
            state.category = action.payload
        }
    }
})

export const {initPlayers,onChangeCategory} = playerSlice.actions;

export const fetchPlayers = ()=> async dispatch => {
    try {
        const response = await axios.get('./assets/data/player.json')
        console.log(response)
        dispatch(initPlayers(response.data))
    } catch (error) {
        console.error('Error fetching players:', error);
    }
}
=======
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const playerSlice = createSlice({
    name : 'players',
    initialState : {
        players : [],
        category : 'all'
    },
    reducers : {
        initPlayers(state, action) {
            state.players = action.payload
        },
        onChangeCategory(state, action) {
            state.category = action.payload
        }
    }
})

export const {initPlayers,onChangeCategory} = playerSlice.actions;

export const fetchPlayers = ()=> async dispatch => {
    try {
        const response = await axios.get('./assets/data/player.json')
        console.log(response)
        dispatch(initPlayers(response.data))
    } catch (error) {
        console.error('Error fetching players:', error);
    }
}
>>>>>>> 71b8b413b527492051f0451b2380e3298614cd9b
export default playerSlice.reducer;