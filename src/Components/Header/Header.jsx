import "./Header.css"
import { Link } from "react-router-dom";

export default function Header({user,logout}){

    return(
        <div className="Header">
            <Link to="/">
                <h1>My Blog</h1>
            </Link>
            {(user) ? (
                <div className="Header-nav">
                    <div>Currently logged in as {user}</div>
                    <Link onClick={logout}>Logout</Link>
                </div>
            ) : (
                <div className="Header-nav">
                    <Link to={"/login"}>Login</Link>
                    <Link to={"/register"}>Register</Link>
                </div>
            )}
        </div>
    )
}