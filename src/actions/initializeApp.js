import { API_ROOT } from '../apiRoot'

export const initializeApp = (userId) => {
    return dispatch => {
        return fetch(`${ API_ROOT }users/${userId}`)
        .then(resp =>  resp.json())
        .then(data => {
            dispatch({ type: "LOAD_USER", payload: { id: data.id, name: data.name }})
            dispatch({ type: "LOAD_PANTRY", payload: data.pantry })
            dispatch({ type: "LOAD_RECIPES", payload: data.recipes })
            dispatch({ type: "LOAD_STORES", payload: data.stores })
            dispatch({ type: "LOAD_SUPPLIES", payload: data.supplies })
        })
    }
}
