import * as actionTypes from "./actionTypes"
import { ChampionUsageAction, ChampionUsageState } from "./type/ChampionUsage"

const initialChampionUsageState: ChampionUsageState = {
  championUsage: undefined
}

export const reducerChampionUsage = (
  state: ChampionUsageState = initialChampionUsageState,
  action: ChampionUsageAction
): ChampionUsageState => {
  switch (action.type) {
    case actionTypes.GET_CHAMPION_USAGE:
      return {
        ...state,
        championUsage: action.data,
      }
  }
  return state
}
