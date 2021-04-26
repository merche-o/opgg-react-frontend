import { DispachTeamsData, ITeamsData, TeamsDataAction } from "./type/teams";
import * as actionTypes from "./actionTypes"
import { BASE_URL } from "../tools/env";

export function getTeamData(name: string, id: string) {

    const action: TeamsDataAction = {
      type: actionTypes.GET_TEAM_DATA,
      name: name,
      id: id
    }
  
    return getTeamDataAPI(action)
  }
  
  export function getTeamDataAPI(gameData: TeamsDataAction) {
    return (dispatch: DispachTeamsData) => {
      fetch(BASE_URL + gameData.name + "/matchDetail/"+gameData.id+"?hl=en", {
        "method": "GET",
      })
        .then(response => response.json())
        .then(response => {
            if (gameData.data == undefined) {
                gameData.data = [{id: gameData.id, data: response as ITeamsData}]
              } else {
          gameData.data?.push({id: gameData.id, data: response as ITeamsData})
              }
          dispatch(gameData)
  
        })
        .catch(err => {
          console.log(err);
        });
    }
  }