import React from "react";
import refresh from '../Images/refresh-hero-home-pk.png'

function Body() {
    return (
        <>
    <div className="container1" >
        <div className="main">
        <img src={refresh}  />
        </div>
        <div className="main1">
        <h1>It's the food and groceries you love, delivered</h1>
        <div>
            <div>
                <input type="text" placeholder="Entere Your Ful Location" />
                <button>Find Food</button>
            </div>
        </div>
        </div>
    </div>

        </>
    )
}

export default Body