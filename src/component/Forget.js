import React from "react";
import { useState } from "react";
import { getAuth, sendPasswordResetEmail,auth } from "firebase/auth";
// import { auth } from "../config.js/firebase"
import Swal from 'sweetalert2'
import { NavLink, useNavigate } from "react-router-dom";




function Forget() {
    const [email, setEmail] = useState("")
    const navigate = useNavigate()
    // const [loading , setLoading] = useState(false)

    const forGetpas =  async () => {
        const auth = getAuth();
        try{
        await sendPasswordResetEmail(auth, email)            
                Swal.fire("Check Your Email ")
                setEmail("")
                navigate("/SignIn")

                // setLoading(true)
            }catch(e) {
                // const errorCode = error.code;
                // const errorMessage = error.message;
                Swal.fire(e.message)

            }
    }
    // if (loading) {
    //     return <div className='loader' ></div>
    // }
    return (
        <>
            <div className="logi" >
                < div className="form" >
                    <p className="logo">Forget Password</p>
                    <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Password Email" required="" />
                    <button onClick={forGetpas} className="login">Forget</button>
                {/* <NavLink to={"/SignIn"} className="login">Back To Login</NavLink> */}

                </div>

            </div >
        </>
    )
}

export default Forget