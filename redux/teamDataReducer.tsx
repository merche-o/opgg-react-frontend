import * as actionTypes from "./actionTypes"
import {TeamsDataAction, TeamsDataState} from "./type/teams"

const initialTeamData: TeamsDataState = {
    teamData: undefined
}

export const reducerTeamData = (
  state: TeamsDataState = initialTeamData,
  action: TeamsDataAction
): TeamsDataState => {
  switch (action.type) {
    case actionTypes.GET_TEAM_DATA:
      return {
        ...state,
        teamData: action.data,
      }
  }
  return state
}
