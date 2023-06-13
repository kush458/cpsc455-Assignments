import React from "react";

const Modal = (props) => {
    return (
        props.visible ? (
            <div className="modal">
                <div style={{position: "relative", opacity: "100%"}} key={props.name} className="itemCard">
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
                            <p>{props.description}</p>
                        </div>
                    </div>
                    <button id="deleteButton" onClick={() => props.setVisible(false)}>X</button>
                </div>
            </div>
        ) : (
            <></>
        )
    );
}

export default Modal