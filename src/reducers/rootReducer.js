import { combineReducers } from 'redux'
import user from './userReducer'
import pantry from './pantryReducer'
import recipes from './recipesReducer'
import menus from './menusReducer'
import groceryLists from './groceryListsReducer'
import supplies from './suppliesReducer'
import stores from './storesReducer'

export default combineReducers({
    user, supplies, pantry, recipes, menus, groceryLists, stores
})

