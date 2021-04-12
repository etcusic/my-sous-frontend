import React from 'react';

const AddSupplyInput = ({ currentSupply, changeSupply, addSupply, filteredSupplies, changeCategory }) => {

    const categoryOptions = () => {
        const categories = ["all", "proteins", "dried goods", "produce", "dairy", "frozen goods", "condiments", "spices"]
        return categories.map((cat, i) => <option keyId={ `category-${i + 1}` } value={ cat }>{ cat }</option>)
    }

    return (
        <div>
            <label>Category: </label>
            <input value={ currentSupply.name } onChange={ event => changeSupply(event.target.value, "name") }></input>
            <select onChange={ event => changeCategory(event.target.value) }>
                { categoryOptions() }
            </select>

            <label>Category: </label>
            <select>
                <option>---</option>
                { filteredSupplies.map(supply => <option>{ supply.name }</option>)}
            </select>

            <label>Cost Per Unit: </label>
            <input value={ currentSupply.cost_per_unit } onChange={ event => changeSupply(event.target.value, "cost_per_unit") }></input>

            <button onClick={ addSupply }>Add Supply</button>
        </div>
    );
}

export default AddSupplyInput