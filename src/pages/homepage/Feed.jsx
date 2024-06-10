import React from "react";
import { useState, useEffect } from "react";
import baseUrl from "../../apis/baseUrl";
import "./Feed.css";
import Navbar from "../../components/navbar/Navbar";
import Post from "../../components/post/Post";
import PostCard from "../../components/postcard/PostCard";
import media from "../../assets/media.png"
import event from "../../assets/event.png";
import article from "../../assets/article.png";
import defaultImage from "../../assets/defaultimage.png";

const Sharebox = () => {
    const [isModalOpen, setModalOpen] = useState(false);

    return(
        <div className="share-box-feed-entry">
            <div className="share-box-feed-entry-top-bar">
                <img src={defaultImage} className="share-box-feed-entry-avatar"/>
                <input placeholder="Start a post" className="start-a-post" onClick={() => setModalOpen(true)}/>
            </div>
            <Post isOpen={isModalOpen} onClose={() => setModalOpen(!isModalOpen)} />
            <div className="share-box-feed-entry-tool-bar">
                <button className="share-box-feed-entry-tool-bar-button">
                    <img src={media} className="share-box-feed-entry-tool-bar-button-img"/>
                    <span className="share-box-feed-entry-tool-bar-button-img-span">Media</span>
                </button>
                <button className="share-box-feed-entry-tool-bar-button">
                    <img src={event} className="share-box-feed-entry-tool-bar-button-img"/>
                    <span className="share-box-feed-entry-tool-bar-button-img-span">Event</span>
                </button>
                <button className="share-box-feed-entry-tool-bar-button"> 
                    <img src={article} className="share-box-feed-entry-tool-bar-button-img"/>
                    <span className="share-box-feed-entry-tool-bar-button-img-span">Write article</span>
                </button>
            </div>
        </div>
    )
}

const Feed = () => {
    const user = JSON.parse(localStorage.getItem("user"))

    const [post, setPost] = useState([{}])
    const currentUser = JSON.parse(localStorage.getItem("user")).user_id

    useEffect(() => {
        baseUrl.get("/posts").then(
            response => { 
                setPost(response.data)
            }
        )
    }, [])

    return (
      <div>
        <Navbar />
        <div className="feed-container">
            <div className="entity-module-container">
                <img src={defaultImage} className="entity-module-avatar"/>
                <span className="entity-module-name">{user.username}</span>
                <span className="entity-module-description">{user.description}</span>
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
                <div>
                    {post.map((post) => (
                        <PostCard postCard={post} key={post.post_id} />
                    ))}
                </div>
            </div>
            <div className="follows-module-container"> 
                <img src="https://media.licdn.com/media/AAYQAgTPAAgAAQAAAAAAADVuOvKzTF-3RD6j-qFPqhubBQ.png" alt="Advertise on LinkedIn" className="follows-module-image"></img>
            </div>
        </div>
      </div>
    );
  }

export default Feed 