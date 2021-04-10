import React from 'react';
import SupplyRow from './SupplyRow'

const StoreSuppliesTable = ({ storeSupplies, editSupply, removeSupply }) => {
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
                        return <SupplyRow 
                                    supply={ supply } 
                                    editSupply={ editSupply } 
                                    removeSupply={ removeSupply }
                                />
                    }) }
                </tbody>
            </table>
        </div>
    );
}
  
export default StoreSuppliesTable