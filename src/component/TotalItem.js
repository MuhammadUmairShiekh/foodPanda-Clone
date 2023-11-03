import React from "react";
import { useSelector } from 'react-redux'
import "./Total.css"
import ProductNav from "./ProductNav";
import del from '../Images/bin.png'
import { removeCardToStore } from "../Store/card";
import { useDispatch } from "react-redux";

function TotalItem() {
    const card = useSelector(state => state.card)
    let total = 0;
    card.map(item => {
        total += item.price
    })
    const dispatch = useDispatch()
    const removeCard = (index) => {
        dispatch(removeCardToStore(index))

    }
    return (
        <>
            <ProductNav />
            <div className="tableList">
                <table>
                    <tr>
                        <th>
                            ITEM
                        </th>
                        <th>
                            PRODUCT NAME
                        </th>
                        <th>
                            Quantity
                        </th>
                        <th>
                            PRICE
                        </th>
                    </tr>
                    {card.map((item, index) => {
                        return (
                            <tr>
                                <th><img src={item.item_image_url} /></th>

                                <td>
                                    {item.item}

                                </td>
                                <td>
                                    {index + 1}

                                </td>

                                <td>
                                    Rs. {item.price + ".00"}
                                </td>

                                <button onClick={() => removeCard(index)} ><img src={del} /> </button>

                            </tr>

                        )

                    })}
                </table>
                <div className="total">
                    <div className="name">
                        <p>Subtotal:</p>
                        <p>SaleTax 11%:</p>
                        <p>Discount 2%:</p>
                        <p>Grand Total:</p>
                    </div>
                    <div className="count">
                        <p> Rs. {total + ".00"}  </p>
                        <p> Rs. {`${total}` * 11 / 100 + ".00"}</p>
                        <p> Rs. {`${total}` * 2 / 100 + ".00"} </p>
                        <p> Rs. {Math.floor(total * 11 / 100 + total - `${total * 2 / 100}`) + ".00"}  </p>
                    </div>


                </div>

            </div>


        </>
    )
}

export default TotalItem