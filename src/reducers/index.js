import { combineReducers } from 'redux'
import user from './userReducer'
import supplies from './suppliesReducer'
import pantry from './pantryReducer'
import recipes from './recipesReducer'
import menus from './menusReducer'
import groceryLists from './groceryListsReducer'
import stores from './storesReducer'

export default combineReducers({
    user, supplies, pantry, recipes, menus, groceryLists, stores
})

