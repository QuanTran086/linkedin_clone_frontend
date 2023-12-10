import React from "react";
import "./Feed.css";
import Navbar from "../../components/navbar/Navbar";
import Sharebox from "./Sharebox";
import Post from "./Post";
import defaultImage from "../../assets/defaultimage.png";

const Feed = () => {
    const user = JSON.parse(localStorage.getItem("users"))[0]

    return (
      <div>
        <Navbar />
        <div className="feed-container">
            <div className="entity-module-container">
                <img src={defaultImage} className="entity-module-avatar"/>
                <span className="entity-module-name">{user.first_name} {user.last_name}</span>
                <span className="entity-module-description">{user.job} at {user.company}</span>
                <div className="entity-module-information">
                    <span className="entity-module-information-profile-viewers">Profile viewers</span>
                    <span className="entity-module-information-connections">Connections</span>
                    <span className="entity-module-information-manage-your-network">Manage your network</span>
                    <span className="entity-module-information-tools">Get hired faster with exclusive tools & features</span>
                    <span className="entity-module-information-get-hired-faster">Get hired faster, Try Premium free</span>
                    <span className="entity-module-information-my-items">My items</span>
                </div>
                <div className="entity-module-discover">
                    <span>Groups</span>
                    <span>Events</span>
                    <span>Followed Hashtags</span>
                    <button>Discover more</button>
                </div>
            </div>
            <div className="middle-content">
                <Sharebox />
                <Post />
            </div>
            <div className="follows-module-container"> 
                <img src="https://media.licdn.com/media/AAYQAgTPAAgAAQAAAAAAADVuOvKzTF-3RD6j-qFPqhubBQ.png" alt="Advertise on LinkedIn" className="follows-module-image"></img>
            </div>
        </div>
      </div>
    );
  }

export default Feed 