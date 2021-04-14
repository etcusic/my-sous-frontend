const suppliesReducer = (state = {array: [], dictionary: {}}, action) => {
    switch(action.type){
        case "LOAD_SUPPLIES": 
            let supplies = action.payload
            return supplies
        case "ADD_SUPPLY":
            let newState = {
                array: [...state.array],
                dictionary: Object.assign({}, state.dictionary)
            }
            newState.array.push(action.payload)
            dictionary[action.payload.id] = action.payload
            return newState

        default:
            return state
    }
}

export default suppliesReducer