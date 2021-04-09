import React, { Component } from 'react';
import SupplyTableRow from './SupplyTableRow'

class SuppliesTable extends Component {

    constructor(){
        super()
        this.state = {
            currentSupply: {}
        }
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
                { this.props.suppliesByCategory.map( sup => <SupplyTableRow supply={ sup } />) }
            </tbody>
        </table>
        );
    }

}
  
export default SuppliesTable