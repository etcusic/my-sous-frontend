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
        this.props.supplies.forEach(supply => this.supplyCategories.indexOf(supply.sub_category) < 0 ? this.supplyCategories.push(supply.sub_category) : false)
        this.setState({ suppliesByCategory: this.createSuppliesByCategory() })
        console.log(this.supplyCategories)
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

    supplyCategories = []

    render() {
        return (
        <div>
            <h2>Edit Supplies</h2>
            
            <label>
                Sub Categories: 
                <select>
                    <option value="all">all</option>
                    { this.supplyCategories.map(cat => <option value={cat.name}>{cat}</option>) }
                </select>
            </label>
           
            <label>
                Supplies: 
                <select>
                    <option>---</option>
                    { this.state.suppliesByCategory[this.state.currentCategory].map(supply => <option value={supply}>{supply.name}</option>) }
                </select>
            </label>

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