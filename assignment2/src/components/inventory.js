import React from "react";

import { useSelector } from 'react-redux';
import SearchBar from "./search";

const Inventory = (props) => {

    const items = useSelector(state => state.items.item_list);

    return (
        <div className="inventory">
            <SearchBar />
            {items && items.map((item) => 
                <div key={item.name} className="itemCard">
                    <img key={item.name} src={item.imageURL} alt={item.name}/>
                    <div key={item.name} className="infoContainer">
                        <div key={item.name} className="nameAndPrice">
                            <div key={item.name} className="topInfo">
                                <p>Name</p>
                                <p className="itemName">{item.name}</p>
                            </div>
                            <div key={item.name} className="topInfo">
                                <p>Price</p>
                                <p>${item.price}</p>
                            </div>
                        </div>
                        <div key={item.name} className="topInfo">
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