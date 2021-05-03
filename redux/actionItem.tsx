import { DispatchItemData, ItemDataAction, rootItem } from "./type/item"
import * as actionTypes from "./actionTypes"
import { ITEM_URL } from "../tools/env"


export function getItems(){

    const action: ItemDataAction = {
      type: actionTypes.GET_ITEMS_DATA
    }
    return getItemsData(action)
}

export function getItemsData(itemAction : ItemDataAction) {
    return (dispatch: DispatchItemData) => {
        fetch(ITEM_URL, {
          "method": "GET",
        })
          .then(response => response.json())
          .then(response => {
            itemAction.data = response["data"] as rootItem[]           
            dispatch(itemAction)
          })
          .catch(err => {
            console.log(err);
          });
      }
    }