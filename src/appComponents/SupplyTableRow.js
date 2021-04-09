import React from 'react';

const SupplyTableRow = ({ supply }) => {
    return (
        <tr>
           <td>{ supply.name }</td> 
           <td>{ supply.sub_category }</td> 
           <td>{ supply.unit }</td> 
           <td>{ supply.latest_cost_per_unit }</td> 
        </tr>
    );
}
  
export default SupplyTableRow