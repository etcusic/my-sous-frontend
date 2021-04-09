import React, { Component } from 'react';
import SuppliesTable from '../appComponents/SuppliesTable'

class ViewSuppliesByCategory extends Component {

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
            <h2>View Supplies By Category</h2>
        </div>
        );
    }

}
  
export default ViewSuppliesByCategory