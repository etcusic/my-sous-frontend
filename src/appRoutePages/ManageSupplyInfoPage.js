import React, { Component } from 'react';
import { connect } from 'react-redux'
import Placeholder from '../appComponents/Placeholder'
import ManageInfoButtons from '../appComponents/ManageInfoButtons'
import ViewSuppliesByCategory from '../appComponents/ViewSuppliesByCategory'
import ViewSuppliesByStore from '../appComponents/ViewSuppliesByStore'
import ManageSupplies from '../appComponents/ManageSupplies'
import ManageStores from '../appComponents/ManageStores'

class ManageSupplyInfoPage extends Component {

    constructor(){
        super()
        this.state = {
          view: <Placeholder />,
          suppliesByCategory: [],
          suppliesByStore: [],
          currentSupply: {},
          currentStore: {}
        }
    }
    
    componentDidMount(){
        console.log(this.props.supplies)
        this.setState({ suppliesByCategory: [...this.props.supplies] })
    }

    changeView = (arg) => {
        switch(arg){
            case "supply categories":
                return this.setState({ view: <ViewSuppliesByCategory suppliesByCategory={ this.state.suppliesByCategory } /> })
            case "manage supplies": 
                return this.setState({ view: <ViewSuppliesByStore /> })
            case "store supplies": 
                return this.setState({ view: <ManageSupplies /> })
            case "manage stores": 
                return this.setState({ view: <ManageStores /> })
            default: 
                return this.setState({ view: <Placeholder /> })
        }      
    }

    changeCategory = (category) => {
        let supplies = [...this.props.supplies.all.map(sup => sup.sub_category === category)]
        this.setState({ suppliesByCategory: supplies })
    }
   
    render() {
        return (
        <div>
            <h1>MANAGE SUPPLY & STORE INFO</h1>
            <ManageInfoButtons changeView={ this.changeView } />
            { this.state.view }
        </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        supplies: state.supplies,
        stores: state.stores
    }
}
  
export default connect(mapStateToProps)(ManageSupplyInfoPage)