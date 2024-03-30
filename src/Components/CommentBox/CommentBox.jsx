import { useParams } from "react-router-dom"
import "./CommentBox.css"
import { useState } from "react"

export default function CommentBox({addComment,user}){
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
            console.log("success")
        }
        else(console.log("error"))
    }


    return(
        <div className="CommentBox">
            <form onSubmit={handleSubmit}>
                <textarea 
                    name="content"
                    value={content}
                    onChange={(e) =>setContent(e.target.value)}
                ></textarea>
                <button>Send</button>
            </form>
        </div>
    )
}