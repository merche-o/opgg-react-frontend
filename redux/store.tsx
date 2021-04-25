
import {GlobalState} from "./type/global"
import { createStore, applyMiddleware, combineReducers } from "redux"
import thunk from "redux-thunk"
import { reducerSummonerSummary } from "./summonerSummaryReducer"
import { reducerChampionUsage } from "./championUsageReducer"
import { reducerGameData } from "./gameDataReducer"


const rootReducer = combineReducers<GlobalState>({
    gameData: reducerGameData,
    summonerSummatry: reducerSummonerSummary,
    championUsage: reducerChampionUsage
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store