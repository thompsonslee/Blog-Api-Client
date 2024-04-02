import { useState } from "react"
import { useNavigate } from "react-router-dom"
import ErrorBox from "../Components/ErrorBox/ErrorBox"
import InputGroup from "../Components/InputGroup/InputGroup"

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
            const registerReq = await fetch("https://tundra-loving-promotion.glitch.me/register",{
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
            const loginReq = await fetch("https://tundra-loving-promotion.glitch.me/login",{
                method:"POST",
                headers: {
                    'content-type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify({
                    username: userName,
                    password: password
                })
            })
            console.log(loginReq)
            if(!loginReq.ok){
                setError("failed to login")
            }
            else{
                const user = await loginReq.json()
                localStorage.setItem("user", JSON.stringify({
                    username: userName,
                    token: `Bearer ${user.token}`
                }))
                setUser(userName)
                navigate("/")
            }
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
                <InputGroup
                    type="password"
                    name="pwConfirm"
                    label="Confirm Password"
                    value={pwConfirm}
                    setValue={setPwConfirm}
                />
                <button 
                    className="submitButton"
                    disabled={(userName && password && pwConfirm) ? false : true}
                    >Register</button>
            </form>
        </div>
    )
}