import React from "react";
import foodPanda from '../Images/foodPanda Logo.png'
import ShopingBag from '../Images/add-to-bag.png'
import {  NavLink} from "react-router-dom";
import { auth } from "../config.js/firebase"
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2'
import { useSelector } from 'react-redux'


function ProductNav() {
    const [log, setLog] = useState(false)
    const [user, setUser] = useState()
    const card = useSelector(state => state.card)

    useEffect(() => {
        onAuthStateChanged(auth, (users) => {
            if (users) {
                setUser(users.email)
                setLog(true)

            } else {


            }
        });

    }, [])


    const handleSignOut = async () => {
        try {
            await signOut(auth)
            setLog(false)
            setUser()
            Swal.fire("Log Out")


        } catch (e) {
            Swal.fire(e.message)

        }
    }
    return (
        <>
            <div className="nav">
                <ul >

                    <li className="logo" >
                        <NavLink>
                            <img src={foodPanda} />
                        </NavLink>
                    </li>
                    <li className="signUpBtn">
                        <i>{user}</i>
                    </li>
                    {!log ? <li className="loginBtn">
                        <NavLink to={"/signIn"}>
                            <button>Log in</button>
                        </NavLink>
                    </li>
                        : <li className="loginBtn">

                            <button onClick={handleSignOut} >Logout</button>

                        </li>}

                    <li className="list">
                        <NavLink to={"/TotalItem"} > <img src={ShopingBag} width={25} /> </NavLink >
                        {card.length}
                    </li>
                </ul>

            </div>

            

        </>
    )
}

export default ProductNav