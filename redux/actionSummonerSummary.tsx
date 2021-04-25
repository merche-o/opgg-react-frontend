import * as actionTypes from "./actionTypes"
import ObjectMapper from "@vm-lib/react-object-mapper/om/ObjectMapper";
import { ISummonerSummary } from "./type/summonerSummary";

export function getSumonerSummary(name: string) {
  
    const action: SummonerSummaryAction = {
      type: actionTypes.GET_SUMMONER_SUMMARY,
      name: name,
    }
  
    return getSummonerSummaryData(action)
  }

  export function getSummonerSummaryData(sumonerSum : SummonerSummaryAction){
    return (dispatch: DispatchSummonerSummary) => {
        fetch("https://codingtest.op.gg/api/summoner/"+ sumonerSum.name+"?hl=en", {
            "method": "GET",
          })
          .then(response => response.json())
          .then(response => {
              sumonerSum.data = response as ISummonerSummary
            console.log("------")
            console.log(sumonerSum.data)
            console.log("------")
            console.log("------")
           // console.log(datas as ISummonerSummary)
            console.log("------")
            dispatch(sumonerSum)

        })
          .catch(err => { console.log(err); 
          });
    }
  }