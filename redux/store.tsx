
import {GlobalState} from "./type/global"
import { createStore, applyMiddleware, combineReducers } from "redux"
import thunk from "redux-thunk"


const rootReducer = combineReducers<GlobalState>({
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store