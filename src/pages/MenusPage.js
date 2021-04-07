import React, { Component } from 'react';
import { connect } from 'react-redux'

class MenusPage extends Component {

    // constructor(){
    //     super()
    //     this.state = {
    //         view: 
    //     }
    // }

    // changeView = (component) => {
    //     this.setState({ view: component })
    // }

    render() {
        return (
        <div>
            <h1>MENUS PAGE</h1>
            {/* { this.state.view } */}
        </div>
        );
    }

}

const mapStateToProps = state => {
//     return {
//         userName: state.user.name,
        // menus: state.menus
//     }
}
  
export default connect(mapStateToProps)(MenusPage)