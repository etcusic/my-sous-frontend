import React from 'react';

const SupplyRow = ({ supply, editSupply, removeSupply }) => {
    return (
        <tr>
            <td>
                <button onClick={ () => editSupply(supply) }>edit</button>
            </td>
            <td>{ supply.name }</td>
            <td>{ supply.sub_category }</td>
            <td>{ supply.unit }</td>
            <td>{ supply.cost_per_unit }</td>
            <td>
                <button onClick={ () => removeSupply(supply) }>remove</button>
            </td>
        </tr>
    );
}
  
export default SupplyRow