const suppliesReducer = (state = [], action) => {
    let newState = [...state]
    switch(action.type){
        case "LOAD_SUPPLIES": 
            let supplies = action.payload
            return supplies
        case "ADD_SUPPLY":
            newState.push(action.payload)
            return newState

        default:
            return state
    }
}

export default suppliesReducer