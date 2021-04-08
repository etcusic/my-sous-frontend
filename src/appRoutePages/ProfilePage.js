import React, { Component } from 'react';
import { connect } from 'react-redux'
import UnderConstruction from '../greetingComponents/UnderConstruction';

class ProfilePage extends Component {

    render() {
        return (
        <div>
            <h1>PROFILE PAGE</h1>
            <UnderConstruction />
        </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        userName: state.user.name
    }
}
  
export default connect(mapStateToProps)(ProfilePage)