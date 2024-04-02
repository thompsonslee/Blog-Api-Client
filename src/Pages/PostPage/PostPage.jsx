import "./PostPage.css"
import { useParams } from "react-router-dom"
import { useState } from 'react'
import { useEffect } from "react"
import Comment from "../../Components/Comment/Comment"
import CommentBox from "../../Components/CommentBox/CommentBox"

export default function PostPage({user}){
    const [post,setPost] = useState()
    const [comments,setComments] = useState([])

    const postID = useParams().postID


    async function refreshPost(){
    const res = await fetch(`https://tundra-loving-promotion.glitch.me/posts/${postID}`)
    const data = await res.json()
    setPost(data.posts)
    setComments(data.comments)
    console.log(data)
    }

    useEffect(() => {
        refreshPost()
    },[])

    return(
    <>
        {(post === undefined) ? (
            <div>Loading...</div>
        ) : (
            <div className="PostPage">
                <h1>{post.title}</h1>
                <p>{post.content}</p>
                <div className="comment-section">
                    {(user) &&
                    <CommentBox 
                        refreshPost={refreshPost}
                        user={user}
                    />}
                    {(comments.length) ? (
                        comments.map((comment) =><Comment comment={comment} key={comment._id}/>)
                    ) : (
                        <div>No Comments</div>
                    )}
                </div>
            </div>
        )}
    </>
    )
}