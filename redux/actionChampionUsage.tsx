import * as actionTypes from "./actionTypes"
import { BASE_URL } from "../tools/env";
import { ChampionUsageAction, DispatchChampionUsage, IChampionUsage } from "./type/championUsage";

export function getChampionUsage(name: string) {

  const action: ChampionUsageAction = {
    type: actionTypes.GET_CHAMPION_USAGE,
    name: name,
  }

  return getChampionUsageData(action)
}

export function getChampionUsageData(championUsage: ChampionUsageAction) {
  return (dispatch: DispatchChampionUsage) => {
    fetch(BASE_URL + championUsage.name + "/mostInfo?hl=en", {
      "method": "GET",
    })
      .then(response => response.json())
      .then(response => {
        championUsage.data = response as IChampionUsage
        dispatch(championUsage)

      })
      .catch(err => {
        console.log(err);
      });
  }
}