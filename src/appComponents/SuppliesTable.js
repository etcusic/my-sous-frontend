import React, { Component } from 'react';
import SupplyTableRow from './SupplyTableRow'

const SuppliesTable = () => {
 
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
                { this.props.suppliesByCategory.map( (sup, index) => <SupplyTableRow keyId={ index + 1 } supply={ sup } />) }
            </tbody>
        </table>
        );

}
  
export default SuppliesTable