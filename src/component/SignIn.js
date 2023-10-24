// import { NavLink } from "react-router-dom"
import { useState } from "react"
import { NavLink, useNavigate } from "react-router-dom"
import { Login, signINWithGoogle } from "../config.js/firebase"
import Swal from 'sweetalert2'
import foodPanda from '../Images/foodPanda Logo.png'
import './SignInUp.css'

function SignIN() {
    const navigate = useNavigate()

    const [email, setEMail] = useState("")
    const [password, setPassword] = useState("")
    
    const google =  async () => {
        try {
          await signINWithGoogle()
            navigate("/")
            Swal.fire("Logging sucess !")
        } catch (e) {
            Swal.fire(e.message)
        }
    }
    const logIN = async () => {
        if (email == 'admin@gmail.com') {
            try {
                await Login(email, password)
                navigate("/AdminDataUmairShiekh")
                Swal.fire("Logging sucess !")
            } catch (e) {
                Swal.fire(e.message)
            }
        }
        else {
            try {
                await Login(email, password)
                navigate("/")
                Swal.fire("Logging sucess !")
            } catch (e) {
                Swal.fire(e.message)
            }
        }
    }

    return (
        <>
            <div className="logi" >
                < div className="form" >
                    <p className="logo1"> <img src={foodPanda} width={"50%"} /> </p>
                    <p className="logo"> Welcome Login</p>
                    <input type="email" onChange={(e) => setEMail(e.target.value)} value={email} placeholder="Email" required="" />
                    <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} placeholder="Password" required="" />
                    <button onClick={logIN} className="login">Log-In</button>
                    <NavLink onClick={google} className="login1"> SignIn With Google</NavLink>
                    <NavLink to={"/Forget"} className={"a"} >Forgot Password ?</NavLink>
                    <hr />
                    <NavLink to={"/SignUp"} className="create-account">Create New Account</NavLink>
                </div>
            </div>
        </>
    )
}

export default SignIN


