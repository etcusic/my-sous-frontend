import React, { Component } from 'react';
import StoreSelector from './StoreSelector.js'

class ViewSuppliesByStore extends Component {

    constructor(){
        super()
        this.state = {
            suppliesByStore: []
        }
    }
    
    componentDidMount(){
        this.setState({ suppliesByStore: [...this.props.supplies] })
    }

    changeStore = (storeId) => {
        // let supplies = storeId == 0 ? this.props.supplies : this.props.stores.find(store.id == storeId).supplies
        // this.setState({ suppliesByStore: supplies })
    }
   
    render() {
        return (
        <div>
            <h2>View Supplies By Store</h2>
            <StoreSelector stores={ this.props.stores } changeStore={ this.changeStore } />
            {/* <SuppliesTable showSupplies={ this.state.suppliesByStore } /> */}
        </div>
        );
    }

}
  
export default ViewSuppliesByStore