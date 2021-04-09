import React, { Component } from 'react';
import { connect } from 'react-redux'
import ManageInfoButtons from '../appComponents/ManageInfoButtons'
import SuppliesTable from '../appComponents/SuppliesTable'

class ManageSupplyInfoPage extends Component {

    constructor(){
        super()
        this.state = {
          view: <ManageInfoButtons changeView={ this.changeView } />
        }
      }
    
      changeView = (arg) => {
        switch(arg){
            case "supply categories":
                return this.setState({ view: <SuppliesTable /> })
            case "manage supplies": 
                return this.setState({  })
            case "store supplies": 
                return this.setState({  })
            case "manage stores": 
                return this.setState({  })
            default: 
                return this.setState({ view: <ManageInfoButtons changeView={ this.changeView } /> })
        }
           
      }

    render() {
        return (
        <div>
            <h1>MANAGE SUPPLY & STORE INFO</h1>
            { this.state.view }
        </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        supplies: state.supplies
    }
}
  
export default connect(mapStateToProps)(ManageSupplyInfoPage)