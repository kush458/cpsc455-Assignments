import React, { useState } from "react";
import Modal from "./modal";
import EditModal from "./editModal";

const ItemCard = (props) => {
    const [visible, setVisible] = useState(false);
    const [viewForm, setViewForm] = useState(false);
    
    return (
        <>
            <div key={props.name} className="itemCard">
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
                    </div>
                </div>
                {
                    !props.searching ? (
                        <button id="deleteButton" onClick={() => {
                            setViewForm(true);
                        }}>✎</button>
                    ) : (
                        <></>
                    ) 
                }
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
                itemIndex={props.itemIndex}
                setViewForm={setViewForm}
            />
        </>
    );
}

export default ItemCard;