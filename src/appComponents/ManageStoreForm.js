import React, { Component } from 'react';
import AddSupplyInput from './AddSupplyInput'
import StoreSuppliesTable from './StoreSuppliesTable'
import EditedSuppliesTable from './EditedSuppliesTable'
import SupplyRow from './SupplyRow'
import StoreNameInput from './StoreNameInput';

class ManageStoreForm extends Component {

    constructor(){
        super()
        this.state = {
            storeName: ""
        }
    }
    
    componentDidMount(){
        console.log(this.props.currentStore)
        this.setState({
            storeName: this.props.currentStore.name
        })
    }

    changeName = (input) => {
        this.setState({ storeName: input })
    }
   
    render() {
        return (
        <div>
            <h2>Manage Store Form</h2>
            <StoreNameInput storeName={ this.state.storeName } changeName={ this.changeName } />
        </div>
        );
    }

}
  
export default ManageStoreForm 