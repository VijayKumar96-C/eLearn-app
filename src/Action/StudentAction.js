import axios from "axios"

export const startStudLogin = (data,reset)=>{
    return (dispatch) =>{
        axios.post("https://dct-e-learning.herokuapp.com/api/students/login", data)
            .then((res)=>{
                const token= res.data
                console.log(token)
                dispatch(StudLogin(token))
                localStorage.setItem("StudToken", token)
                reset()
            })
            .catch((err)=>{
                alert(err.message)
            })
    }
}
export const StudLogin = (token)=>{
    return {
        type : "STUDLOGIN",
        payload : token
    }
}

export const StudLogout =()=>{
    return {
        type : "STUDLOGOUT"
    }
}