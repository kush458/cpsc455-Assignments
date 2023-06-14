import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from 'react-redux';
import ItemCard from "./item";
import { getItemsAsync } from "../redux/items/thunks";

const Inventory = (props) => {
    const [searchTerm, setSearchTerm] = useState('');
    const items = useSelector(state => state.items.item_list);
    const [filteredItems, setFilteredItems] = useState(items);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getItemsAsync());
    }, []);

    useEffect(() => {
        /**
         * remember that you cannot directly modify a variable here like items! first of all because, react doesn't preserve the value
         * of variables over time in successive re-renders and secondly and more importantly, modifying items does not trigger a 
         * re-render!!! because it is a variable so no UI changes will be relfected! This happens because directly modifying items
         * doesn't change the reference to the variable items and hence react thinks that it is unchanged where as state update functions
         * with the help of useState actually return a new reference due to which React re-renders the components and that is why 
         * this approach with filteredItems works!
         */
        const filtered = items.filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()));
        setFilteredItems(filtered);

    }, [searchTerm, items]);

    return (
        <div className="inventory">
            <div className="searchBar">
                <input type="text" id="searchInput" value={searchTerm} placeholder="Search...🔍" onChange={(e) => setSearchTerm(e.target.value)}/>
            </div>
            {filteredItems && filteredItems.map((item, i) => 
                <ItemCard 
                    key={i}
                    itemId={item.id}
                    name={item.name}
                    price={item.price}
                    imageURL={item.imageURL}
                    description={item.description} 
                    itemIndex={i}
                    searching={searchTerm}   
                />
            )}
        </div>
    );
}

export default Inventory;