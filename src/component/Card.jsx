import React, { useEffect } from "react";

import './Card.css'

function Card(prop) {
    const { button , image}  = prop
    return (
        <>
            <div className="cardlist">
                <div className="cardlist1">
                    <div>
                        <img src={image} alt="" />
                    </div>
                    <div>
                        <button>{button}</button>
                    </div>
                </div>

            </div>



        </>
    )
}

export default Card