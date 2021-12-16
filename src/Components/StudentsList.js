import React, {useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import StudentDetails from "./StudentDetails"
import {startEachStudData} from "../Action/adminAction"

const StudentsList =()=>{
    const [toggle,setToggle] = useState(false)
    const [search, setSearch] = useState('')
    const dispatch=useDispatch()
    const data = useSelector((state)=>{
        return state.admin.student
        
    })

    // console.log(data)
    const handleChange=(e)=>{
        setSearch(e.target.value)
    }
    const handleView = (ele)=>{
           setToggle(!toggle)
           dispatch(startEachStudData(ele._id))
    }
    return (
        <div>
            <h2>Students List</h2>
            <input type='text' value={search} onChange={handleChange}   placeholder="Search students" />
            <table>
                <thead>
                    <tr>
                        <th>Sl.No</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>isAllowed</th>
                        <th>Role</th>
                    </tr>
                </thead>
                <tbody>                   
                {(data.filter((ele)=>{
                    if (search =='') {
                        return ele
                    } else if (ele.name.toLowerCase().includes(search.toLowerCase())) {
                        return ele
                    }
                })).map((ele,i)=>{
                    return( 
                        <tr key={i} >
                            <td>{i+1}</td>
                            <td>{ele.name}</td>
                            <td>{ele.email}</td>
                            <td>{ele.isAllowed}</td>
                            <td>{ele.role}</td>
                            <td><button onClick={()=>{handleView(ele)}} >View</button></td>
                            <td><button>Edit</button></td>
                        </tr>
                    )                   
                })}
                </tbody>
            </table>
            { toggle && <StudentDetails handleView={handleView} />}
        </div>

    )
}
export default StudentsList