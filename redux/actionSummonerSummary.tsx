import * as actionTypes from "./actionTypes"
import { DispatchSummonerSummary, ISummonerSummary, SummonerSummaryAction } from "./type/summonerSummary";
import { BASE_URL } from "../tools/env";

export function getSumonerSummary(name: string) {

  const action: SummonerSummaryAction = {
    type: actionTypes.GET_SUMMONER_SUMMARY,
    name: name,
  }

  return getSummonerSummaryData(action)
}

export function getSummonerSummaryData(sumonerSum: SummonerSummaryAction) {
  return (dispatch: DispatchSummonerSummary) => {
    fetch(BASE_URL + sumonerSum.name + "?hl=en", {
      "method": "GET",
    })
      .then(response => response.json())
      .then(response => {
        sumonerSum.data = response as ISummonerSummary
        dispatch(sumonerSum)

      })
      .catch(err => {
        console.log(err);
      });
  }
}