import { createAsyncThunk } from '@reduxjs/toolkit';
import { actionTypes } from './actionTypes';
import ItemService from './service';

export const getItemsAsync = createAsyncThunk(
    actionTypes.GET_ITEMS,
    async () => {
        return await ItemService.getItems();
    }
);

export const addItemAsync = createAsyncThunk(
    actionTypes.ADD_ITEM,
    async (item) => {
        return await ItemService.addItem(item);
    }
);

export const deleteItemAsync = createAsyncThunk(
    actionTypes.DELETE_ITEM,
    async (itemId) => {
        return await ItemService.deleteItem(itemId);
    }
);

export const editItemAsync = createAsyncThunk(
    actionTypes.EDIT_ITEM,
    async (item) => {
        return await ItemService.editItem(item);
    }
);

export const sortItemsAsync = createAsyncThunk(
    actionTypes.SORT_ITEMS,
    async (criterion) => {
        return await ItemService.sortItems(criterion);
    }
);