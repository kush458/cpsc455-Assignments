import React, { useState } from "react";
import Modal from "./modal";

const ItemCard = (props) => {
    const [visible, setVisible] = useState(false);

    return (
        <>
            <div key={props.name} className="itemCard" onClick={() => setVisible(true)}>
                <img key={props.name} src={props.imageURL} alt={props.name} />
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
            <Modal
                name={props.name}
                price={props.price}
                imageURL={props.imageURL}
                description={props.description}
                visible={visible}
                setVisible={setVisible}
            />
        </>
    );
}

export default ItemCard;