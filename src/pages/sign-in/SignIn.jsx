import React from "react";
import Axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import linkedin from "../../assets/linkedin.png"
import "./SignIn.css"

const SignIn = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(false)
    const [errorWindow, setErrorWindow] = useState(false)
    const navigate = useNavigate()

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const verify = () => {
        // const storedUsers = JSON.parse(localStorage.getItem("users"));

        // if (!storedUsers) {
        //     setError(!error)
        //     setErrorWindow(!errorWindow)
        //     setEmail("")
        //     setPassword("")
        //     return;
        // }

        // for (var i = 0; i < localStorage.getItem("users").length; i++) {
        //     if (email === storedUsers[i].email && password === storedUsers[i].password){
        //         navigate("/feed")
        //         // Exit the loop when user is found
        //         return; 
        //     }
        //     else {
        //         setError(!error)
        //         setErrorWindow(!errorWindow)
        //         setEmail("")
        //         setPassword("")
        //         return;
        //     }
        // }

        Axios.post("http://localhost:5000/login", {
            email: email,
            password: password
        })
    }

    return (
        <div className="sign-in-container">
            <img src={linkedin} className="main-logo"/>
            <h1 className="sign-in-title">Make the most of your professional life</h1>
            <div className="sign-in-form">
                <span className="sign-in-form-email">Email</span>
                <input type="email" value={email} onChange={handleEmail}/>
                <span className="sign-in-form-password">Password (6+ characters)</span>
                <input type="password" value={password} onChange={handlePassword}/>
                {errorWindow && (
                    <div style={{ color: "red"}}>Wrong Email or Password</div>
                )}
                <span className="sign-in-form-forgot-password">Forgot password?</span>
                <button className="sign-in-form-sign-in" onClick={verify}>Sign In</button>
                <Link to="/signup"><button className="sign-in-form-join-now">New to Linkedin? Join now</button></Link>
            </div>
        </div>
    )
}

export default SignIn