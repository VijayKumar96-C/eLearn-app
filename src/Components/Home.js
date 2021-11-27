import react,{useEffect} from "react"
import {useSelector} from "react-redux"

const Home=()=>{
    const token = useSelector((state)=>{
        return state
    })
    return <div>
            <h1>Home component</h1>
            
            </div>
}
export default Home