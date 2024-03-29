import "./MainPage.css"
import Post from "../../Components/Post/Post"

export default function MainPage({posts}){
    console.log(posts)
    return(
        <>
            <div className="mainPage-grid">
                {(posts != null) ? (
                    posts.map((post) => {
                        return <Post post={post} key={post._id} />
                    })
                ) : (
                    <div>Loading...</div>
                )}
            </div>
        </>
    )
}