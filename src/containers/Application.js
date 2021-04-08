import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux'
import { initializeApp } from '../actions/initializeApp.js';
import NavBar from '../appComponents/NavBar'
import ProfilePage from '../pages/ProfilePage';
import MenusPage from '../pages/MenusPage';
import PantryPage from '../pages/PantryPage';
import RecipesPage from '../pages/RecipesPage';
import GroceryListPage from '../pages/GroceryListPage';
import ManageSupplyInfoPage from '../pages/ManageSupplyInfoPage';

class Application extends Component {

    componentDidMount(){
        // initialize app takes user Id as an argument 
        // needs to be abstracted when sign in is developed
        this.props.initializeApp(1)
    }
    
  render(){
    return (
      <div className="App">
        <Router>
          <NavBar />
            <main>
              
              <Switch>
                <Route exact path="/" component={ ProfilePage } />
                <Route exact path="/menus" component={ MenusPage } />
                <Route exact path="/pantry" component={ PantryPage } />
                <Route exact path="/recipes" component={ RecipesPage } />
                <Route exact path="/grocery_list" component={ GroceryListPage } />
                <Route exact path="/supply_info" component={ ManageSupplyInfoPage } />
              </Switch>

            </main>
        </Router>
      </div>
    );
  } 
}

const mapStateToProps = state => {
    return {
        userName: state.user.name
    }
  }
  
  export default connect(mapStateToProps, { initializeApp })(Application) 