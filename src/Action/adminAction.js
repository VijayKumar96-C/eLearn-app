import axios from "axios"

 export const startadminLogin = (loginData,reset)=>{
     return (dispatch)=>{
    axios.post("https://dct-e-learning.herokuapp.com/api/admin/login",loginData)
    .then((response)=>{
        const result= response.data
        reset()
        dispatch(adminLoginToken(result))
        localStorage.setItem("AdminToken",result.token)
        dispatch(startGetAdminData(result.token))
    })
    .catch((err)=>{
        alert(err.message)
    })
    }
}
export const adminLoginToken =(result)=>{
    return{
    type : "ADMINLOGIN",
    payload : result
    }
}

export const startGetAdminData = (token)=>{
    return(dispatch)=>{
        console.log("getActiontok",token)
        axios.get("http://dct-e-learning.herokuapp.com/api/admin/account",{
           headers :  {'Authorization' : token }
        })
        .then((response)=>{
             const data = response.data
            // console.log("actionGet",result)
            dispatch(getAdminData(data))
        })
        .catch((err)=>{
            alert(err.message)
        })
    }
}
export const getAdminData=(data)=>{
    return{
        type : "GETDATA",
        payload : data
    }
}

export const logoutAdmin= ()=>{
    return{
        type: "LOGOUT"
    }
}

export const startRegStudent = (data, token,reset) =>{
    return(dispatch) =>{
        axios.post("http://dct-e-learning.herokuapp.com/api/admin/students",data,{
            headers : {'Authorization' : token}
        })
        .then((res)=>{
            const studData = res.data
            alert("successfully registered")
            console.log("actionDATA", studData)
            dispatch(regStudent(studData))
            reset()
        })
        .catch((err)=>[
            alert(err.message)
        ])
    }
}
export const regStudent =(studData)=>{
    return {
        type :"REGSTUDENT",
        payload: studData
    }
}