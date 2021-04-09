import React, { Component } from 'react';

class ViewSuppliesByStore extends Component {

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
            <h2>View Supplies By Store</h2>
        </div>
        );
    }

}
  
export default ViewSuppliesByStore