import React, { Component } from 'react';
import AddSupplyInput from './AddSupplyInput'
import StoreSuppliesTable from './StoreSuppliesTable'
import EditedSuppliesTable from './EditedSuppliesTable'
import SupplyRow from './SupplyRow'
import StoreNameInput from './StoreNameInput';
import Placeholder from './Placeholder';

class ManageStoreForm extends Component {

    constructor(){
        super()
        this.state = {
            storeName: "",
            storeSupplies: [],
            editedSupplies: [],
            currentSupply: {},
            newSupply: <Placeholder />
        }
    }
    
    componentDidMount(){
        console.log(this.props.currentStore)
        this.setState({
            storeName: this.props.currentStore.name,
            storeSupplies: this.props.currentStore.supplies
        })
    }

    changeName = (input) => {
        this.setState({ storeName: input })
    }

    addSupply = () => {
        if (this.state.newSupply === <Placeholder />){
            let emptySupply = {
                name: ""
            }
            this.setState({ newSupply: <AddSupplyInput newSupply={ emptySupply } /> })
        } else {
            this.setState({ newSupply: <Placeholder /> })
        } 
    } 
   
    render() {
        return (
        <div>
            <h2>Manage Store Form</h2>
            <StoreNameInput storeName={ this.state.storeName } changeName={ this.changeName } />
            <div id="new-supply">
                <button onClick={ this.addSupply }>Add Supply</button>
                { this.state.newSupply }
            </div>
            <EditedSuppliesTable />
            <StoreSuppliesTable />
        </div>
        );
    }

}
  
export default ManageStoreForm 