import React from 'react';

const SupplyTableRow = ({ supply, keyId }) => {
    return (
        <tr key={ keyId }>
           <td>{ supply.name }</td> 
           <td>{ supply.sub_category }</td> 
           <td>{ supply.unit }</td> 
           <td>{ supply.latest_cost_per_unit }</td> 
        </tr>
    );
}
  
export default SupplyTableRow