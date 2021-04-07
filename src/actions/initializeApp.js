import { API_ROOT } from '../apiRoot'

export const initializeApp = (userId) => {
    // console.log(API_ROOT)
    // console.log(`${ API_ROOT }users/${userId}`)
    // console.log(process.env.NODE_ENV)
    return(dispatch) => {
        return fetch(`${ API_ROOT }users`)
            .then(resp =>  resp.json())
            .then(data => {
                console.log(data)
                dispatch({ type: "LOAD_USER", payload: data.user })
                dispatch({ type: "LOAD_SUPPLIES", payload: data.supplies })
                dispatch({ type: "LOAD_PANTRY", payload: data.pantry })
                dispatch({ type: "LOAD_RECIPES", payload: data.recipes })
                dispatch({ type: "LOAD_STORES", payload: data.stores })
            })
    }
}