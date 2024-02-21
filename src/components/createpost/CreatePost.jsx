import React from "react";
import "./CreatePost.css"

const CreatePost = ({ isOpen, onClose }) => {
    if (!isOpen) return null;
    const user = JSON.parse(localStorage.getItem("user"));

    return (
      <div className={`modal-overlay${isOpen ? ' open' : ''}`} onClick={onClose}>
        <div className="modal-content" onClick={e => e.stopPropagation()}>
            <h1 className="share-your-thought">Share your thought</h1>
            <div className="create-post-content">
                <textarea placeholder="What do you want to talk about?" />
                <button className="modal-post-button">Post</button>
            </div>
        </div>
      </div>
    );
};


export default CreatePost