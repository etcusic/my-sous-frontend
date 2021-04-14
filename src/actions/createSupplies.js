import { API_ROOT } from '../apiRoot'

export const createSupplies = (event, userId, supplies) => {
    event.preventDefault()
    console.log(supplies)
    const configObject = {
        method: 'POST',
        headers: {
            "Content-Type": 'application/json',
            "Accept": 'application/json'
        },
        body: JSON.stringify(supplies)
    }

    return dispatch => {
        return fetch(`${API_ROOT}/${userId}/supplies`, configObject)
        .then(response => response.json())
        .then(data => dispatch({ type: "ADD_SUPPLY", payload: data }))
    }
    
}