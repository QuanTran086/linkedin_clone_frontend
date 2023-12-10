import React from "react";
import { useState } from "react";
import "./Like.css";

const like = require("../../assets/like.png");
const liked = require("../../assets/liked.png");

const Like = ({counter, setCounter}) => {
    const [isLiked, setIsLiked] = useState(false);

    const likeButton = () => {
        if (isLiked == false) {
            setCounter(counter + 1);
            setIsLiked(true);
        } 

        if (isLiked == true) {
            setCounter(counter - 1);
            setIsLiked(false);
        }
    }

    return (
        <div>
            <buton onClick={likeButton} className='share-feed-action-bar-button'>
                <img src={isLiked ? liked : like} className="share-feed-action-bar-img"/>
                <span>Like</span>
            </buton>
        </div>
    )
}

export default Like