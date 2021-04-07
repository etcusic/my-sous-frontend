import React, { Component } from 'react';
import { connect } from 'react-redux'

class ManageSupplyInfoPage extends Component {

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
            <h1>MANAGE SUPPLY INFO PAGE</h1>
            {/* { this.state.view } */}
        </div>
        );
    }

}

const mapStateToProps = state => {
//     return {
//         userName: state.user.name,
        // supplies: state.supplies
//     }
}
  
export default connect(mapStateToProps)(ManageSupplyInfoPage)