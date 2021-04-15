import React, { Component } from 'react';
import { connect } from 'react-redux'
import Placeholder from '../globalComponents/Placeholder'

class EditSupplies extends Component {

    constructor(){
        super()
        this.state = {
            suppliesByCategory: {"all": []},
            currentSupply: {},
            currentCategory: "all",
            supplyInput: <Placeholder />
        }
    }
    
    componentDidMount(){
        this.setState({ suppliesByCategory: this.createSuppliesByCategory() })
    }

    createSuppliesByCategory(){
        const suppliesByCategory = {"all": this.props.supplies}
        this.props.supplies.forEach(supply => {
            if (suppliesByCategory[supply.sub_category]){
                suppliesByCategory[supply.sub_category].push(supply)
            } else {
                suppliesByCategory[supply.sub_category] = [supply]
            }
        })
        return suppliesByCategory
    }

    render() {
        return (
        <div>
            <h2>Edit Supplies</h2>
            
            <select>

            </select>

            <select>

            </select>

            { this.state.supplyInput }
        </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        supplies: state.supplies
    }
}
  
export default connect(mapStateToProps)(EditSupplies)