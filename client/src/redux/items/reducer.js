import { createSlice } from "@reduxjs/toolkit"
import { addItemAsync, getItemsAsync } from "./thunks";
import { REQUEST_STATE } from "../utils";

const INIT_STATE = {
    item_list: [],
    getItems: REQUEST_STATE.IDLE,
    addItem: REQUEST_STATE.IDLE,
    error: null,
}

const itemSlice = createSlice({
    name: 'items',
    initialState: INIT_STATE,
    reducers: {
        addItem: (state, action) => {
            state.item_list.push(action.payload);
        },
        deleteAllItems: (state, action) => {
            state.item_list.length = 0;
        },
        editItem: (state, action) => {
            const idx = action.payload.index;
            const modItem = action.payload.item;
            
            state.item_list[idx] = modItem;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getItemsAsync.pending, (state) => {
                state.getItems = REQUEST_STATE.PENDING;
                state.error = null;
            })
            .addCase(getItemsAsync.fulfilled, (state, action) => {
                state.getItems = REQUEST_STATE.FULFILLED;
                state.item_list = action.payload;
            })
            .addCase(getItemsAsync.rejected, (state, action) => {
                state.getItems = REQUEST_STATE.REJECETD;
                state.error = action.error;
            })
            .addCase(addItemAsync.pending, (state) => {
                state.addItem = REQUEST_STATE.PENDING;
                state.error = null
            })
            .addCase(addItemAsync.fulfilled, (state, action) => {
                state.addItem = REQUEST_STATE.FULFILLED;
                state.item_list.push(action.payload);
            })
            .addCase(addItemAsync.rejected, (state, action) => {
                state.addItem = REQUEST_STATE.REJECETD;
                state.error = action.error;
            })
    },
})

// create slice automatically creates an item that corresponds to a reducer
export const { addItem, deleteAllItems, editItem } = itemSlice.actions;

export default itemSlice.reducer;