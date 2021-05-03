import * as actionTypes from "./actionTypes"
import { ItemDataAction, ItemDataState } from "./type/item"
import { ITeamsData } from "./type/teams"
const initialItemData: ItemDataState = {
  data: undefined
}

export const reducerItemData = (
  state: ItemDataState = initialItemData,
  action: ItemDataAction
): ItemDataState => {
  switch (action.type) {
    case actionTypes.GET_ITEMS_DATA:
      return {
        ...state,
        data: action.data,
      }
  }
  return state
}
