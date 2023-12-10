import React, { useState} from "react";
import defaultimage from "../../assets/defaultimage.png"
import "./Comment.css";

const Comment = ({ commentCounter, setCommentCounter }) => {    
    const [inputValue, setInputValue] = useState('');
    const [showCommentPost, setShowCommentPost] = useState(false);
    const [isRendered, setIsRendered] = useState(false);
    const [inputField, setInputField] = useState(true);
    const [deleteButton, setDeleteButton] = useState(false)
    const [postedComment, setPostedComment] = useState('');


    const handleComment = (e) => {
        setInputValue(e.target.value);
        if (e.target.value.length > 0) {
            setShowCommentPost(true)
        } else {
            setShowCommentPost(false)
        }
    }

    const handePostButton = () => {
        setPostedComment(inputValue);
        setIsRendered(true)
        setShowCommentPost(false)
        setInputValue('');
        setCommentCounter(commentCounter + 1)
    }

    const showingDeleteButton = () => {
        setDeleteButton(!deleteButton)
    }

    const deleting = () => {
        setIsRendered(false)
        setCommentCounter(commentCounter - 1)
        setDeleteButton(!deleteButton)
    }
    
    return(
        <div>
            {inputField && (
                <div className="comment-box">
                    <img src={defaultimage} className="comment-avatar"/>
                    <div className="comment-input-container">
                        <input className="comment-box-input" value={inputValue} onChange={handleComment} placeholder="Add a comment..."/>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
                            <path d="M8 10.5A1.5 1.5 0 119.5 12 1.5 1.5 0 018 10.5zm6.5 1.5a1.5 1.5 0 10-1.5-1.5 1.5 1.5 0 001.5 1.5zm7.5 0A10 10 0 1112 2a10 10 0 0110 10zm-2 0a8 8 0 10-8 8 8 8 0 008-8zm-8 4a6 6 0 01-4.24-1.76l-.71.76a7 7 0 009.89 0l-.71-.71A6 6 0 0112 16z"></path>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
                            <path d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm1 13a1 1 0 01-.29.71L16 14l-2 2-6-6-4 4V7a1 1 0 011-1h14a1 1 0 011 1zm-2-7a2 2 0 11-2-2 2 2 0 012 2z"></path>
                        </svg>
                    </div>
                </div>
            )}
            {showCommentPost && (
                <div>
                    <button onClick={handePostButton} className="post-button">Post</button>
                </div>
            )}
            {isRendered && (
                <div className="comment-rendered">
                    <img src={defaultimage} className="comment-done-avatar"/>
                    <div className="comment-details">
                        <div className="comment-name-description">
                            <div className="comment-name">Name</div>
                            <div className="comment-description">Description</div>
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

export default Comment