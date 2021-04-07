import React, { Component } from 'react';
import { connect } from 'react-redux'

class RecipesPage extends Component {

    render() {
        return (
        <div>
            <h1>RECIPES PAGE</h1>
            <ul>
                { this.props.recipes.map(recipe => <li>{ recipe.name } - { recipe.servings } servings</li>)}
            </ul>
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