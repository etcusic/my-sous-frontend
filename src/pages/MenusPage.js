import React, { Component } from 'react';
import { connect } from 'react-redux'

class MenusPage extends Component {

    render() {
        return (
        <div>
            <h1>MENUS PAGE</h1>
            { console.log(this.props.menus) }
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