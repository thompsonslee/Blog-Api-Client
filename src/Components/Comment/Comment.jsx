export default function Comment({comment}){
    return(
        <div className="Comment">
            <h3>{comment.user.username}</h3>
            <p>{comment.content}</p>
        </div>
    )
}