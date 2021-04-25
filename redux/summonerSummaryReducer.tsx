import * as actionTypes from "./actionTypes"

const initialSummonerSummaryState: SummonerSummaryState = {
    summoner :undefined
  }

export const reducerSummonerSummary = (
    state: SummonerSummaryState = initialSummonerSummaryState,
    action: SummonerSummaryAction
  ): SummonerSummaryState => {
    switch (action.type) {
      case actionTypes.GET_SUMMONER_SUMMARY:
      console.log("GET_SUMMONER_SUMMARY")
        return {
          ...state,
          summoner: action.data,
        }
    }
    return state
  }
  