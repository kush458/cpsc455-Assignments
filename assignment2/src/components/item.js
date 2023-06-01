import React from "react";

const ItemCard = (props) => {
    return (
        <div key={props.name} className="itemCard">
            <img key={props.name} src={props.imageURL} alt={props.name}/>
            <div key={props.name} className="infoContainer">
                <div key={props.name} className="nameAndPrice">
                    <div key={props.name} className="topInfo">
                        <p>Name</p>
                        <p className="itemName">{props.name}</p>
                    </div>
                    <div key={props.name} className="topInfo">
                        <p>Price</p>
                        <p>${props.price}</p>
                    </div>
                </div>
                <div key={props.name} className="topInfo">
                    <p>Description</p>
                    <p>{props.description}</p>
                </div>
            </div>
        </div>
    );
}

export default ItemCard;