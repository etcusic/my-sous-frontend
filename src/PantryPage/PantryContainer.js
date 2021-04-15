import React, { Component } from 'react';
import { connect } from 'react-redux'
import UnderConstruction from '../globalComponents/UnderConstruction';

class PantryContainer extends Component {

    constructor(){
        super()
        this.state = {

        }
    }

    componentDidMount(){
        
    }

    render() {
        return (
            <div>
                <h1>PANTRY PAGE</h1>
                <UnderConstruction />
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        pantry: state.pantry
    }
}
  
export default connect(mapStateToProps)(PantryContainer)