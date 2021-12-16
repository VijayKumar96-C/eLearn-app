import react from "react"
import { useSelector } from "react-redux"

const StudentDetails = (props)=>{
    const {handleView} = props
    const data= useSelector((state)=>{
        return state.admin.stud 
    })
    console.log("studentdetails",data)
    return (
        <div> { (data.length  > 0)
            ? (
                <div>
                    <h3>Name-{data.name}</h3>
                    <h3>Email-{data.email}</h3>
                    <h3>Role-{data.role}</h3>
                    <ul>
                        {data.courses.map((ele)=>{
                            return <li>{ele}</li>
                        })}
                    </ul>
                    <button onClick={handleView} >Cancel</button> 
                </div>
            )
             : (
                 <div><h3>Loading...</h3></div>
             )
            }
            
        </div>
    )
}

export default StudentDetails