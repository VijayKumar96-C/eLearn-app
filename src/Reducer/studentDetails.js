const studIntialState= {
    token :[],
    data :[],
    isLoggedIn : false
}
const studentDetails = (state= studIntialState, action)=>{
    switch (action.type) {
        case "REGSTUDENT" : {
            return {...state, data:action.payload}
        }
        case "STUDLOGIN" : {
            return {...state, token:action.payload, isLoggedIn: true}
        }
        case "STUDLOGOUT" :{
            return {...state, token:[], data:[], isLoggedIn: false}
        }
        default : {
            return state
        }
    }
}
export default studentDetails