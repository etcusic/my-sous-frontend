import React from 'react';

const CategorySelector = ({ changeCategory }) => {

    const categoryOptions = () => {
        const categories = ["all", "proteins", "dried goods", "produce", "dairy", "frozen goods", "condiments", "spices"]
        return categories.map((cat, i) => <option key={ `category-${i + 1}` } value={ cat }>{ cat }</option> )
    }

    return (
        <div>
           <select onChange={ event => changeCategory(event.target.value) }>
            { categoryOptions() }
           </select>
        </div>
    );
}
  
export default CategorySelector