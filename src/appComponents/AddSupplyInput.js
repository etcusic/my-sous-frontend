import React from 'react';

const AddSupplyInput = ({ currentSupply, changeCategory, changeSupply, changeCostPerUnit, addSupply, filteredSupplies, currentCategory }) => {

    const categoryOptions = () => {
        const categories = ["all", "proteins", "dried goods", "produce", "dairy", "frozen goods", "condiments", "spices"]
        return categories.map((cat, i) => <option keyId={ `category-${i + 1}` } value={ cat }>{ cat }</option>)
    }

    return (
        <div>
            <label>Category: </label>
            <select value={ currentSupply.sub_category } onChange={ event => changeCategory(event.target.value) }>
                { categoryOptions() }
            </select>

            <label>Supply: </label>
            <select value={ currentSupply.id } onChange={ event => changeSupply(event.target.value)}>
                <option value="0">---</option>
                { filteredSupplies.map(supply => <option value={ supply.id }>{ supply.name }</option>) }
            </select>

            <label>Cost Per Unit: </label>
            <input value={ currentSupply.cost_per_unit } onChange={ event => changeCostPerUnit(event.target.value) }></input>

            <button onClick={ addSupply }>Add Supply</button>
        </div>
    );
}

export default AddSupplyInput