import "./Post.css"
import { Link } from "react-router-dom";

export default function Post({post}){
    return(
        <Link to={`/post/${post._id}`} className="Post">
            <h2>{post.title}</h2>
            <p className="PostDescription">{post.description}</p>
            <p className="PostDate">{post.date}</p>
        </Link>
    )
}