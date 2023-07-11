import React, { useState } from "react";
import Modal from "./modal";
import EditModal from "./editModal";
import { useDispatch } from "react-redux";
import { deleteItemAsync } from "../redux/items/thunks";

const ItemCard = (props) => {
    const [visible, setVisible] = useState(false);
    const [viewForm, setViewForm] = useState(false);
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(deleteItemAsync(props.itemId));
    }
    
    return (
        <>
            <div key={props.name} className="itemCard">
                <img src={props.imageURL} alt={props.name} />
                <div className="infoContainer">
                    <div className="nameAndPrice">
                        <div className="topInfo">
                            <p>Name</p>
                            <p className="itemName">{props.name}</p>
                        </div>
                        <div className="topInfo">
                            <p>Price</p>
                            <p>${props.price}</p>
                        </div>
                    </div>
                    <div className="topInfo">
                        <p>Description</p>
                        {
                            props.description.length > 100 ?
                            (
                                <>
                                    <p>
                                        {props.description.slice(0, 100)}...
                                        {
                                            <button onClick={() => {
                                                setVisible(true);
                                            }} style={{
                                                textDecoration: "none", 
                                                fontStyle: "italic", 
                                                color: "rgb(185, 187, 188)",
                                                fontSize: "calc(8px + 0.390625vw)",
                                                background: "transparent",
                                                border: "none"
                                            }}>Click for details!</button>
                                        }
                                    </p>
                                </>
                            ) : 
                            (
                                <p>{props.description}</p>
                            )
                        }
                        <p style={{
                            fontStyle: "italic", 
                            color: "rgb(185, 187, 188)",
                            fontSize: "calc(8px + 0.390625vw)",
                        }}>
                            Created item on: {formatDate(props.date)}
                        </p>
                    </div>
                </div>
                {
                    <button id="deleteButton" onClick={() => {
                        setViewForm(true);
                    }}>✎</button>
                }
                <button style={{right: "50px"}} id="deleteButton" onClick={handleDelete}>🗑️</button>
            </div>
            <Modal
                name={props.name}
                price={props.price}
                imageURL={props.imageURL}
                description={props.description}
                visible={visible}
                setVisible={setVisible}
            />
            <EditModal 
                viewForm={viewForm}
                name={props.name}
                itemId={props.itemId}
                setViewForm={setViewForm}
            />
        </>
    );
}

const formatDate = (dateString) => {
    const date = new Date(dateString);
    
    const formattedDate = date.toLocaleDateString("en-US", {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
    });

    const formattedTime = date.toLocaleTimeString('en-US', {
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
    });

    return `${formattedDate} ${formattedTime}`;
}

export default ItemCard;