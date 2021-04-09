import React, { Component } from 'react';

class ViewSuppliesByStore extends Component {

    constructor(){
        super()
        this.state = {
            suppliesByCategory: []
        }
    }
    
    componentDidMount(){
        this.setState({ suppliesByCategory: [...this.props.supplies] })
    }

    changeCategory = (category) => {
        let supplies = category === "all" ? this.props.supplies : [...this.props.supplies.filter(sup => sup.sub_category === category)]
        this.setState({ suppliesByCategory: supplies })
    }
   
    render() {
        return (
        <div>
            <h2>View Supplies By Store</h2>
            <CategorySelector changeCategory={ this.changeCategory } />
            <SuppliesTable showSupplies={ this.state.suppliesByCategory } />
        </div>
        );
    }

}
  
export default ViewSuppliesByStore