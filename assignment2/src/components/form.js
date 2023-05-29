import React from 'react';

const Form = (props) => {
    return (
        <>
            <form id="itemForm">
                <p id="formTitle">Item Details</p>
                <p id="formDesc">Kindly fill in the following details in order to add an item to the inventory.</p>
                <input type="text" id="itemName" placeholder="Item Name" autocomplete="off" required/>
                <input type="number" id="itemPrice" placeholder="Item Price" step="0.01" min="0" autocomplete="off" required/>
                <input type="url" id="itemImg" placeholder="Item Image (please enter a URL)" autocomplete="off" required/>
                <input type="text" id="itemDesc" placeholder="Item Description" autocomplete="off" required/>
                <div class="formButtonContainer">
                    <button type="submit" id="addItemButton" class="formButtons">Add Item</button>
                    <button id="clearAllButton" class="formButtons">Clear all</button>
                </div>
            </form>
            <button id="deleteAllButton">Delete All Cards</button>
        </>
    );
}

// export default means exporting only one thing
export default Form;