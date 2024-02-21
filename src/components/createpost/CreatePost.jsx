import React from "react";
import "./CreatePost.css"
import defaultImage from "../../assets/defaultimage.png";

const CreatePost = ({ isOpen, onClose }) => {
    if (!isOpen) return null;
    const user = JSON.parse(localStorage.getItem("user"));

    return (
      <div className={`modal-overlay${isOpen ? ' open' : ''}`} onClick={onClose}>
        <div className="modal-content" onClick={e => e.stopPropagation()}>
            <textarea placeholder="What do you want to talk about?" />
            <button className="modal-post-button">Post</button>
        </div>
      </div>
    );
};


export default CreatePost