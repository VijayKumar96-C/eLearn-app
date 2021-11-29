import react,{useEffect} from "react"
import { useSelector, useDispatch } from "react-redux"
import { startGetAdminData } from "../Action/adminAction"


const Account = ()=>{
    const dispatch= useDispatch()
    const token = useSelector((state)=>{      
        return state.admin.token.token     
    })
    console.log("account", token)
    useEffect(()=>{
        //dispatch(startGetAdminData(token))
    },[])
    const data = useSelector((state)=>{
        return state.admin.data
    })
    console.log("accountsdata", data)
    return(
        <div> 
                <h2>Admin Details</h2>
                <h3>Name     : {data.username}</h3>
                <h3>Email    : {data.email}</h3>
                <h3>Academy  : {data.academy.name}</h3>
                <h3>Website  : {data.academy.website}</h3>
                </div>
    )
}
export default Account
