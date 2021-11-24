import React from "react";
import{Link,Route, withRouter} from 'react-router-dom'
import Register from "./Register";
import Login from "./Login";

const NavBar = ()=>{
    return(
        <div>
            <h2>NavBar component</h2>
            <Link to='/Register' >Register</Link> <br/>
            <Link to='/Login' >Login</Link>
            <Route path='/Register'component={Register} exact={true}  />
            <Route path='/Login' component={Login} exact={true} />
        </div>
    )
}
const WrappedComponent = withRouter(NavBar)
export default WrappedComponent