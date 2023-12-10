import React from "react";
import { useState } from "react";
import Like from "../../components/like/Like"
import Comment from "../../components/comment/Comment";
import Repost from "../../components/repost/Repost";
import './PostCard.css';
import like from "../../assets/like.png";
import repost from "../../assets/repost.png";
import send from "../../assets/send.png";
import comment from "../../assets/comment.png";


const PostCard = ({ postCard, setPostCard }) => {
    const [counter, setCounter] = useState(postCard.like);
    const [showCommentInput, setShowCommentInput] = useState(false)
    const [commentCounter, setCommentCounter] = useState(postCard.comment)
    const [open, setOpen] = useState(false)

    const showComment = () => {
        setShowCommentInput(true)
    }

    const date = new Date();
    const postDate = new Date(postCard.created_date);
    const diffTime = new Date(date - postDate);

    return(
        <div className="share-feed">
            <div className="user-menu-container">
                <div className="user-details">
                    <img src={postCard.user_avatar} className="profile-image-feed"/>
                    <div className="user-name-description">
                        <span className="user-name">{postCard.name}</span>
                        <span className="user-description">{postCard.description}</span>
                        <span className="post-date">{diffTime.getMonth()}m
                            <span style={{margin: '4px', color: '#00000099'}}>•</span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" class="mercado-match" width="16" height="16" focusable="false">
                                <path d="M8 1a7 7 0 107 7 7 7 0 00-7-7zM3 8a5 5 0 011-3l.55.55A1.5 1.5 0 015 6.62v1.07a.75.75 0 00.22.53l.56.56a.75.75 0 00.53.22H7v.69a.75.75 0 00.22.53l.56.56a.75.75 0 01.22.53V13a5 5 0 01-5-5zm6.24 4.83l2-2.46a.75.75 0 00.09-.8l-.58-1.16A.76.76 0 0010 8H7v-.19a.51.51 0 01.28-.45l.38-.19a.74.74 0 01.68 0L9 7.5l.38-.7a1 1 0 00.12-.48v-.85a.78.78 0 01.21-.53l1.07-1.09a5 5 0 01-1.54 9z"></path>
                            </svg>
                        </span>
                    </div>
                </div>
                <div className="feed-shared-control-menu">
                    <button className="feed-shared-control-menu-button">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
                            <path d="M14 12a2 2 0 11-2-2 2 2 0 012 2zM4 10a2 2 0 102 2 2 2 0 00-2-2zm16 0a2 2 0 102 2 2 2 0 00-2-2z"></path>
                        </svg>
                    </button>
                    <button className="feed-shared-control-menu-button">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" class="mercado-match" width="16" height="16" focusable="false">
                            <path d="M14 3.41L9.41 8 14 12.59 12.59 14 8 9.41 3.41 14 2 12.59 6.59 8 2 3.41 3.41 2 8 6.59 12.59 2z"></path>
                        </svg>
                    </button>
                </div>
            </div>
            <div className="post-content">
                {postCard.post_content}
            </div>
            <div className="post-picture">
                <img src={postCard.post_image} /> 
            </div>
            <div className="social-interaction-container">
                <div className="interaction-item">
                    <img src={like} className="interaction-icon"/>
                    <span className="interaction-text">{counter}</span>
                </div>
                <div className="comment-repost-container">
                    <div className="interaction-item">
                        <span className="interaction-text">{commentCounter} Comment</span>
                    </div>
                    <span style={{margin: '0px 2px 0px -22px', color: '#00000099'}}>•</span>
                    <div className="interaction-item">
                        <span className="interaction-text">{postCard.repost} Repost</span>
                    </div>
                </div>
            </div>
            <div className="share-feed-action-bar">
                <button className="share-feed-action-bar-button">
                    <Like counter={counter} setCounter={setCounter} className="share-feed-action-bar-img"/>
                </button>
                <button onClick={showComment} className="share-feed-action-bar-button">
                    <img src={comment} className="share-feed-action-bar-img"/>
                    <span>Comment</span>
                </button>
                <button onClick={() => setOpen(!open)} className="share-feed-action-bar-button">
                    <img src={repost} className="share-feed-action-bar-img"/>
                    <span>Repost</span>
                </button>
                <button className="share-feed-action-bar-button">
                    <img src={send} className="share-feed-action-bar-img"/>
                    <span>Send</span>
                </button>   
            </div>
            {open && (<Repost repost={postCard} setRepost={setPostCard}/>)}
            {showCommentInput && <Comment commentCounter={commentCounter} setCommentCounter={setCommentCounter}/>}
        </div>
    )
}

export default PostCard;