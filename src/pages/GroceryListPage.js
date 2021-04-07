import React, { Component } from 'react';
import { connect } from 'react-redux'

class GroceryListPage extends Component {

    render() {
        return (
        <div>
            <h1>GROCERY LIST PAGE</h1>
            { console.log(this.props.groceryLists) }
        </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        groceryLists: state.groceryLists
    }
}
  
export default connect(mapStateToProps)(GroceryListPage)