import React, { Component } from 'react';
import { connect } from 'react-redux'
import UnderConstruction from '../appComponents/UnderConstruction';

class MenusPage extends Component {

    render() {
        return (
        <div>
            <h1>MENUS PAGE</h1>
            <UnderConstruction />
        </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        menus: state.menus
    }
}
  
export default connect(mapStateToProps)(MenusPage)