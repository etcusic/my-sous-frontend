import React, { Component } from 'react';
import { connect } from 'react-redux'
import CreateSupplyForm from './CreateSupplyForm'
class CreateSupplies extends Component {

    constructor(){
        super()
        this.state = {
            supply: this.emptySupply
        }
    }
    
    componentDidMount(){
        console.log(this.props)

    }

    emptySupply = {
        name: "",
        category: "food",
        sub_category: "---",         
        unit: ""
    }

    render() {
        return (
        <div>
            <h2>Create Supplies</h2>
            <CreateSupplyForm supply={ this.state.supply } /> 
        </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        userId: state.user.id
    }
}
  
export default connect(mapStateToProps)(CreateSupplies)