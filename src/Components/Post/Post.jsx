import { Link } from "react-router-dom";

export default function Post({post}){
    return(
        <Link to={`/post/${post._id}`} className="Post">
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <p>{post.date}</p>
        </Link>
    )
}