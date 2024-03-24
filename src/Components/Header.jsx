import { Link } from "react-router-dom";

export default function Header({user,logout}){

    return(
        <div className="header">
            {(user) ? (
                <div>
                    <div>Currently logged in as ${user}</div>
                    <button onClick={logout}>Logout</button>
                </div>
            ) : (
                <div>
                    <Link to={"/login"}>Login</Link>
                    <Link to={"/register"}>Register</Link>
                </div>
            )}
        </div>
    )
}