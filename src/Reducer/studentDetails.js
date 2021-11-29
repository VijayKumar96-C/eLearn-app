const studIntialState= {
    data :[],
    isLoggedIn : false
}
const studentDetails = (state= studIntialState, action)=>{
    switch (action.type) {
        case "REGSTUDENT" : {
            return {...state, data:action.payload}
        }
        default : {
            return state
        }
    }
}
export default studentDetails