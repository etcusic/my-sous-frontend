import React from 'react';
import SupplyTableRow from './SupplyTableRow'

const SuppliesTable = ({ showSupplies }) => {

        return (
        <table>
            <thead>
                <tr key="0">
                    <th>Name: </th> 
                    <th>Category: </th> 
                    <th>Unit: </th> 
                    <th>Latest Cost Per Unit: </th> 
                </tr>
            </thead>
            <tbody>
                { showSupplies.map( (sup, index) => <SupplyTableRow keyId={ index + 1 } supply={ sup } />) }
            </tbody>
        </table>
        );

}
  
export default SuppliesTable