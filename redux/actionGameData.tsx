import * as actionTypes from "./actionTypes"
import { BASE_URL } from "../tools/env";
import { GameDataAction, DispatchGameData, IGameData } from "./type/GameData";

export function getGameData(name: string) {

  const action: GameDataAction = {
    type: actionTypes.GET_GAME_DATA,
    name: name,
  }

  return getGameDataData(action)
}

export function getGameDataData(gameData: GameDataAction) {
  return (dispatch: DispatchGameData) => {
    fetch(BASE_URL + gameData.name + "/matches?hl=en", {
      "method": "GET",
    })
      .then(response => response.json())
      .then(response => {
        gameData.data = response as IGameData

        dispatch(gameData)

      })
      .catch(err => {
        console.log(err);
      });
  }
}