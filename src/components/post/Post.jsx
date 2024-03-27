import React, { useState } from "react";
import baseUrl from "../../apis/baseUrl";
import "./Post.css"

const Post = ({ isOpen, onClose }) => {
    const [postContent, setPostContent] = useState("")
    if (!isOpen) return null;
    const user = JSON.parse(localStorage.getItem("user"));

    const handlePostContent = (e) => {
        setPostContent(e.target.value)
    }

    const posting = () => { 
        baseUrl.post("/posts", {
            postContent: postContent,
            userId: user.user_id
        }).then(() => {
            onClose()
        })
    }

    return (
      <div className={`modal-overlay${isOpen ? ' open' : ''}`} onClick={onClose}>
        <div className="modal-content" onClick={e => e.stopPropagation()}>
            <h1 className="share-your-thought">Share your thought</h1>
            <div className="create-post-content">
                <textarea placeholder="What do you want to talk about?" value={postContent} onChange={handlePostContent}/>
                <button className="modal-post-button" onClick={posting}>Post</button>
            </div>
        </div>
      </div>
    );
};


export default Post