import React from 'react';

const SupplyRow = ({ supply, editSupplyButton, removeSupplyButton }) => {
    return (
        <tr>
            <td></td>
            <td>{ supply.name }</td>
            <td>{ supply.sub_category }</td>
            <td>{ supply.unit }</td>
            <td>{ supply.cost_per_unit }</td>
            <td></td>
        </tr>
    );
}
  
export default SupplyRow