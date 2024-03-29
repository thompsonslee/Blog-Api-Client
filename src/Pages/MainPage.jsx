import Header from "../Components/Header/Header"
import Post from "../Components/Post/Post"

export default function MainPage({user,logout,posts}){
    console.log(posts)
    return(
        <>
            <Header user={user} logout={logout} />
            <div className="mainPage-main">
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