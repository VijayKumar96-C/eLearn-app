import react,{useState} from "react"
import { useDispatch } from "react-redux"
import { startStudLogin } from "../Action/StudentAction"

const StudLogin = (props)=>{
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch =useDispatch()

    const handleChange=(e)=>{
        if(e.target.name === "email") {
            setEmail(e.target.value)
        } else if(e.target.name === "password") {
            setPassword(e.target.value)
        }
    }
    const reset = ()=>{
        props.history.push("/")
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        const data = {
            email,
            password
        }
        console.log(data)
        dispatch(startStudLogin(data,reset))
        setEmail('')
        setPassword('')
    }
    
    return (
        <div>
            <form onSubmit={handleSubmit} >
                <input type="text" name="email" value={email} placeholder="Email" onChange={handleChange} /><br/>
                <input type="password" name="password" value={password} placeholder="Password" onChange={handleChange} /> <br/>
                <input type="submit"  value="Login" />
            </form>
        </div>
    )
}
export default StudLogin