const suppliesReducer = (state = {array: [], dictionary: {}}, action) => {
    switch(action.type){
        case "LOAD_SUPPLIES": 
            let supplies = action.payload
            return supplies

        default:
            return state
    }
}

export default suppliesReducer