import React from "react";

const Modal = (props) => {
    return (
        props.visible ? (
            <div className="modal">
                <div style={{position: "relative", opacity: "100%"}} key={props.name} className="itemCard">
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
                    <button id="deleteButton" onClick={() => props.setVisible(false)}>X</button>
                </div>
            </div>
        ) : (
            <></>
        )
    );
}

export default Modal