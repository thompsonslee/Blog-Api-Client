import { useParams } from "react-router-dom"
import { useState } from 'react'
import { useEffect } from "react"
import Header from "../Components/Header/Header"

export default function PostPage({user, logout}){
    const [post,setPost] = useState()
    const [comments,setComments] = useState()

    const postID = useParams().postID


    async function getPost(){
    const res = await fetch(`http://localhost:3000/posts/${postID}`)
    const data = await res.json()
    setPost(data.posts)
    setComments(data.comments)
    console.log(data)
    }

    useEffect(() => {
        getPost()
    },[])

 //   <Header user={user} logout={logout} />

    return(
    <>

        {(post === undefined) ? (
            <div>Loading...</div>
        ) : (
            <h1>{post.title}</h1>
        )}
    </>
    )
}