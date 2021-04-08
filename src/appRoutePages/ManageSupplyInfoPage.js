import React, { Component } from 'react';
import { connect } from 'react-redux'

class ManageSupplyInfoPage extends Component {

    render() {
        return (
        <div>
            <h1>MANAGE SUPPLY INFO PAGE</h1>
            <ul>
                { Object.keys(this.props.supplies).map(key => <li>{ this.props.supplies[key].name }</li>) }
            </ul>
        </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        supplies: state.supplies
    }
}
  
export default connect(mapStateToProps)(ManageSupplyInfoPage)