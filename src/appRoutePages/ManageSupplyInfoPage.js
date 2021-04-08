import React, { Component } from 'react';
import { connect } from 'react-redux'

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
                return this.setState({  })
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
            <ul>
                { Object.keys(this.props.supplies).map(key => <li>{ this.props.supplies[key].name }</li>) }
            </ul>
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