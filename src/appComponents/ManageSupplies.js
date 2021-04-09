import React, { Component } from 'react';

class ManageSupplies extends Component {

    constructor(){
        super()
        this.state = {

        }
    }
    
    componentDidMount(){
        console.log(this.props.supplies)
        // this.setState({ suppliesByCategory: [...this.props.supplies] })
    }

    
   
    render() {
        return (
        <div>
            <h2>Manage Supplies</h2>
        </div>
        );
    }

}
  
export default ManageSupplies