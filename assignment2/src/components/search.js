import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { search } from "../redux/items/reducer";

const SearchBar = (props) => {

    const [searchTerm, setSearchTerm] = useState('');
    const dispatch = useDispatch();

    useEffect(() => {

        dispatch(search(searchTerm));

    }, [searchTerm]);

    return (
        <div className="searchBar">
            <input type="text" id="searchInput" placeholder="Search...🔍" onChange={e => setSearchTerm(e.target.value)}/>
        </div>
    );
}

export default SearchBar;