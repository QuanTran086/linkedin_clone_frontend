import React, { useEffect, useState } from "react";
import baseUrl from "../../apis/baseUrl";
import './PostCard.css';
import like from "../../assets/like.png";
import repost from "../../assets/repost.png";
import send from "../../assets/send.png";
import comment from "../../assets/comment.png";
import defaultimage from "../../assets/defaultimage.png"

const liked = require("../../assets/liked.png");

// Like button
const Like = ({post_id, user_id, status, setCounter}) => {
    const [isLiked, setIsLiked] = useState(status);

    useEffect(() => {
        setIsLiked(status)
    }, [status])

    const likeButton = () => {
        setIsLiked(!isLiked);
        baseUrl.post("/like", {
            post_id: post_id,
            user_id: user_id,
            status: !isLiked
        }).then(response => {
            if (response.status === 200) {
                setCounter(response.data.like_count)
            }
        })
    };

    return (
        <div>
            <button onClick={likeButton} className='share-feed-action-bar-button'>
                <img src={isLiked ? liked : like} className="share-feed-action-bar-img"/>
                <span>Like</span>
            </button>
        </div>
    )
}

// Comment button
const Comment = ({ commentCounter, setCommentCounter, user_id, post_id, user_avatar, username, description, comment_content, comment_id }) => {    
    const [inputValue, setInputValue] = useState('');
    const [showCommentPost, setShowCommentPost] = useState(false);
    const [isRendered, setIsRendered] = useState(false);
    const [deleteButton, setDeleteButton] = useState(false)
    const [postedComment, setPostedComment] = useState('');

    useEffect(() => {
        if (comment_content) {
            setIsRendered(true);
            setPostedComment(comment_content);
        }
    }, [comment_content]);

    const handleComment = (e) => {
        setInputValue(e.target.value);
        if (e.target.value.length > 0) {
            setShowCommentPost(true)
        } else {
            setShowCommentPost(false)
        }
    }

    const handePostButton = () => {
        baseUrl.post("/comment", {
            commentContent: inputValue,
            user_id: user_id,
            post_id: post_id
        }).then(
            response => {
                setPostedComment(response.data)
                setPostedComment(inputValue);
            setIsRendered(true)
            setShowCommentPost(false)
            setInputValue('');
            setCommentCounter(commentCounter + 1)
            }
        )
    }

    const showingDeleteButton = () => {
        setDeleteButton(!deleteButton)
    }

    const deleting = () => {
        baseUrl.delete("/comment", {
            comment_id: comment_id,
            post_id: post_id
        }).then(
            response => {
                setCommentCounter(response.data)
                setIsRendered(false)
                setDeleteButton(!deleteButton)
            }
        )
    }
    
    return(
        <div>
            <div className="comment-box">
                <img src={defaultimage} className="comment-avatar"/>
                <div className="comment-input-container">
                    <input className="comment-box-input" value={inputValue} onChange={handleComment} placeholder="Add a comment..."/>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" width="24" height="24" focusable="false">
                        <path d="M8 10.5A1.5 1.5 0 119.5 12 1.5 1.5 0 018 10.5zm6.5 1.5a1.5 1.5 0 10-1.5-1.5 1.5 1.5 0 001.5 1.5zm7.5 0A10 10 0 1112 2a10 10 0 0110 10zm-2 0a8 8 0 10-8 8 8 8 0 008-8zm-8 4a6 6 0 01-4.24-1.76l-.71.76a7 7 0 009.89 0l-.71-.71A6 6 0 0112 16z"></path>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" width="24" height="24" focusable="false">
                        <path d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm1 13a1 1 0 01-.29.71L16 14l-2 2-6-6-4 4V7a1 1 0 011-1h14a1 1 0 011 1zm-2-7a2 2 0 11-2-2 2 2 0 012 2z"></path>
                    </svg>
                </div>
            </div>
            {showCommentPost && (
                <div>
                    <button onClick={handePostButton} className="post-button">Post</button>
                </div>
            )}
            {isRendered && (
                <div className="comment-rendered">
                    <img src={user_avatar || defaultimage} className="comment-done-avatar"/>
                    <div className="comment-details">
                        <div className="comment-name-description">
                            <div className="comment-name">{ username }</div>
                            <div className="comment-description">{ description }</div>
                        </div>
                        <div className="comment-text">{postedComment}</div>
                    </div>
                    <button className="comment-delete-choose-button" onClick={showingDeleteButton}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
                            <path d="M14 12a2 2 0 11-2-2 2 2 0 012 2zM4 10a2 2 0 102 2 2 2 0 00-2-2zm16 0a2 2 0 102 2 2 2 0 00-2-2z"></path>
                        </svg>
                    </button>
                    {deleteButton && (
                        <button onClick={deleting} className="comment-delete-button">Delete</button>
                    )}
                </div>
            )}
        </div>
    )
}

const PostCard = ({ postCard }) => {
    const [counter, setCounter] = useState(postCard.like_count);
    const [showCommentInput, setShowCommentInput] = useState(false)
    const [commentCounter, setCommentCounter] = useState(postCard.comment_count)

    // Repost
    const hanldeRepost = () => {
            baseUrl.post("/repost", {
                post_id: postCard.post_id,
                user_id: postCard.user_id
        })
    }

    const showComment = () => {
        setShowCommentInput(true)
    }

    return(
        <div className="share-feed">
            <div className="user-menu-container">
                <div className="user-details">
                    <img src={postCard.user_avatar || defaultimage} className="profile-image-feed"/>
                    <div className="user-name-description">
                        <span className="user-name">{postCard.username}</span>
                        <span className="user-description">{postCard.description}</span>
                        <span className="post-date">{postCard.created_date}
                            <span style={{margin: '4px', color: '#00000099'}}>•</span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" width="16" height="16" focusable="false">
                                <path d="M8 1a7 7 0 107 7 7 7 0 00-7-7zM3 8a5 5 0 011-3l.55.55A1.5 1.5 0 015 6.62v1.07a.75.75 0 00.22.53l.56.56a.75.75 0 00.53.22H7v.69a.75.75 0 00.22.53l.56.56a.75.75 0 01.22.53V13a5 5 0 01-5-5zm6.24 4.83l2-2.46a.75.75 0 00.09-.8l-.58-1.16A.76.76 0 0010 8H7v-.19a.51.51 0 01.28-.45l.38-.19a.74.74 0 01.68 0L9 7.5l.38-.7a1 1 0 00.12-.48v-.85a.78.78 0 01.21-.53l1.07-1.09a5 5 0 01-1.54 9z"></path>
                            </svg>
                        </span>
                    </div>
                </div>
                <div className="feed-shared-control-menu">
                    <button className="feed-shared-control-menu-button">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" width="24" height="24" focusable="false">
                            <path d="M14 12a2 2 0 11-2-2 2 2 0 012 2zM4 10a2 2 0 102 2 2 2 0 00-2-2zm16 0a2 2 0 102 2 2 2 0 00-2-2z"></path>
                        </svg>
                    </button>
                    <button className="feed-shared-control-menu-button">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" width="16" height="16" focusable="false">
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
                        <span className="interaction-text">{postCard.repost_count} Repost</span>
                    </div>
                </div>
            </div>
            <div className="share-feed-action-bar">
                <button className="share-feed-action-bar-button">
                    <Like post_id={postCard.post_id} status={postCard.status} user_id={postCard.user_id} setCounter={setCounter} className="share-feed-action-bar-img"/>
                </button>
                <button onClick={showComment} className="share-feed-action-bar-button">
                    <img src={comment} className="share-feed-action-bar-img"/>
                    <span>Comment</span>
                </button>
                <button className="share-feed-action-bar-button" onClick={hanldeRepost}>
                    <img src={repost} className="share-feed-action-bar-img"/>
                    <span>Repost</span>
                </button>
                <button className="share-feed-action-bar-button">
                    <img src={send} className="share-feed-action-bar-img"/>
                    <span>Send</span>
                </button>   
            </div>
            {showCommentInput && <Comment commentCounter={commentCounter} user_id={postCard.user_id} post_id={postCard.post_id} user_avatar={postCard.user_avatar} username={postCard.username} description={postCard.description} comment_content={postCard.comment_content} setCommentCounter={setCommentCounter} comment_id={postCard.comment_id}/>}
        </div>
    )
}

export default PostCard;