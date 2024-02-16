import React from "react";
import Axios from "axios";
import { useState, useEffect } from "react";
import PostCard from "./PostCard";
import userAvatar1 from "../../assets/userAvatar1.jpg";
import userAvatar2 from "../../assets/userAvatar2.jpg";
import post1Image from "../../assets/post1.jpg";
import post2Image from "../../assets/post2.jpg";


const Post = () => {
    const [post, setPost] = useState([{}])

    useEffect(() => {
        Axios.get("http://localhost:5000/posts").then(
            response => { 
                setPost(response.data)
                console.log(post)
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