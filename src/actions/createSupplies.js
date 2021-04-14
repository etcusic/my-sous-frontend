import { API_ROOT } from '../apiRoot'

export const createSupplies = (supply) => {
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
        .then(data => dispatch({ type: "ADD_SUPPLY", payload: data }))
    }
    
}