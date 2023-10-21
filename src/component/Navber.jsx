import React from "react";
import foodPanda from '../Images/foodPanda Logo.png'
import ShopingBag from '../Images/shopping-bag.png'
import Globle from '../Images/globe.jpg'
import { Outlet, NavLink } from "react-router-dom";
import Body from "./Body";



function Navber() {
    return (
        <>
            <div className="nav">
                <ul >
                    <li className="logo" >
                        <NavLink>
                            <img src={foodPanda} />
                        </NavLink>
                    </li>
                    <li className="loginBtn">
                        <NavLink to={"/signIn"}>
                            <button>Log in</button>
                        </NavLink>
                    </li>
                    <li className="signUpBtn">
                        <NavLink to={"/signUp"}>
                            <button>SignUp</button>
                        </NavLink>
                    </li>
                    <li className="list" >
                      <img src={Globle} width={23}  /> <span>EN</span> 
                    </li>
                    <li className="list">
                        <img src={ShopingBag} width={25} />
                    </li>
                </ul>
            </div>
        <Body />
            
        </>
    )
}

export default Navber