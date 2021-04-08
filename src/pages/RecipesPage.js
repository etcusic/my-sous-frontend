import React, { Component } from 'react';
import { connect } from 'react-redux'
import UnderConstruction from '../components/UnderConstruction';

class RecipesPage extends Component {

    render() {
        return (
        <div>
            <h1>RECIPES PAGE</h1>
            <UnderConstruction />
        </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        recipes: state.recipes
    }
}
  
export default connect(mapStateToProps)(RecipesPage)