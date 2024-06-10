import React from "react";
import baseUrl from "../../apis/baseUrl";
import { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import linkedin from "../../assets/linkedin.png"
import defaultImage from "../../assets/defaultimage.png"
import "./SignUp.css"

const SignUp = () => {
    const [openSignUp, setOpenSignUp] = useState(true)
    const [openName, setOpenName] = useState(false)
    const [openDescription, setOpenDescription] = useState(false)
    const [openAvatar, setOpenAvatar] = useState(false)
    const navigate = useNavigate()

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const signup = (e) => {
        e.preventDefault()
        setOpenName(!openName)
        setOpenSignUp(!openSignUp)
    }

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")

    const handleFirstName = (e) => {
        setFirstName(e.target.value)
    }

    const handleLastName = (e) => {
        setLastName(e.target.value)
    }

    const handleName = (e) => {
        e.preventDefault()
        setOpenName(!openName)
        setOpenDescription(!openDescription)
    }

    const [job, setJob] = useState("")
    const [company, setCompany] = useState("")

    const handleJob = (e) => {
        setJob(e.target.value)
    }

    const handleCompany = (e) => {
        setCompany(e.target.value)
    }

    const handleDescription = (e) => {
        e.preventDefault()
        setOpenDescription(!openDescription)
        setOpenAvatar(!openAvatar)
    }

    const inputRef = useRef(null);
    const [image, setImage] = useState("")
    
    const handleImageClick = () => {
        inputRef.current.click()
    }

    const handleImageChange = (e) => {
        setImage(e.target.files[0])
    }

    const handleStoring = (e) => {
        e.preventDefault()
        baseUrl.post("/signup", {
            email: email,
            password: password,
            username: firstName + " " + lastName,
            description: job + " at " + company,
        })
        navigate("/")
    }

    return (
        <div>
            {openSignUp && (
                <div className="sign-up-container">
                <img src={linkedin} className="main-logo"/>
                <h1 className="sign-up-title">Make the most of your professional life</h1>
                <div className="sign-up-form">
                    <span className="sign-up-form-email">Email</span>
                    <input type="email" value={email} onChange={handleEmailChange}/>
                    <span className="sign-up-form-password">Password (6+ characters)</span>
                    <input type="password" value={password} onChange={handlePasswordChange}/>
                    <button className="sign-up-form-sign-up" onClick={signup}>Sign Up</button>
                    <span>Already on Linkedin? <Link to="/"><span className="sign-up-text">Sign In</span></Link></span>
                </div>
            </div>
            )}
            {openName && (
                <div className="name-container">
                    <img src={linkedin} className="main-logo"/>
                    <h1 className="name-title">Make the most of your professional life</h1>
                    <div className="name-form">
                        <span className="name-email">First Name</span>
                        <input type="text" value={firstName} onChange={handleFirstName}/>
                        <span className="sign-in-form-password">Last Name</span>
                        <input type="text" value={lastName} onChange={handleLastName}/>
                        <button className="name-continue" onClick={handleName}>Continue</button>
                    </div>
                </div>
            )}
            {openDescription && (
                <div className="description-container">
                    <img src={linkedin} className="main-logo"/>
                    <h1 className="name-title">Your profile helps you discover new people and opportunities</h1>
                    <div className="description-form">
                        <span className="description-job">Most recent job title</span>
                        <input type="text" value={job} onChange={handleJob}/>
                        <span className="description-company">Most recent company/university</span>
                        <input type="text" value={company} onChange={handleCompany}/>
                        <button className="description-continue" onClick={handleDescription}>Continue</button>
                    </div>
                </div>
            )}
            {openAvatar && (
                <div className="avatar-container">
                    <img src={linkedin} className="main-logo"/>
                    <h1 className="avatar-title">Adding a photo helps people recognize you</h1>
                    <div className="avatar-form" onClick={handleImageClick}>
                        {image ?
                            <img src={URL.createObjectURL(image)} className="profile-avatar"/> :
                            <img src={defaultImage} style={{ "height": "150px", "width": "150px" }}/>}
                        <input type="file" ref={inputRef} onChange={handleImageChange} style={{ 'display': "none" }}/>
                    </div>
                    <div className="avatar-form">
                        <button className="avatar-continue" onClick={handleStoring}>Continue</button>
                        <button className="avatar-continue" onClick={handleStoring}>Skip</button>
                    </div>
                </div>
            )}
        </div>
       
    )
}

export default SignUp