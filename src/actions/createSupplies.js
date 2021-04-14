import { API_ROOT } from '../apiRoot'

export const createSupplies = (event, userId, supply) => {
    event.preventDefault()
    supply["user_id"] = userId
    console.log(supply)
    const configObject = {
        method: 'POST',
        headers: {
            "Content-Type": 'application/json',
            "Accept": 'application/json'
        },
        body: JSON.stringify(supply)
    }

    return dispatch => {
        return fetch(`${API_ROOT}/users/${userId}/supplies`, configObject)
        .then(response => response.json())
        .then(data => {
            dispatch({ type: "ADD_SUPPLY", payload: data })
        })
    }

    // return(dispatch) => {
    //     console.log(supply)
    //     return fetch(`${API_ROOT}/users/${userId}/supplies`, configObject)
    //     .then(response => response.json())
    //     .then(data => {
    //         dispatch({ type: "ADD_SUPPLY", payload: data })
    //     })
    // }
    
}