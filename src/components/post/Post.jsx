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

    return (
        <div>
            {post.map((post, index) => (
                <PostCard postCard={post} key={index} setPostCard={setPost}/>
            ))}
        </div>
    );
}

export default Post;