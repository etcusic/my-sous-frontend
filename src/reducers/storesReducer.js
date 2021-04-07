const storesReducer = (state = [], action) => {
    switch(action.type){
        case "LOAD_STORES": 
            let stores = action.payload
            return stores

        default:
            return state
    }
}

export default storesReducer