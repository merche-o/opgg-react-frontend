import * as actionTypes from "./actionTypes"

export function launchSearch(search: string) {
    const action: SearchAction = {
        type: actionTypes.LAUNCH_SEARCH,
        value: search
    }
    return searchData(action)
}


export function searchData(searchData: SearchAction) {
    return (dispatch: DispatchSearch) => {
        if (searchData.data == null) {
            searchData.data = {
                currentValue: searchData.value,
                history: [searchData.value]
            } as SearchData
        }

        searchData.data!.currentValue = searchData.value
        searchData.data!.history.push(searchData.value)
        dispatch(searchData)

    }
}