import React, { useState } from "react";
import Axios from "axios";
import "./Profile.css";
import NavBar from "../../components/navbar/Navbar";
import defaultImage from "../../assets/defaultimage.png";

const Profile = () => {
    const [isModelOpen, setIsModelOpen] = useState(false);
    const [currentPassword, setCurrentPassword] = useState("")
    const [newPassword, setNewPassword] = useState("")
    const [confirmedPassword, setConfirmedPassword] = useState("")

    const user = JSON.parse(localStorage.getItem("users"))[0];


    const toggleModel = () => setIsModelOpen(!isModelOpen);

    const handleCurrentPassword = (e) => {
        setCurrentPassword(e.target.value)
    }

    const handleNewPassword = (e) => {
        setNewPassword(e.target.value)
    }

    const handleConfirmedPassword = (e) => {
        setConfirmedPassword(e.target.value)
    }

    const updatePassword = () => {
        Axios.post("http://localhost:5000/update-password", {
            currentPassword: currentPassword,
            newPassword: newPassword,
            confirmedPassword: confirmedPassword
        }).then(() => {
            setTimeout(() => {alert("Successfully changed password!")}, 1)
            setIsModelOpen(!isModelOpen)
            setCurrentPassword("")
            setNewPassword("")
            setConfirmedPassword("")
        }).catch(() => {
            setTimeout(() => {alert("Failed to change password")}, 1)
            setIsModelOpen(!isModelOpen)
            setCurrentPassword("")
            setNewPassword("")
            setConfirmedPassword("")
        });
    }

    return (
        <div>
            <NavBar />
            <div className="profile-container">
                <img src={defaultImage} className="profile-user-avatar"/>
                <div className="profile-name">{user.first_name} {user.last_name}</div>
                <div className="profile-description">{user.job} at {user.company}</div>
                <span className="profile-button">
                    <button className="profile-button-open-to">Open to</button>
                    <button className="profile-button-add-section">Add profile section</button>
                    <button className="profile-button-more" onClick={toggleModel}>Update</button>
                </span>
                {isModelOpen && (
                    <div className="model">
                        <div className="model-content">
                            <span className="close" onClick={toggleModel}>&times;</span>
                            <h2>Update Password</h2>
                            <table className="password-table">
                                <tbody>
                                    <tr>
                                        <td><label>Current Password</label></td>
                                        <td><input type="password" value={currentPassword} onChange={handleCurrentPassword}/></td>
                                    </tr>
                                    <tr>
                                        <td><label>New Password</label></td>
                                        <td><input type="password" value={newPassword} onChange={handleNewPassword}/></td>
                                    </tr>
                                    <tr>
                                        <td><label>Confirm New Password</label></td>
                                        <td><input type="password" value={confirmedPassword} onChange={handleConfirmedPassword}/></td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td><button className="update-button" onClick={updatePassword}>Update Password</button></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}
            </div>
            <div className="activity-container">
                <div className="activity-header">
                    <span className="activity-text">Activity</span>
                    <button className="activity-button">Create a post</button>
                </div>
                <div className="activity">
                    <p>You haven't posted yet</p>
                </div>
            </div>
        </div>
    )
}

export default Profile;