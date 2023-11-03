import React from "react";
import { useSelector } from 'react-redux'
import "./Total.css"
import ProductNav from "./ProductNav";



function TotalItem() {
    const card = useSelector(state => state.card)
    let total = 0;
    card.map(item => {
        total += item.price
    })
    return (
        <>
            <ProductNav />
            <div className="tableList">
                <table>
                    <tr>
                        <th>
                            S:NO
                        </th>
                        <th>
                            PRODUCT NAME
                        </th>
                        <th>
                            PRICE
                        </th>
                    </tr>
                    {card.map((item, index) => {
                        return (
                            <tr>
                                <th>{ index + 1}</th>

                                <td>
                                    {item.item}

                                </td>
                                <td>
                                    Rs. {item.price + ".00"}
                                </td>
                            </tr>
                        )
                    })}
                    <tr >
                        <th colspan="2" >
                            TOTAL PRICE
                        </th>
                        <th>
                            Rs. {total + ".00" } 
                        </th>
                    </tr>

                </table>
                {/* {card.map(item => {
                    return (
                        <div>
                            {item.item} | Rs. {item.price}

                        </div>
                    )
                })} */}
                {/* <p><b>Total Price: Rs. {total}</b></p> */}
            </div>
            {/* </div > */}

        </>
    )
}

export default TotalItem