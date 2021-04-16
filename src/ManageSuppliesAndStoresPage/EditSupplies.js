import React, { Component } from 'react';
import { connect } from 'react-redux'
import Placeholder from '../globalComponents/Placeholder'
import CreateSupplyForm from './CreateSupplyForm';

class EditSupplies extends Component {

    constructor(){
        super()
        this.state = {
            suppliesByCategory: {"all": []},
            currentSupply: this.emptySupply,
            currentCategory: "all",
            supplyInput: <Placeholder />
        }
    }
    
    componentDidMount(){
        this.props.supplies.forEach(supply => this.supplyCategories.indexOf(supply.sub_category) < 0 ? this.supplyCategories.push(supply.sub_category) : false)
        this.setState({ suppliesByCategory: this.createSuppliesByCategory() })
        console.log(this.supplyCategories)
    }

    supplyCategories = []

    emptySupply = {
        name: "",
        category: "food",
        sub_category: "---",         
        unit: ""
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

    selectCategory = (cat) => {
        this.setState({ currentCategory: cat })
    }

    selectSupply = (id) => {
        // can't get input to change - maybe do separate list of edited supplies with remove buttons??
        let supply = this.props.supplies.find(sup => sup.id == id)
        console.log(supply)
        console.log(this.state.currentSupply)
        this.setState({ supplyInput: <CreateSupplyForm supply={ supply } /> })
    }

    render() {
        return (
        <div>
            <h2>Edit Supplies</h2>
            
            <label>
                Sub Categories: 
                <select onChange={ event => this.selectCategory(event.target.value) }>
                    <option value="all">all</option>
                    { this.supplyCategories.map(cat => <option value={cat.name}>{cat}</option>) }
                </select>
            </label>
           
            <label>
                Supplies: 
                <select onChange={event => this.selectSupply(event.target.value)}>
                    { this.state.suppliesByCategory[this.state.currentCategory].map(supply => <option value={supply.id}>{supply.name}</option>) }
                </select>
            </label>

            {/* <CreateSupplyForm supply={this.state.currentSupply} /> */}
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