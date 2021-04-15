import React, { Component } from 'react';
import { connect } from 'react-redux'
import UnderConstruction from '../greetingComponents/UnderConstruction';

class PantryContainer extends Component {

    constructor(){
        super()
        this.state = {
            ingredients: []
        }
    }

    componentDidMount(){
        let ings = this.props.pantry.map(ing => {
            let newIng = Object.assign({}, this.props.supplies[ing.supply_id])
            newIng.quantity = ing.quantity
            return newIng
        })
        this.setState({ ingredients: [...ings] })
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
        pantry: state.pantry,
        supplies: state.supplies.array
    }
}
  
export default connect(mapStateToProps)(PantryContainer)