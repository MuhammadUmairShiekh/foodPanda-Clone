import React from "react";
import { useSelector } from 'react-redux'
import "./Total.css"
import del from '../Images/bin.png'
import { removeCardToStore } from "../Store/card";
import { useDispatch } from "react-redux";
import Footer from "./Footer";
import Swal from 'sweetalert2'



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

            <div className="tableList">
                <table>
                    <tr>
                        <th>
                            S:No
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
                                <td>
                                    {index + 1}
                                </td>


                                <td>
                                    {item.item}

                                </td>


                                <td>
                                    Rs. {item.price + ".00"}
                                </td>

                                {/* <button onClick={() => removeCard(index)} ><img src={del} /> </button> */}

                            </tr>

                        )

                    })}

                </table>



            </div>


        </>
    )
}

export default MiniCard