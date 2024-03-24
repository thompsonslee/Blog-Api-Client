export default function MainPage({user}){
    return(
        <>
        {user ? <div>welcome ${user}</div> : <div>Not logged in</div>}
        </>
    )
}