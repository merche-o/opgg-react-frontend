import * as actionTypes from "./actionTypes"
import { GameDataAction, GameDataState } from "./type/gameData"
const initialGameDataState: GameDataState = {
  gameData: undefined
}

export const reducerGameData = (
  state: GameDataState = initialGameDataState,
  action: GameDataAction
): GameDataState => {
  switch (action.type) {
    case actionTypes.GET_GAME_DATA:
      return {
        ...state,
        gameData: action.data,
      }
  }
  return state
}
