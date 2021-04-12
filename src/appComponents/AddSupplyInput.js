import React from 'react';

const AddSupplyInput = ({ currentSupply, changeCategory, changeSupply, changeCostPerUnit, addSupply, filteredSupplies, currentCategory }) => {

    const categoryOptions = () => {
        const categories = ["all", "proteins", "dried goods", "produce", "dairy", "frozen goods", "condiments", "spices"]
        return categories.map((cat, i) => {
            if (cat === currentCategory){
                return <option selected keyId={ `category-${i + 1}` } value={ cat }>{ cat }</option>
            } else {
                return <option keyId={ `category-${i + 1}` } value={ cat }>{ cat }</option>
            }}) 
    }

    const ingredientOptions = () => {
        return filteredSupplies.map(supply => {
            if (currentSupply.name === supply.name){
                return <option selected value={ supply.id }>{ supply.name }</option>    
            } else {
                return <option value={ supply.id }>{ supply.name }</option>
            }
        })
    }

    return (
        <div>
            <label>Category: </label>
            <select onChange={ event => changeCategory(event.target.value) }>
                { categoryOptions() }
            </select>

            <label>Supply: </label>
            <select onChange={ event => changeSupply(event.target.value)}>
                <option value="0">---</option>
                { ingredientOptions() }
            </select>

            <label>Cost Per Unit: </label>
            <input value={ currentSupply.cost_per_unit } onChange={ event => changeCostPerUnit(event.target.value) }></input>

            <button onClick={ addSupply }>Add Supply</button>
        </div>
    );
}

export default AddSupplyInput