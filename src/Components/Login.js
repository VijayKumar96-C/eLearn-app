import React,{useState} from "react";
import { useDispatch } from "react-redux";
import {startadminLogin }from "../Action/adminAction"
import "../css/style.css"

const Login = (props)=>{
    const [userEmail, setUserEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch=useDispatch()
    const handleChange=(e)=>{
        if(e.target.name =="userEmail"){
            setUserEmail(e.target.value)
        } else if (e.target.name == "password"){
            setPassword(e.target.value)
        }
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        const loginData={ 
            email : userEmail,
            password
        }
        const reset = ()=>{
                    setUserEmail('')
                    setPassword('')
                    props.history.push('/')
        }
        dispatch(startadminLogin(loginData,reset)) 
    }
    
    return (
        <div className="Login" >
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="userEmail" value={userEmail} onChange={handleChange} placeholder="User Email" />
                <input type="password" name="password" value={password} onChange={handleChange} placeholder="Password" />
                <input type="submit" value="Login" />
            </form>
        </div>
    )
}
export default Login