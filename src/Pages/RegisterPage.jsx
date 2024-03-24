import { useState } from "react"
import { useNavigate } from "react-router-dom"
import InputGroup from "../Components/InputGroup"

export default function RegisterPage({setUser}){
    const navigate = useNavigate()
    const [userName,setUserName] = useState("")
    const [password,setPassword] = useState("")
    const [pwConfirm, setPwConfirm] = useState("")
    const [error, setError] = useState("")

    async function handleSubmit(e){
        e.preventDefault()

        if(password != pwConfirm){
            setError("Passwords do not match")
            return
        }
        try{
            const registerReq = await fetch("http://localhost:3000/register",{
                method: "POST",
                headers: {
                    'content-type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify({
                    username: userName,
                    password: password
                })
            })
            if(!registerReq.ok){
                setError("Error Signing Up")
                return
            }
            const loginReq = await fetch("http://localhost:3000/login",{
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
                setError("failed to login")
                return
            }
            const user = await loginReq.json()

            localStorage.setItem("user", json.stringify({
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
        <>

        {error && <strong className="error-msg">{error}</strong>}

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
            <InputGroup
                type="password"
                name="pwConfirm"
                label="Confirm Password"
                value={pwConfirm}
                setValue={setPwConfirm}
             />
            <button>Register</button>
        </form>
        </>
    )
}