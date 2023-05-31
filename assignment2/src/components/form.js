import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem, deleteAllItems } from '../redux/items/reducer';

const Form = (props) => {
    const initialState = {
        name: '',
        price: '',
        imageURL: '',
        description: '',
    }

    const [itemInfo, setItemInfo] = useState(initialState);

    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();

        dispatch(addItem(itemInfo));

        setItemInfo(initialState);

        window.scrollTo(0, document.documentElement.scrollHeight);
    }

    const clearAll = () => {

        setItemInfo(initialState);

    }

    const deleteAll = () => {

        dispatch(deleteAllItems());

    }


    return (
        <>
            <form id="itemForm" onSubmit={handleSubmit}>
                <p id="formTitle">Item Details</p>
                <p id="formDesc">Kindly fill in the following details in order to add an item to the inventory.</p>
                <input type="text" id="itemName" placeholder="Item Name" autoComplete='off' value={itemInfo.name} onChange={(e) => {
                    setItemInfo({...itemInfo, name: e.target.value});
                }} required/>
                <input type="number" id="itemPrice" placeholder="Item Price" step="0.01" min="0" autoComplete="off" value={itemInfo.price} onChange={(e) => {
                    setItemInfo({...itemInfo, price: e.target.value});
                }} required/>
                <input type="url" id="itemImg" placeholder="Item Image (please enter a URL)" autoComplete="off" value={itemInfo.imageURL} onChange={(e) => {
                    setItemInfo({...itemInfo, imageURL: e.target.value});
                }} required/>
                <input type="text" id="itemDesc" placeholder="Item Description" autoComplete="off" value={itemInfo.description} onChange={(e) => {
                    setItemInfo({...itemInfo, description: e.target.value});
                }} required/>
                <div className="formButtonContainer">
                    <button type="submit" id="addItemButton" className="formButtons">Add Item</button>
                    <button id="clearAllButton" className="formButtons" onClick={clearAll}>Clear all</button>
                </div>
            </form>
            <button id="deleteAllButton" onClick={deleteAll}>Delete All Cards</button>
        </>
    );
}

// export default means exporting only one thing
export default Form;