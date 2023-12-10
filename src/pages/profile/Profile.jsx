import React from "react";
import "./Profile.css";
import NavBar from "../../components/navbar/Navbar"
import defaultImage from "../../assets/defaultimage.png"

const Profile = () => {
    const user = JSON.parse(localStorage.getItem("users"))[0]

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
                    <button className="profile-button-more">More</button>
                </span>
            </div>
            <div className="activity-container">
                <div className="activity-header">
                    <span className="activity-text">Activity</span>
                    <button className="activity-button">Create a post</button>
                </div>
                <div className="activity">
                    No activity
                </div>
            </div>
        </div>
    )
}

export default Profile