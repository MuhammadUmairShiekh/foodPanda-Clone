import React from "react";
import { useSelector } from 'react-redux'
import "./Total.css"
import ProductNav from "./ProductNav";
import del from '../Images/bin.png'
import { removeCardToStore } from "../Store/card";
import { useState } from "react";
import { useDispatch } from "react-redux";
import Footer from "./Footer";
import { NavLink } from "react-router-dom";
import CheckoutForm from "./CheckOut";
import Swal from 'sweetalert2'

function TotalItem() {
    // const [discount, setDiscount] = useState(false)
    // const [above, setAbove] = useState(false)
    const card = useSelector(state => state.card)
    let total = 0;
    card.map(item => {
        total += item.price

    })
    const dispatch = useDispatch()
    const removeCard = (index) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
                dispatch(removeCardToStore(index))

            }
        });

    }
    // if (total == 1000) {
    //     setDiscount(true)
    //     setAbove(true)
    // }

    return (
        <>
            <ProductNav />
            <div className="bg">
            <div className="tableList">
                <CheckoutForm />
                <table>
                    <tr>
                        <th>
                            ITEM
                        </th>
                        <th>
                            PRODUCT NAME
                        </th>
                        {/* <th>
                                Quantity
                            </th> */}
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
                                {/* <td>
                                        {index + 1}

                                    </td> */}

                                <td>
                                    Rs. {item.price + ".00"}
                                </td>

                                <button onClick={() => removeCard(index)} ><img src={del} /> </button>

                            </tr>

                        )

                    })}


                    <div className="total">
                        <div className="name">
                            <p>Subtotal:</p>
                            <p>SaleTax 11%:</p>
                            <p>Delivery Charges</p>
                            <p>Discount 2%:</p>
                            <p>Grand Total:</p>
                        </div>
                        <div className="count">
                            <p> Rs. {total + ".00"}  </p>
                            <p> Rs. {`${total}` * 11 / 100 + ".00"}</p>
                            <p>Free</p>
                            <p> Rs. {`${total}` * 2 / 100 + ".00"} </p>
                            {/* <p> 2% Discount above 1000 </p> */}
                            {/* <p> Purchase above 1000 use awal 2% Discount</p>  */}
                            <p> Rs. {Math.floor(total * 11 / 100 + total - `${total * 2 / 100}`) + ".00"}  </p>
                            {/* <p> Rs. {Math.round(total * 11 / 100 + total)}  </p> */}
                            {/* <NavLink to={"/CheckOut"}> <button>Checkout</button></NavLink> */}

                        </div>

                    </div>
                </table>
            </div>
            {/* <Footer /> */}
            </div>
        </>
    )
}

export default TotalItem