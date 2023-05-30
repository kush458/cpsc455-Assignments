import React from "react";

import { useSelector } from 'react-redux';

const Inventory = (props) => {

    const items = useSelector(state => state.items.item_list);

    return (
        <div class="inventory">
            <div class="searchBar">
                <input type="text" id="searchInput" placeholder="Search...🔍"/>
            </div>
            {items && items.map((item) => 
                <div className="itemCard">
                    <img key={item.name} src={item.imageURL} alt={item.name}/>
                    <div key={item.name} class="infoContainer">
                        <div key={item.name} class="nameAndPrice">
                            <div key={item.name} class="topInfo">
                                <p>Name</p>
                                <p class="itemName">{item.name}</p>
                            </div>
                            <div key={item.name} class="topInfo">
                                <p>Price</p>
                                <p>${item.price}</p>
                            </div>
                        </div>
                        <div key={item.name} class="topInfo">
                            <p>Description</p>
                            <p>{item.description}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Inventory;