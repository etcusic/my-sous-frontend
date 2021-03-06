import React, { Component } from 'react';
import { connect } from 'react-redux'
import AddSupplyInput from './AddSupplyInput'
import StoreSuppliesTable from './StoreSuppliesTable'
import { assembleSupplies } from '../helperFunctions/assembleSupplies'
import { submitStoreSupplyInfo } from '../actions/submitStoreSupplyInfo.js'
import ChangeStoreName from './ChangeStoreName';

class ManageStoreForm extends Component {

    constructor(){
        super()
        this.state = {
            storeName: "",
            storeSupplies: [],
            editedSupplies: [],
            currentSupply: {id: 0, cost_per_unit: 0},
            filteredSupplies: [],
            currentCategory: "all"
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

    changeStoreName = (input) => {
        this.setState({ storeName: input })
    }

    addSupply = () => {
        let currentSupply = Object.assign({}, this.state.currentSupply)
        let supplies = [...this.state.editedSupplies, currentSupply]
        this.setState({ 
            currentSupply: {id: 0, name: "", cost_per_unit: 0},
            editedSupplies: supplies,
            filteredSupplies: this.props.supplies,
            currentCategory: "all"
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
   
    changeSupply = (supplyId) => {
        let supply = this.props.supplies.find(sup => sup.id == supplyId)
        supply.cost_per_unit = 0
        this.setState({ currentSupply: supply })
    }

    changeCostPerUnit = (input) => {
        let supply = Object.assign({}, this.state.currentSupply)
        supply.cost_per_unit = input
        this.setState({ currentSupply: supply })
    }

    changeCategory = (category) => {
        let supplies = this.props.supplies.filter(supply => supply.sub_category === category)
        this.setState({
            filteredSupplies: supplies,
            currentCategory: category
        })
    }

    render() {
        return (
        <div>

            <h2>Manage Store Form</h2>
            
            <div>
                <ChangeStoreName 
                    storeName={ this.state.storeName }
                    changeStoreName={ this.changeStoreName }
                />
            </div>
            
            
            <div id="new-supply">
                <AddSupplyInput 
                    currentSupply={ this.state.currentSupply } 
                    changeCategory={ this.changeCategory }
                    changeSupply={ this.changeSupply } 
                    changeCostPerUnit={ this.changeCostPerUnit }
                    addSupply={ this.addSupply }
                    filteredSupplies={ this.state.filteredSupplies }
                    currentCategory={ this.state.currentCategory }
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