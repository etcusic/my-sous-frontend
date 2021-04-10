import React from 'react';
import SupplyRow from './SupplyRow'

const StoreSuppliesTable = ({ storeSupplies, editSupplyButton, removeSupplyButton }) => {
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>+</th>
                        <th>Name: </th>
                        <th>Category: </th>
                        <th>Unit: </th>
                        <th>Price Per Unit: </th>
                        <th>-</th>
                    </tr>
                </thead>

                <tbody>
                    { storeSupplies.map(supply => {
                        <SupplyRow 
                            supply={ supply } 
                            editSupplyButton={ editSupplyButton } 
                            removeSupplyButton={ removeSupplyButton }
                        />
                    }) }
                </tbody>
            </table>
        </div>
    );
}
  
export default StoreSuppliesTable