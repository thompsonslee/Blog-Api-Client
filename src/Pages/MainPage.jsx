import Header from "../Components/Header"

export default function MainPage({user,logout}){
    return(
        <>
        <Header user={user} logout={logout} />
        <div className="mainPage-main">
            {user ? <div>welcome ${user}</div> : <div>Not logged in</div>}
        </div>
        </>
    )
}