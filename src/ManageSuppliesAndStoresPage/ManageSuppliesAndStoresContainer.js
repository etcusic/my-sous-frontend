import React, { Component } from 'react';
import { connect } from 'react-redux'
import Placeholder from '../globalComponents/Placeholder.js'
// import ManageInfoButtons from '../appComponents/ManageInfoButtons'
// import ViewSuppliesByCategory from '../appComponents/ViewSuppliesByCategory'
// import ViewSuppliesByStore from '../appComponents/ViewSuppliesByStore'
// import ManageSupplies from '../appComponents/ManageSupplies'
// import ManageStores from '../appComponents/ManageStores'

class ManageSuppliesAndStoresContainer extends Component {

    constructor(){
        super()
        this.state = {
          view: <Placeholder />
        }
    }
    
    componentDidMount(){
        console.log(this.props)
        // this.setState({ suppliesByCategory: [...this.props.supplies] })
    }

    // changeView = (arg) => {
    //     switch(arg){
    //         case "supply categories":
    //             return this.setState({ view: <ViewSuppliesByCategory supplies={ this.props.supplies } /> })
    //         case "manage supplies": 
    //             return this.setState({ view: <ManageSupplies /> })
    //         case "store supplies": 
    //             return this.setState({ view: <ViewSuppliesByStore supplies={ this.props.supplies } stores={ this.props.stores } /> })
    //         case "manage stores": 
    //             return this.setState({ view: <ManageStores stores={ this.props.stores } /> })
    //         default: 
    //             return this.setState({ view: <Placeholder /> })
    //     }      
    // }

    render() {
        return (
        <div>
            <h1>MANAGE SUPPLY & STORE INFO</h1>
            {/* <ManageInfoButtons changeView={ this.changeView } /> */}
            { this.state.view }
        </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        suppliesArray: state.supplies.array,
        suppliesDictionary: state.supplies.dictionary,
        stores: state.stores
    }
}
  
export default connect(mapStateToProps)(ManageSuppliesAndStoresContainer)