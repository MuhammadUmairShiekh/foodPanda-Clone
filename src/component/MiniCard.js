import React from "react";
import { useSelector } from 'react-redux'
import "./Total.css"
import del from '../Images/bin.png'
import { removeCardToStore } from "../Store/card";
import { useDispatch } from "react-redux";
import Footer from "./Footer";


function MiniCard() {

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
            <div className="tableList1">
                <table>
                    <tr>
                        <th>
                            ITEM
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
                                <td><img src={item.item_image_url} /></td>

                                <td>
                                    {item.item}

                                </td>


                                <td>
                                    Rs. {item.price + ".00"}
                                </td>

                                <button onClick={() => removeCard(index)} ><img src={del} /> </button>

                            </tr>

                        )

                    })}
                </table>


            </div>
         

        </>
    )
}

export default MiniCard