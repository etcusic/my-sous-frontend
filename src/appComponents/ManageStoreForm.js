import React, { Component } from 'react';
import { connect } from 'react-redux'
import AddSupplyInput from './AddSupplyInput'
import StoreSuppliesTable from './StoreSuppliesTable'
import { assembleSupplies } from '../helperFunctions/assembleSupplies'
import { submitStoreSupplyInfo } from '../actions/submitStoreSupplyInfo.js'

class ManageStoreForm extends Component {

    constructor(){
        super()
        this.state = {
            storeName: "",
            storeSupplies: [],
            editedSupplies: [],
            currentSupply: {name: "", cost_per_unit: 0},
            filteredSupplies: []
        }
    }
    
    componentDidMount(){
        // remove this once serializers are applied on backend
        // the ID attribute may be duplicated in this function
        let supplies = assembleSupplies(this.props.currentStore.supplies, this.props.supplies)
        this.setState({
            storeName: this.props.currentStore.name,
            storeSupplies: supplies,
            filteredSupplies: this.props.supplies
        })
    }

    addSupply = () => {
        let currentSupply = Object.assign({}, this.state.currentSupply)
        let supplies = [...this.state.editedSupplies, currentSupply]
        this.setState({ 
            currentSupply: {name: "", cost_per_unit: 0},
            editedSupplies: supplies 
        })
    } 

    editEditedSupply = (supply) => {
        let supplies = [...this.state.editedSupplies.filter(sup => sup.name !== supply.name)]
        this.setState({ 
            currentSupply: supply,
            editedSupplies: supplies
         })
    }

    removeEditedSupply = (supply) => {
        let supplies = [...this.state.editedSupplies.filter(sup => sup.name !== supply.name)]
        this.setState({ editedSupplies: supplies })
    }
  
    editStoreSupply = (supply) => {
        let supplies = [...this.state.storeSupplies.filter(sup => sup.name !== supply.name)]
        this.setState({ 
            currentSupply: supply,
            storeSupplies: supplies
         })
    }

    removeStoreSupply = (supply) => {
        let supplies = [...this.state.storeSupplies.filter(sup => sup.name !== supply.name)]
        this.setState({ storeSupplies: supplies })
    }
   
    changeSupply = (attribute, key) => {
        let supply = Object.assign({}, this.state.currentSupply)
        supply[key] = attribute
        this.setState({ currentSupply: supply })
    }

    changeCategory = (category) => {
        let supplies = this.props.supplies.filter(supply => supply.sub_category === category)
        this.setState({
            filteredSupplies: supplies
        })
    }

    render() {
        return (
        <div>

            <h2>Manage Store Form</h2>
            
            <h3>{ this.state.storeName }</h3> 
            
            <div id="new-supply">
                <AddSupplyInput 
                    currentSupply={ this.state.currentSupply } 
                    changeSupply={ this.changeSupply } 
                    addSupply={ this.addSupply }
                    filteredSupplies={ this.state.filteredSupplies }
                    changeCategory={ this.changeCategory }
                />
            </div>
            
            <div>
                <h3>New & Edited Supplies</h3>
                <StoreSuppliesTable 
                    storeSupplies={ this.state.editedSupplies } 
                    editSupply={ this.editEditedSupply } 
                    removeSupply={ this.removeEditedSupply } 
                />
            </div>

            <div>
                <h3>{ this.state.storeName } Supplies</h3>
                <StoreSuppliesTable 
                    storeSupplies={ this.state.storeSupplies } 
                    editSupply={ this.editStoreSupply } 
                    removeSupply={ this.removeStoreSupply } 
                />
            </div>
            
            <h2>
                <button onClick={ () => submitStoreSupplyInfo(this.state.editedSupplies) }>Submit Changes</button>
            </h2>
        </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        supplies: state.supplies
    }
}
  
export default connect(mapStateToProps, { submitStoreSupplyInfo })(ManageStoreForm)