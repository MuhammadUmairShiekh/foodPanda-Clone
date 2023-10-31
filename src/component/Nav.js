import React from "react";
import foodPanda from '../Images/foodPanda Logo.png'
import User from '../Images/user.png'
import ShopingBag from '../Images/add-to-bag.png'
import Globle from '../Images/globe.jpg'
import { Outlet, NavLink, useNavigate } from "react-router-dom";
import Body from "./Body";
import { auth } from "../config.js/firebase"
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2'
import { useSelector } from 'react-redux'
import './Nav.css';

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [log, setLog] = useState(false)
  const navigate = useNavigate()
  const [user, setUser] = useState()
  const card = useSelector(state => state.card)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

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
    <div className="App">
      <nav className="navbar">
        {/* <div className="logo">Logo</div> */}
        <li className="loo" >
          <NavLink>
            <img src={foodPanda} width={100} />
          </NavLink>
        </li>
        <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
          {/* <li><NavLink href="#">Home</NavLink></li> */}
          {/* <li><NavLink href="#">About</NavLink></li> */}
          {/* <li><NavLink href="#">Contact</NavLink></li> */}
          <li><NavLink >{user}</NavLink></li>
          {!log ? <li className="loginBtn">
            <NavLink to={"/signIn"}>
              <button>Log in</button>
            </NavLink>
          </li>
            : <li className="loginBtn">

              <button onClick={handleSignOut} >Logout</button>

            </li>}
          <li className="list">
            <img src={ShopingBag} width={25} />
            {card}
          </li>
        </ul>
        <div className={`menu-toggle ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </nav>
      <Body />

    </div>

  );
}

export default Nav;
