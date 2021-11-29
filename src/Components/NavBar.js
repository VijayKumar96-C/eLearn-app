import React from "react";
import{Link,Route, withRouter} from 'react-router-dom'
import {useDispatch, useSelector} from "react-redux"
import Register from "./Register";
import Login from "./Login";
import Home from "./Home"
import Account from "./Account";
import StudRegister from "./StudRegister";
import StudLogin from "./StudLogin"
import { logoutAdmin } from "../Action/adminAction";
import {StudLogout} from "../Action/StudentAction"
import Lectures from "./Lectures";

const NavBar = (props)=>{
    const dispatch = useDispatch()
    const isLogin =useSelector((state)=>{
        return state.admin.isLogin
    }) 
    const isStudLogin = useSelector((state)=>{
        return state.student.isLoggedIn
    })
    // console.log("isLogin", isLogin)
    const handleLogout = ()=>{
        alert("are you sure wanna logout ??")
        localStorage.removeItem("AdminToken")
        dispatch(logoutAdmin())
        props.history.push("/")       
    }
    const handleStudentLogout = ()=>{
        alert("Are you sure wanna logout ??")
        localStorage.removeItem("StudToken")
        dispatch(StudLogout())
        props.history.push("/")
    }
    return(
        <div>       
            <Link to='/Home' >Home</Link> <br/>
            {
                isStudLogin ? (
                    <div>
                        <Link to="Student/lectures" >Course</Link>
                        <button onClick={handleStudentLogout} >Logout</button>
                    </div>
                ) : 
                ( <div>
                    
            {isLogin ? ( 
                <div>
                <Link to='/Account' >Account</Link> <br/>
                <Link to="/StudentRegister" >Student Register</Link>

                <button onClick={handleLogout} >Logout</button>
                </div>
            ) : (
                <div>
                 <Link to='/Register' >Register</Link> <br/>
                 <Link to='/Login' >Admin Login</Link> <br/>  
                 <Link to="/Student/Login" >Student Login</Link>
                </div>
            )}
            
                </div>)
            }
            
            <Route path='/Home' component={Home} exact={true} />
            <Route path='/Register'component={Register} exact={true}  />
            <Route path='/Login' component={Login} exact={true} />
            <Route path='/Account' component={Account} exact={true} />
            <Route path="/StudentRegister" component={StudRegister} exact={true} />
            <Route path="/Student/Login" component={StudLogin} exact ={true} />
            <Route path='Student/lectures' component={Lectures} exact={true} />
        </div>
    )
}
const WrappedComponent = withRouter(NavBar)
export default WrappedComponent