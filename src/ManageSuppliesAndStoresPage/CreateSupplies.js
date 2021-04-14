import React, { Component } from 'react';
import { connect } from 'react-redux'
import CreateSupplyForm from './CreateSupplyForm'
class CreateSupplies extends Component {

    constructor(){
        super()
        this.state = {

        }
    }
    
    componentDidMount(){
        console.log(this.props)

    }

    render() {
        return (
        <div>
            <h2>Create Supplies</h2>
            <CreateSupplyForm /> 
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