import React from "react";
import { useState, useEffect } from "react";
import PostCard from "./PostCard";
import userAvatar1 from "../../assets/userAvatar1.jpg";
import userAvatar2 from "../../assets/userAvatar2.jpg";
import post1Image from "../../assets/post1.jpg";
import post2Image from "../../assets/post2.jpg";


const Post = () => {
    const posts = [{
        "post_id": 1, 
        "user_avatar": userAvatar1,
        "name": "Pietro Bolcato",
        "description": "AI Engineer @Kittl | Gen AI, NLP, CV | MLOps | MSc AI, double degree from KTH 🇸🇪 and TU Berlin 🇩🇪 | 2x Azure AI certified",
        "created_date": "2022-03-25",
        "post_content": "🔥 BLIVA: A Multimodal Large Language Model for Better Handling of Text-Rich Visual Questions. In this study, the researchers introduce BLIVA (InstructBLIP with Visual Assistant), a multimodal LLM designed to bridge this gap. BLIVA combines learned query embeddings closely linked to the LLM and image-encoded patch embeddings containing rich image data. This approach enhances text-image comprehension, surpassing previous methods. The model undergoes two-stage training, involving pre-training the patch embeddings projection layer and fine-tuning the Q-former and patch embeddings projection layer using instruction tuning data. BLIVA significantly impacts visual question-answering tasks, particularly in scenarios requiring detailed captions and small captions combined with VQA. It offers a novel approach to multimodal AI, improving text-image understanding.",
        "post_image": post1Image,
        "like": 99,
        "comment": 0,
        "repost": 0
    }, {
        "post_id": 2,
        "user_avatar": userAvatar2,
        "name": "Anna Bertoldini",
        "description" : "Global Head of Employer Branding at NIQ | Frontify Top 30 Brand Visionaries 2023 | Human Storyteller | Personal Branding Expert | Keynote Speaker",
        "created_date": "2023-07-30",
        "post_content": "You’re doing just fine. Keep going.",
        "post_image": post2Image,
        "like": 121,
        "comment": 0,
        "repost": 0
    }]

    const [post, setPost] = useState(() => {
        const storedPosts = localStorage.getItem("post")
        return storedPosts ? JSON.parse(storedPosts) : posts
    })

    useEffect(() => {
        localStorage.setItem('post', JSON.stringify(post))
        localStorage.setItem('total post', post.length)
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