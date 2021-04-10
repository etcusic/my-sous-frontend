import React, { Component } from 'react';
import Placeholder from './Placeholder';
import StoreSelector from './StoreSelector'
import ManageStoreForm from './ManageStoreForm'
import AddSupplyInput from './AddSupplyInput'
import StoreSuppliesTable from './StoreSuppliesTable'
import EditedSuppliesTable from './EditedSuppliesTable'
import SupplyRow from './SupplyRow'

class ManageStores extends Component {

    constructor(){
        super()
        this.state = {
            view: <Placeholder />,
            currentStore: {},
            storeSupplies: [],
            currentSupply: {}
        }
    }
    
    componentDidMount(){
        // console.log(this.props.supplies)
        this.setState({ 
            view: <StoreSelector stores={ this.props.stores} selectStore={ this.selectStore } />
        })
    }

    selectStore = (storeId) => {
        let store = this.props.stores.find(stor => stor.id == storeId)
        this.setState({
            view: <ManageStoreForm currentStore={ store} />,
            currentStore: store, 
            storeSupplies: store.supplies
        })
    }
   
    render() {
        return (
        <div>
            <h2>Manage Stores</h2>
            { this.state.view }
        </div>
        );
    }

}
  
export default ManageStores