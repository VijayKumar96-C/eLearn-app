import React from "react";
import{Link,Route, withRouter} from 'react-router-dom'
import {useDispatch, useSelector} from "react-redux"
import Register from "./Register";
import Login from "./Login";
import Home from "./Home"
import Account from "./Account";
import StudRegister from "./StudRegister";
import { logoutAdmin } from "../Action/adminAction";

const NavBar = (props)=>{
    const dispatch = useDispatch()
    const isLogin =useSelector((state)=>{
        return state.admin.isLogin
    }) 
    // console.log("isLogin", isLogin)
    const handleLogout = ()=>{
        alert("are you sure wanna logout ??")
        localStorage.removeItem("AdminToken")
        dispatch(logoutAdmin())
        props.history.push("/")
        
    }
    return(
        <div>       
            <Link to='/Home' >Home</Link> <br/>
            {isLogin ? ( 
                <div>
                <Link to='/Account' >Account</Link> <br/>
                <Link to="/StudentRegister" >Student Register</Link>
                <button onClick={handleLogout} >Logout</button>
                </div>
            ) : (
                <div>
                 <Link to='/Register' >Register</Link> <br/>
                 <Link to='/Login' >Login</Link>
                </div>
            )}
            
            <Route path='/Home' component={Home} exact={true} />
            <Route path='/Register'component={Register} exact={true}  />
            <Route path='/Login' component={Login} exact={true} />
            <Route path='/Account' component={Account} exact={true} />
            <Route path="/StudentRegister" component={StudRegister} exact={true} />
        </div>
    )
}
const WrappedComponent = withRouter(NavBar)
export default WrappedComponent