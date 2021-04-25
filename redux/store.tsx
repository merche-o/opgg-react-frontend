
import {GlobalState} from "./type/global"
import { createStore, applyMiddleware, combineReducers } from "redux"
import thunk from "redux-thunk"
import { reducerSummonerSummary } from "./summonerSummaryReducer"


const rootReducer = combineReducers<GlobalState>({
    summonerSummatry: reducerSummonerSummary
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store