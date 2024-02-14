import React, { useState } from "react";
import Axios from "axios";
import "./Profile.css";
import NavBar from "../../components/navbar/Navbar";
import defaultImage from "../../assets/defaultimage.png";

const Profile = () => {
    const [isModelOpen, setIsModelOpen] = useState(false);
    const user = JSON.parse(localStorage.getItem("users"))[0];

    const toggleModel = () => setIsModelOpen(!isModelOpen);

    const updatePassword = () => {
        
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
                            <form>
                                <table className="password-table">
                                    <tbody>
                                        <tr>
                                            <td><label>Current Password</label></td>
                                            <td><input type="password"/></td>
                                        </tr>
                                        <tr>
                                            <td><label>New Password</label></td>
                                            <td><input type="password"/></td>
                                        </tr>
                                        <tr>
                                            <td><label>Confirm New Password</label></td>
                                            <td><input type="password"/></td>
                                        </tr>
                                        <tr>
                                            <td></td>
                                            <td><button className="update-button" onClick={updatePassword}>Update Password</button></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </form>
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