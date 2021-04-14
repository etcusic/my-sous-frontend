import React, { Component } from 'react';
import { connect } from 'react-redux'
import Placeholder from '../globalComponents/Placeholder'
import ManageInfoButtons from './ManageInfoButtons'
import CreateSupplies from './CreateSupplies'
import EditSupplies from './EditSupplies'
import CreateStore from './CreateStore'
import EditStore from './EditStore'

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

    changeView = (arg) => {
        switch(arg){
            case "create supplies":
                return this.setState({ view: <CreateSupplies /> })
            case "edit supplies": 
                return this.setState({ view: <EditSupplies /> })
            case "create store": 
                return this.setState({ view: <CreateStore /> })
            case "edit store": 
                return this.setState({ view: <EditStore /> })
            default: 
                return this.setState({ view: <Placeholder /> })
        }      
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
  
export default connect(mapStateToProps)(ManageSuppliesAndStoresContainer)