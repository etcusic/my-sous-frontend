import React from 'react';

const AddSupplyInput = ({ currentSupply, changeSupply, addSupply }) => {
    return (
        <div>
            <label>Supply Name: </label>
            <input value={ currentSupply.name } onChange={ event => changeSupply(event.target.value, "name") }></input>

            <label>Cost Per Unit: </label>
            <input value={ currentSupply.cost_per_unit } onChange={ event => changeSupply(event.target.value, "cost_per_unit") }></input>

            <button onClick={ addSupply }>Add Supply</button>
        </div>
    );
}
  
export default AddSupplyInput