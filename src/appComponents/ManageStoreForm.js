import React, { Component } from 'react';

class ManageStoreForm extends Component {

    constructor(){
        super()
        this.state = {

        }
    }
    
    componentDidMount(){
        console.log(this.props.currentStore)
    }
   
    render() {
        return (
        <div>
            <h2>Manage Store Form</h2>
            { this.props.currentStore.name }
        </div>
        );
    }

}
  
export default ManageStoreForm 