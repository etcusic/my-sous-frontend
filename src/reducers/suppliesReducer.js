const suppliesReducer = (state = [], action) => {
    switch(action.type){
        case "LOAD_SUPPLIES": 
            let supplies = action.payload
            return supplies
        case "ADD_SUPPLY":
            let newState = [...state]
            newState.push(action.payload)
            return newState

        default:
            return state
    }
}

export default suppliesReducer