import React, { Component } from 'react';
import { connect } from 'react-redux'
import UnderConstruction from '../greetingComponents/UnderConstruction';

class GroceryListContainer extends Component {

    render() {
        return (
        <div>
            <h1>GROCERY LIST PAGE</h1>
            <UnderConstruction />
        </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        groceryLists: state.groceryLists
    }
}
  
export default connect(mapStateToProps)(GroceryListContainer)