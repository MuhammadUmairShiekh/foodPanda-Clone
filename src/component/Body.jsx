import React from "react";
import refresh from '../Images/refresh-hero-home-pk.png'
import HomeVendor from '../Images/homeVendpr.JPG'
import Abottabad from "../Images/city-tile-Abottabad.jpg"
import karachi from "../Images/Karachi.jpg"
import islamabad from "../Images/Hyderabad.jpg"
import multan from "../Images/Islamabad.jpg"
import faisalabad from "../Images/Multan.jpg"
import Hyderabad from "../Images/Hyderabad.jpg"
import Peshawar from "../Images/Peshawar.jpg"
import QRcode from '../Images/pkhomepageqrcode.png'
import mobile from '../Images/home-foodpanda-apps.png'
import office from "../Images/home-corporate-pk.jpg"
import Card from "./Card";
import './Responsive.css';
import { NavLink } from "react-router-dom";

function Body() {
    return (
        <>
        
            <div className="container1" >
                <div className="main">
                    <img src={refresh} />
                </div>
                <div className="main1">
                    <p>It's the food and groceries you love, delivered</p>
                    <div className="mainInput">
                        <div className="mainInput1">
                            <input type="text" placeholder="Entere Your Ful address" />
                            <button>Find Food</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container2">
                <div className="hero">
                    <div>
                        <p>You prepare the food, we handle the rest</p>
                    </div>
                    <div className="hero1">
                        <img src={HomeVendor} alt="" />
                    </div>
                </div>
            </div >

            <div className="container3" >
                <div className="card">
                    <div className="card1">
                        <p>
                            List your restaurant or shop on foodpanda
                        </p>
                        <div>
                            <p>
                                Would you like millions of new customers to enjoy your amazing food and groceries? So would we!
                            </p>
                        </div>
                        <div>
                            <p>
                                It's simple: we list your menu and product lists online, help you process orders, pick them up, and deliver them to hungry pandas – in a heartbeat!
                            </p>
                        </div>
                        <div>
                            <p>Interested? Let's start our partnership today!</p>
                            <button>Get Started</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container4">
                <div className="location">
                    <div>
                        <p>
                            Find us in these cities and many more!
                        </p>
                    </div>
                </div>
                <div className="cardList">
                  <NavLink to={"/city"}> <Card image={karachi} button={"karachi"} /></NavLink>
                    <Card image={Hyderabad} button={"Hyderabad"} />
                    <Card image={Peshawar} button={"Peshawar"} />
                </div>
                <div className="cardList">
                    <Card image={islamabad} button={"Islamabad"} />
                    <Card image={multan} button={"Multan"} />
                    <Card image={faisalabad} button={"Faisalabad"} />
                </div>
            </div>
            <div className="container5">
                <div className="mobile">
                    <div>
                        <p>Put us in your pocket    </p>
                    </div>

                    <div className="mobile1">
                        <p>Download the food and groceries you love</p>

                        <div>
                        </div>
                        <div className="qrcode" >
                            <img src={QRcode} />
                            <p>It's all at your fingertips – the restaurants and shops you love.
                                Find the right food and groceries to suit your mood, and make the
                                first bite last. Go ahead, download us.
                            </p>
                        </div>
                        <div className="app">
                            <button>App Store</button>
                            <button>Google Play</button>
                            <button>App Gallery</button>
                        </div>
                    </div>
                    <div className="mobilePic">
                        <img src={mobile} alt="" />

                    </div>

                </div>
            </div >

            <div className="container6">
                <div className="office">
                    <div>
                        <p>Take your office out to lunch</p>
                    </div>
                    <div className="office1">
                        <img src={office} alt="" />
                    </div>
                </div>
            </div >

            <div className="container7" >
                <div className="card2">
                    <div className="card3">
                        <p>
                            foodpanda for business
                        </p>
                        <div>
                            <p>
                                Order lunch or fuel for work-from-home, late nights in the office, corporate events, client meetings, and much more.

                            </p>
                        </div>
                       <div>
                       
                            <button>Get Started</button>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Body