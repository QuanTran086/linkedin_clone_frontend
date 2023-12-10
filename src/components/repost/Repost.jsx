import React from "react";
import './Repost.css';

const Repost = ({ repost, setRepost }) => {
    const Repost = () => {
        var newRepost = {
            "post_id": parseInt(localStorage.getItem('total post'))+1, 
            "user_avatar": repost.user_avatar,
            "name": repost.name,
            "description": repost.description,
            "created_date": new Date(),
            "post_content": repost.post_content,
            "post_image": repost.post_image,
            "like": repost.like,
            "comment": repost.comment,
            "repost": repost.repost+1     
        }

        var existingPosts = JSON.parse(localStorage.getItem("post"));
        existingPosts.push(newRepost);
        setRepost(existingPosts);
        localStorage.setItem('post', JSON.stringify(existingPosts));
        localStorage.setItem('total post', existingPosts.length);
    }

    return (
        <div className="repost-container">
            <button className="repost-with-your-thought-button">
                <span>Repost with your thought</span>
            </button>
            <button onClick={Repost} className="repost-button">
                <span>Repost</span>
            </button>
        </div>
    )
}

export default Repost