import {createStore, combineReducers, applyMiddleware} from "redux"
import thunk from "redux-thunk"
import adminLogin from "../Reducer/adminLogin"
import studentDetails from "../Reducer/studentDetails"


const configureStore = ()=>{
     const store=createStore(combineReducers({
         admin : adminLogin,
         student : studentDetails
     }), applyMiddleware(thunk))
     return store
}

export default configureStore