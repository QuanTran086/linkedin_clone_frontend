import React from "react";
import Axios from "axios";
import { useState, useEffect } from "react";
import PostCard from "./PostCard";

const Post = () => {
    const [post, setPost] = useState([{}])
    const currentUser = JSON.parse(localStorage.getItem("user")).user_id

    useEffect(() => {
        Axios.post("http://localhost:5000/rendering-posts", {user_id: currentUser}).then(
            response => { 
                setPost(response.data)
            }
        )
    }, [])

    return (
        <div>
            {post.map((post) => (
                <PostCard postCard={post} key={post.post_id} setPostCard={setPost}/>
            ))}
        </div>
    );
}

export default Post;