import React,{useState} from "react";
import "../css/style.css"

const Login = ()=>{
    const [userEmail, setUserEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleChange=()=>{

    }
    const handleSubmit=(e)=>{
        e.preventDefault()
    }
    return (
        <div className="Login" >
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" value={userEmail} onChange={handleChange} placeholder="User Email" />
                <input type="password" value={password} onChange={handleChange} placeholder="Password" />
                <input type="submit" value="Login" />
            </form>
        </div>
    )
}
export default Login