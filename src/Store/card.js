import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    card: 0,
}

export const cardSlice = createSlice({
    name: 'card',
    initialState,
    reducers: {
        addCardToStore: (state) => {

            state.card += 1
        },
        removeCardToStore: (state) => {
            state.card -= 1
        }
    },
})

export const { addCardToStore, removeCardToStore } = cardSlice.actions

export default cardSlice.reducer