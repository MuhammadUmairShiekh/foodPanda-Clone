import React from "react";
import foodPanda from '../Images/foodPanda Logo.png'
import User from '../Images/user.png'
import ShopingBag from '../Images/add-to-bag.png'
import Globle from '../Images/globe.jpg'
import { Outlet, NavLink, useNavigate } from "react-router-dom";
import Body from "./Body";
import SentData from "../config.js/SentData";
import { Login, auth } from "../config.js/firebase"
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2'

function Navber() {
    const [log, setLog] = useState(false)
    const navigate = useNavigate()
    const [user, setUser] = useState()
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
                    {/* <li className="user" >
                        <NavLink to={"/signIn"}>
                            <img src={User} width={20} />
                        </NavLink>
                    </li> */}
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
                    {/* <li className="list1" >
                        <img src={Globle} width={23} /> <span>EN</span>
                    </li> */}
                    {/* <li className="list">
                        <img src={ShopingBag} width={25} />
                    </li> */}
                </ul>
                <Outlet />
            </div>
            <Body />
            {/* <SentData /> */}

        </>
    )
}

export default Navber