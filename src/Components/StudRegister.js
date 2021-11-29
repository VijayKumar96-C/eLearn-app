import react, {useState} from "react"
import { useDispatch, useSelector } from "react-redux"
import { startRegStudent } from "../Action/adminAction"

const StudRegister = (props)=>{
    const [name , setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()
    const token= useSelector((state)=>{
        return state.admin.token.token
    })
    const handleChange =(e)=>{
        if(e.target.name === "name") {
            setName(e.target.value)
        } else if( e.target.name === "email" ) {
            setEmail(e.target.value)
        } else if(e.target.name === "password") {
            setPassword(e.target.value)
        }

    }
    const handleSubmit = (e)=>{
        e.preventDefault()
        const data={ 
            name,
            email,
            password
        }
        const reset = ()=>{
            setName("")
            setEmail("")
            setPassword('')
        }
        console.log("student data",token)
        dispatch(startRegStudent(data,token,reset))
    }
    return (

        <div>
            <form onSubmit={handleSubmit} >
                <label>Student Name</label>
                <input type="text" name="name" value={name} onChange={handleChange} /> <br/>
                <label>Student email</label>
                <input type="text" name="email" value={email} onChange={handleChange} /> <br/>
                <label>Password</label> 
                <input type="password" name="password" value={password} onChange={handleChange} /> <br/>
                <input type="submit" />
            </form>
        </div>

    )
}
 export default StudRegister