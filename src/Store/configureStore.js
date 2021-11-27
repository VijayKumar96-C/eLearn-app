import {createStore, combineReducers} from "redux"
import regReducer from "../Reducer/regReducer"


const configureStore = ()=>{
     const store=createStore(combineReducers({
         register : regReducer
     }))
     return store
}

export default configureStore