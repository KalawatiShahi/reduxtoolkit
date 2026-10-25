import { createSlice } from "@reduxjs/toolkit";

const addToCart = createSlice({
    name: 'cart',
    initialState,
    reducers:{
        addItem:(state)=>{
            state.value += 1;
        },
        removeItem:(state)=>{
            state.value -=1;
        },
        clearAllItems:(state)=>{
            state.value = 0;
        }
    }
})

export const {addItem, removeItem, clearAllItems} = addToCart.actions;
export default addToCart.reducer;
