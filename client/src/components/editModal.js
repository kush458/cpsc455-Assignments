import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editItem } from "../redux/items/reducer";
import { editItemAsync } from "../redux/items/thunks";

const EditModal = (props) => {
    const items = useSelector(state => state.items.item_list);
    const item = items.find(i => i.id === props.itemId);
    const dispatch = useDispatch();

    const [itemInfo, setItemInfo] = useState(item);

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(editItemAsync({id: props.itemId, item: itemInfo}));
        props.setViewForm(false);
    }

    const resetForm = (event) => {
        event.preventDefault();
        setItemInfo(item);
    }

    return (
        props.viewForm ? (
            <div className="modal">
                <form id="itemForm" style={{width: "20vw"}} onSubmit={handleSubmit}>
                    <p id="formTitle">Edit Item</p>
                    <p id="formDesc">You have the freedom to edit and item! This form is for editing the {props.name} item</p>
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
                        <button type="submit" id="addItemButton" className="formButtons">Confirm Edit</button>
                        <button id="clearAllButton" className="formButtons" onClick={resetForm}>Reset</button>
                    </div>
                    <button id="deleteButton" onClick={() => props.setViewForm(false)}>X</button>
                </form>
            </div>
        ) : (
            <></>
        )
    );
}

export default EditModal;