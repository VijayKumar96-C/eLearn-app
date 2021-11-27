import React from "react";
import{Link,Route, withRouter} from 'react-router-dom'
import {useSelector} from "react-redux"
import Register from "./Register";
import Login from "./Login";
import Home from "./Home"

const NavBar = ()=>{
    const isLogin =useSelector((state)=>{
        return state.admin.isLogin
    }) 
    // console.log("isLogin", isLogin)
    return(
        <div>       
            <Link to='/Home' >Home</Link> <br/>
            {isLogin ? (
                <h2>logOut component</h2>
            ) : (<div>
                 <Link to='/Register' >Register</Link> <br/>
                 <Link to='/Login' >Login</Link>
                </div>
            )}
            
            <Route path='/Home' component={Home} exact={true} />
            <Route path='/Register'component={Register} exact={true}  />
            <Route path='/Login' component={Login} exact={true} />
        </div>
    )
}
const WrappedComponent = withRouter(NavBar)
export default WrappedComponent