import React, { Component } from 'react';
import { connect } from 'react-redux'

class PantryPage extends Component {

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
                <ul>
                    { this.state.ingredients.map(ing => <li>{ ing.name } - { ing.quantity }</li>) }
                </ul>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        pantry: state.pantry,
        supplies: state.supplies
    }
}
  
export default connect(mapStateToProps)(PantryPage)