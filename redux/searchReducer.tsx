import * as actionTypes from "./actionTypes"

const initialSearchState: SearchState = {
    search : {
        currentValue : "{summonerName}",
        history : ["{summonerName}"] 
    } as SearchData
}
export const reducerSearch = (
    state: SearchState = initialSearchState,
    action: SearchAction
  ): SearchState => {
    switch (action.type) {
      case actionTypes.LAUNCH_SEARCH:
        return {
          ...state,
          search: {
              currentValue : action.data!.currentValue,
              history: action.data!.history
          }
        }
    }
    return state
  }
  