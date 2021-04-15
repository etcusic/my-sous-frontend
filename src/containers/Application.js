import React, { Component } from 'react';
import { connect } from 'react-redux'
import { initializeApp } from '../actions/initializeApp.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from '../appComponents/NavBar'
import ProfileContainer from '../ProfilePage/ProfileContainer';
import MenusContainer from '../MenusPage/MenusContainer';
import PantryContainer from '../PantryPage/PantryContainer';
import RecipesContainer from '../RecipesPage/RecipesContainer';
import GroceryListContainer from '../GroceryListPage/GroceryListContainer';
import ManageSuppliesAndStoresContainer from '../ManageSuppliesAndStoresPage/ManageSuppliesAndStoresContainer.js';

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
                <Route exact path="/" component={ ProfileContainer } />
                <Route exact path="/menus" component={ MenusContainer } />
                <Route exact path="/pantry" component={ PantryContainer } />
                <Route exact path="/recipes" component={ RecipesContainer } />
                <Route exact path="/grocery_list" component={ GroceryListContainer } />
                <Route exact path="/supply_info" component={ ManageSuppliesAndStoresContainer } />
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