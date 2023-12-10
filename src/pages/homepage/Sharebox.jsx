import React from "react";
import './Sharebox.css';
import media from "../../assets/media.png"
import event from "../../assets/event.png";
import article from "../../assets/article.png";
import defaultImage from "../../assets/defaultimage.png";

const Sharebox = () => {
    return(
        <div className="share-box-feed-entry">
            <div className="share-box-feed-entry-top-bar">
                <img src={defaultImage} className="share-box-feed-entry-avatar"/>
                <input placeholder="Start a post" className="start-a-post"/>
            </div>
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

export default Sharebox
