import React, { Component } from 'react';
import { connect } from 'react-redux'
import SupplyTableRow from './SupplyTableRow'

class SuppliesTable extends Component {

    constructor(){
        super()
        this.state = {
            supplies: []
        }
    }

    componentDidMount(){
        console.log(this.props.supplies)
        this.setState({ supplies: this.props.supplies })
    }
    
    render() {
        return (
        <table>
            <thead>
                <tr>
                    <th>Name: </th> 
                    <th>Category: </th> 
                    <th>Unit: </th> 
                    <th>Latest Cost Per Unit: </th> 
                </tr>
            </thead>

            <tbody>
                { this.state.supplies.map( sup => <SupplyTableRow supply={ sup } />) }
            </tbody>
        </table>
        );
    }

}

const mapStateToProps = state => {
    return {
        supplies: state.supplies
    }
}
  
export default connect(mapStateToProps)(SuppliesTable)