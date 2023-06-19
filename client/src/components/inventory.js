import React, { useEffect, useState } from "react";
import { BsCheck2 } from 'react-icons/bs';
import Chip from '@mui/material/Chip';
import { useDispatch, useSelector } from 'react-redux';
import ItemCard from "./item";
import { getItemsAsync, sortItemsAsync } from "../redux/items/thunks";

const Inventory = (props) => {
    const [searchTerm, setSearchTerm] = useState('');
    const items = useSelector(state => state.items.item_list);
    const [filteredItems, setFilteredItems] = useState(items);
    const [sortByPrice, setSortByPrice] = useState(false);
    const [sortByName, setSortByName] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        if (!sortByPrice && !sortByName) {
            dispatch(getItemsAsync());
        }
    }, [sortByPrice, sortByName]);

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

    const handleSort = (criterion) => {
        dispatch(sortItemsAsync(criterion));
    }

    return (
        <div className="inventory">
            <div style={{ 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center',
                width: '70%',
                marginBottom: '1.5%',
            }}>
                <div className="searchBar">
                    <input type="text" id="searchInput" value={searchTerm} placeholder="Search...🔍" onChange={(e) => setSearchTerm(e.target.value)}/>
                </div>
                <div style={{display: 'flex', flexDirection: 'row'}}>
                    <Chip 
                        label="sort by price"
                        onClick={() => {
                            setSortByPrice(!sortByPrice);
                            handleSort('price');
                        }}
                        icon={sortByPrice ? <BsCheck2 color="white" /> : <></>}
                        disabled={sortByName ? true : false}
                        style={{color: 'white', border: "1px solid rgba(240, 246, 0252, 0.1)", marginRight: "1em"}}
                        clickable
                    />
                    <Chip 
                        label="sort by name"
                        onClick={() => {
                            setSortByName(!sortByName);
                            handleSort('name');
                        }}
                        icon={sortByName ? <BsCheck2 color="white" /> : <></>}
                        disabled={sortByPrice ? true : false}
                        style={{color: 'white', border: "1px solid rgba(240, 246, 0252, 0.1)"}}
                        clickable
                    />
                </div>
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