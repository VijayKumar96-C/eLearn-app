import React,{useState} from "react";
import axios from "axios";
import "../css/style.css"

const Register = (props)=>{
    const[name,setName] = useState('')
    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')
    const[academy, setAcademy] = useState('')
    const[website, setwebsite] = useState('')
    
    const handleChange =(e)=>{
        if(e.target.name == "name"){
            setName(e.target.value)
        } else if ( e.target.name =="email") { 
            setEmail(e.target.value)
        } else if ( e.target.name =="password") {
            setPassword(e.target.value)
        } else if ( e.target.name =="academy") {
            setAcademy(e.target.value)
        }  else if ( e.target.name =="website") {
            setwebsite(e.target.value)
        }
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        const regData = {
            username: name,
            email :email,
            password:password,
            academy :{
                name : academy,
                website:website
            }
        }
        axios.post("http://dct-e-learning.herokuapp.com/api/admin/register",regData)
            .then((response)=>{
                const result = response.data
                if(result.hasOwnProperty("errors")){
                    alert(result.message)
                } else{
                    alert(result.notice)
                    props.history.push('/Login')
                }
            })
            .catch((err)=>{
                alert(err.message)
            })

        console.log(regData)
        setName('')
        setEmail('')
        setPassword('')
        setAcademy('')
        setwebsite('')
        
    }

    return (
        <div className="Register" >
           <h3>Register component</h3>
           <form onSubmit={handleSubmit} >
               <label>Name</label>
               <input type='text' name="name"  value={name} onChange={handleChange} /> <br/>
               <label>Email</label>
               <input type='text' name="email"  value={email} onChange={handleChange} /> <br/>
               <label>Password</label>
               <input type='text' name="password"  value={password} onChange={handleChange} /> <br/>
               <label>Academy</label>
               <input type='text' name="academy"  value={academy} onChange={handleChange}/> <br/>
               <label>Website</label>
               <input type='text' name="website"  value={website} onChange={handleChange}/> <br/>
               <input type='submit' />

           </form>
        </div>
    )
}
export default Register