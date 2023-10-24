// import { NavLink } from "react-router-dom"
import { useState } from "react"
import { NavLink } from "react-router-dom"
import { postAds } from "../config.js/firebase"
import Swal from 'sweetalert2'
import "./SentData.css"

function SentData() {
    const [tittle, settittle] = useState("")
    const [address, setAddress] = useState("")
    const [number, setNumber] = useState("")
    const [time, setTime] = useState("")
    const [item, setItem] = useState("")
    const [price, setPrice] = useState("")
    const [item1, setItem1] = useState("")
    const [price1, setPrice1] = useState("")
    const [item2, setItem2] = useState("")
    const [price2, setPrice2] = useState("")
    const [file, setFile] = useState("")
    const [city, setCity] = useState("")
    const [loading, setLoading] = useState(false)


    const resgisterAcct = async () => {
        if (tittle == "" || time == " " || address == "" || price == "" || file == " ") {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
            })
        }
        else {
            setLoading(true)
            await postAds({ tittle, city, address, price, number, time, item , item1 , item2, price1 , price2 , file: file[0] })
            settittle("")
            setAddress("")
            setPrice("")
            setPrice1("")
            setPrice2("")
            setCity("")
            setNumber("")
            setItem1("")
            setItem2("")
            setItem("")
            setTime("")
            setLoading(false)
        }

    }
    if (loading) {
        return <div className='loader' ></div>
    }
    return (
        <>
            <div className="ads" >
                <NavLink className="btn2" to={"/SignIn"}>Go Back</NavLink>

                < div className="form1" >
                    <p className="logo">Post Your Ad</p>
                    <label>Restaurant_Name</label>
                    <input type="text" onChange={(e) => settittle(e.target.value)} value={tittle} placeholder="restaurant name" required="" />
                    <label>opening_hours</label>
                    <select onChange={e => setTime(e.target.value)} value={time}  >
                        <option selected disabled >opening_hours</option>
                        <option>monday": "11:00 AM - 10:00 PM",
                            "tuesday": "11:00 AM - 10:00 PM",
                            "wednesday": "11:00 AM - 10:00 PM",
                            "thursday": "11:00 AM - 10:00 PM",
                            "friday": "11:00 AM - 11:00 PM",
                            "saturday": "12:00 PM - 11:00 PM",
                            "sunday": "12:00 PM - 9:00 PM
                        </option>
                        <option>"monday": "12:00 PM - 9:00 PM",
                            "tuesday": "12:00 PM - 9:00 PM",
                            "wednesday": "12:00 PM - 9:00 PM",
                            "thursday": "12:00 PM - 9:00 PM",
                            "friday": "12:00 PM - 10:00 PM",
                            "saturday": "1:00 PM - 10:00 PM",
                            "sunday": "1:00 PM - 8:00 PM"</option>
                        <option>"monday": "12:00 PM - 8:00 PM",
                            "tuesday": "12:00 PM - 8:00 PM",
                            "wednesday": "12:00 PM - 8:00 PM",
                            "thursday": "12:00 PM - 8:00 PM",
                            "friday": "12:00 PM - 9:00 PM",
                            "saturday": "1:00 PM - 9:00 PM",
                            "sunday": "1:00 PM - 7:00 PM"</option>
                        <option>"monday": "11:00 AM - 9:00 PM",
                            "tuesday": "11:00 AM - 9:00 PM",
                            "wednesday": "11:00 AM - 9:00 PM",
                            "thursday": "11:00 AM - 9:00 PM",
                            "friday": "11:00 AM - 10:00 PM",
                            "saturday": "12:00 PM - 10:00 PM",
                            "sunday": "12:00 PM - 8:00 PM"
                        </option>
                        <option>"monday": "11:30 AM - 9:30 PM",
                            "tuesday": "11:30 AM - 9:30 PM",
                            "wednesday": "11:30 AM - 9:30 PM",
                            "thursday": "11:30 AM - 9:30 PM",
                            "friday": "11:30 AM - 10:30 PM",
                            "saturday": "12:30 PM - 10:30 PM",
                            "sunday": "12:30 PM - 8:30 PM"</option>
                        <option>"monday": "12:00 PM - 9:00 PM",
                            "tuesday": "12:00 PM - 9:00 PM",
                            "wednesday": "12:00 PM - 9:00 PM",
                            "thursday": "12:00 PM - 9:00 PM",
                            "friday": "12:00 PM - 10:00 PM",
                            "saturday": "1:00 PM - 10:00 PM",
                            "sunday": "1:00 PM - 8:00 PM"   </option>
                        <option>
                            "monday": "11:00 AM - 9:00 PM",
                            "tuesday": "11:00 AM - 9:00 PM",
                            "wednesday": "11:00 AM - 9:00 PM",
                            "thursday": "11:00 AM - 9:00 PM",
                            "friday": "11:00 AM - 10:00 PM",
                            "saturday": "12:00 PM - 10:00 PM",
                            "sunday": "12:00 PM - 8:00 PM"
                        </option>
                        <option>
                            "monday": "11:30 AM - 9:00 PM",
                            "tuesday": "11:30 AM - 9:00 PM",
                            "wednesday": "11:30 AM - 9:00 PM",
                            "thursday": "11:30 AM - 9:00 PM",
                            "friday": "11:30 AM - 10:00 PM",
                            "saturday": "12:00 PM - 10:00 PM",
                            "sunday": "12:00 PM - 8:00 PM"
                        </option>
                    </select>
                    <label>Region</label>
                    <select onChange={e => setCity(e.target.value)} value={city}  >
                        <option></option>
                        <option>Karachi</option>
                        <option>Lahore</option>
                        <option>Hyderabad</option>
                        <option>Multan</option>
                        <option>Faisalabad</option>
                        <option>Ismalabad</option>
                    </select>
                    <label>Address</label>
                    <textarea rows="4" cols="50" onChange={(e) => setAddress(e.target.value)} value={address} placeholder="Restaurant Address" required="" > </textarea>
                    <label>Mobile No</label>
                    <input type="text" onChange={(e) => setNumber(e.target.value)} value={number} placeholder="Enter Mobile Number" required="" />
                    {/* <label>Price</label>
                    <input type="number" onChange={(e) => setPrice(e.target.value)} value={price} placeholder="Product Price" required="" /> */}
                    <label>Menu:</label>
                    <input type="text" onChange={(e) => setItem(e.target.value)} value={item} placeholder="Item Name" required="" />
                    <input type="number" onChange={(e) => setPrice(e.target.value)} value={price} placeholder="Item Price" required="" />
                    <input type="text" onChange={(e) => setItem1(e.target.value)} value={item1} placeholder="Item2 Name" required="" />
                    <input type="number" onChange={(e) => setPrice1(e.target.value)} value={price1} placeholder="Item2 Price" required="" />
                    <input type="text" onChange={(e) => setItem2(e.target.value)} value={item2} placeholder="Item3 Name" required="" />
                    <input type="number" onChange={(e) => setPrice2(e.target.value)} value={price2} placeholder="Item3 Price" required="" />
                    <input type="file" className="file" onChange={(e) => setFile(e.target.files)} required="" />
                    <button onClick={resgisterAcct} className="login">Submit</button>
                    <hr />

                </div>
            </div>
        </>
    )
}

export default SentData


