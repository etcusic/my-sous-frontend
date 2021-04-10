import React, { Component } from 'react';
import { connect } from 'react-redux'
import AddSupplyInput from './AddSupplyInput'
import StoreSuppliesTable from './StoreSuppliesTable'
import StoreNameInput from './StoreNameInput';
import { assembleSupplies } from '../helperFunctions/assembleSupplies'

class ManageStoreForm extends Component {

    constructor(){
        super()
        this.state = {
            storeName: "",
            storeSupplies: [],
            editedSupplies: [],
            currentSupply: {name: "", cost_per_unit: 0}
        }
    }
    
    componentDidMount(){
        // remove this once serializers are applied on backend
        // the ID attribute may be duplicated in this function
        let supplies = assembleSupplies(this.props.currentStore.supplies, this.props.supplies)
        console.log(supplies)
        this.setState({
            storeName: this.props.currentStore.name,
            storeSupplies: supplies
        })
    }

    changeName = (input) => {
        this.setState({ storeName: input })
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

    render() {
        return (
        <div>

            <h2>Manage Store Form</h2>
            
            <StoreNameInput storeName={ this.state.storeName } changeName={ this.changeName } />
            
            <div id="new-supply">
                <AddSupplyInput 
                    currentSupply={ this.state.currentSupply } 
                    changeSupply={ this.changeSupply } 
                    addSupply={ this.addSupply }
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
            
        </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        supplies: state.supplies
    }
}
  
export default connect(mapStateToProps)(ManageStoreForm)