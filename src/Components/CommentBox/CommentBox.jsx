import { useParams } from "react-router-dom"
import "./CommentBox.css"
import { useState } from "react"

export default function CommentBox({refreshPost,user}){
    const [content,setContent] = useState("")
    const postID = useParams().postID
    const token = localStorage.getItem("token")

    const handleSubmit = async(e) =>{
        e.preventDefault()
        const res = await fetch(`http://localhost:3000/posts/${postID}/comments`,{
            method:"POST",
            headers: {
                'content-type': 'application/json;charset=utf-8',
                'authorization': token
            },
            body: JSON.stringify({
                post: postID,
                user: user.ID,
                content: content
            })
        })
        console.log(res)
        if(res.status === 200){
            refreshPost()
        }
        else(console.log("error"))
    }


    return(
        <form className="CommentBox" onSubmit={handleSubmit}>
            <textarea 
                name="content"
                value={content}
                placeholder="Add a comment..."
                onChange={(e) =>setContent(e.target.value)}
            ></textarea>
            <button className="submitButton">Send</button>
        </form>
    )
}