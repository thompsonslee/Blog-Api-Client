import { useState } from "react"
import { useNavigate } from "react-router-dom"
import InputGroup from "../Components/InputGroup/InputGroup"
import ErrorBox from "../Components/ErrorBox/ErrorBox"

export default function LoginPage({setUser}){
    const navigate = useNavigate()
    const [userName,setUserName] = useState("")
    const [password,setPassword] = useState("")
    const [error, setError] = useState("")

    async function handleSubmit(e){
        e.preventDefault()

        try{
            const loginReq = await fetch("https://tundra-loving-promotion.glitch.me//login",{
                method:"POST",
                headers: {
                    'content-type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify({
                    username: userName,
                    password: password
                })
            })
            if(!loginReq.ok){
                setError("Username or Password Incorrect")
                return
            }
            const user = await loginReq.json()
            localStorage.setItem("user", JSON.stringify({
                username: userName,
                token: `Bearer ${user.token}`
            }))
            setUser(userName)
            navigate("/")

        }catch(e){
            return e
        }
    }
    return(
        <div className="formContainer">
            {error && <ErrorBox error={error} />}

            <form onSubmit={handleSubmit}>
                <InputGroup 
                    type= "text"
                    name="username"
                    label="Username"
                    value={userName}
                    setValue={setUserName}
                />
                <InputGroup 
                    type="password"
                    name="Password"
                    label="Password"
                    value={password}
                    setValue={setPassword}
                />
                <button className="submitButton"
                    disabled={(userName && password) ? false : true}
                >Login</button>
            </form>
        </div>
    )
}