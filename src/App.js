import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar'
import ProfilePage from './pages/ProfilePage';
import MenusPage from './pages/MenusPage';
import PantryPage from './pages/PantryPage';
import RecipesPage from './pages/RecipesPage';
import GroceryListPage from './pages/GroceryListPage';
import ManageSupplyInfoPage from './pages/ManageSupplyInfoPage';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
          <div>
            
            <Switch>
              <Route exact path="/" component={ ProfilePage } />
              <Route exact path="/menus" component={ MenusPage } />
              <Route exact path="/pantry" component={ PantryPage } />
              <Route exact path="/recipes" component={ RecipesPage } />
              <Route exact path="/grocery_list" component={ GroceryListPage } />
              <Route exact path="/supply_info" component={ ManageSupplyInfoPage } />
            </Switch>

          </div>
      </Router>
    </div>
  );
}

export default App;
