const adminInitialState={
    token:{},
    isLogin :false,
    data :[]
}
const adminLogin = (state = adminInitialState, action)=>{
    switch (action.type){
        case "ADMINLOGIN" : {
            return {...state,token:action.payload,isLogin: true }
        }
        case "GETDATA" : {
            return {...state, data:action.payload}
        }
        case "LOGOUT" : {
            return {...state,data:[], isLogin: false}
        }
        default : {
            return state
        }   
    }
}

export default adminLogin