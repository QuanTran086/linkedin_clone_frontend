import React from "react";
import Axios from "axios";
import { useState, useEffect } from "react";
import PostCard from "./PostCard";

const Post = () => {
    const [post, setPost] = useState([{}])

    useEffect(() => {
        Axios.get("http://localhost:5000/posts").then(
            response => { 
                setPost(response.data)
            }
        )
    }, [])

    let postCards = [];
     
    for (var i = 0; i < post.length; i++) {
        postCards.push(<PostCard postCard={post[i]} key={i} setPostCard={setPost}/>);
    }

    return(
        <div>{postCards}</div>
    )
}

export default Post;