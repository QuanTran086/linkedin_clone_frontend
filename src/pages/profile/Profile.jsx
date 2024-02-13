import React, { useState } from "react";
import "./Profile.css";
import NavBar from "../../components/navbar/Navbar";
import defaultImage from "../../assets/defaultimage.png";

const Profile = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const user = JSON.parse(localStorage.getItem("users"))[0];

    const toggleModal = () => setIsModalOpen(!isModalOpen);

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
                    <button className="profile-button-more" onClick={toggleModal}>More</button>
                </span>
                {isModalOpen && (
                    <div className="modal">
                        <div className="modal-content">
                        <span className="close" onClick={toggleModal}>&times;</span>
                        <h2>Edit Profile</h2>
                        <form>
                            <div className="form-group">
                            <label htmlFor="password">New Password</label>
                            <input type="password" id="password" name="password" placeholder="New Password" />
                            </div>
                            <div className="form-group">
                            <label htmlFor="confirm-password">Confirm New Password</label>
                            <input type="password" id="confirm-password" name="confirm-password" placeholder="Confirm New Password" />
                            </div>
                            <div className="form-group">
                            <button type="submit" className="save-btn">Save</button>
                            </div>
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