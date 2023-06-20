import { createSlice } from "@reduxjs/toolkit"
import { addItemAsync, deleteItemAsync, editItemAsync, getItemsAsync, sortItemsAsync } from "./thunks";
import { REQUEST_STATE } from "../utils";

const INIT_STATE = {
    item_list: [],
    getItems: REQUEST_STATE.IDLE,
    addItem: REQUEST_STATE.IDLE,
    deleteItem: REQUEST_STATE.IDLE,
    editItem: REQUEST_STATE.IDLE,
    sortItem: REQUEST_STATE.IDLE,
    error: null,
}

const itemSlice = createSlice({
    name: 'items',
    initialState: INIT_STATE,
    reducers: {},
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
            .addCase(deleteItemAsync.pending, (state) => {
                state.deleteItem = REQUEST_STATE.PENDING;
                state.error = null;
            })
            .addCase(deleteItemAsync.fulfilled, (state, action) => {
                state.deleteItem = REQUEST_STATE.FULFILLED;
                state.item_list = state.item_list.filter(item => item.id !== action.payload);
            })
            .addCase(deleteItemAsync.rejected, (state, action) => {
                state.deleteItem = REQUEST_STATE.REJECETD;
                state.error = action.error;
            })
            .addCase(editItemAsync.pending, (state) => {
                state.editItem = REQUEST_STATE.PENDING;
                state.error = null;
            })
            .addCase(editItemAsync.fulfilled, (state, action) => {
                state.editItem = REQUEST_STATE.FULFILLED;

                const idx = state.item_list.findIndex(item => item.id === action.payload.id);
                state.item_list[idx] = action.payload;
            })
            .addCase(editItemAsync.rejected, (state, action) => {
                state.editItem = REQUEST_STATE.REJECETD;
                state.error = action.error;
            })
            .addCase(sortItemsAsync.pending, (state) => {
                state.sortItem = REQUEST_STATE.PENDING;
                state.error = null;
            })
            .addCase(sortItemsAsync.fulfilled, (state, action) => {
                state.sortItem = REQUEST_STATE.FULFILLED;
                state.item_list = action.payload;
            })
            .addCase(sortItemsAsync.rejected, (state, action) => {
                state.sortItem = REQUEST_STATE.REJECETD;
                state.error = action.error;
            })
    },
})

// create slice automatically creates an item that corresponds to a reducer
export const { addItem, deleteAllItems, editItem } = itemSlice.actions;

export default itemSlice.reducer;