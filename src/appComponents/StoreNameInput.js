import React from 'react';

const StoreNameInput = ({ storeName, changeName }) => {
    return (
        <div>
            <input value={ storeName } onChange={ event => changeName(event.target.value) }></input>
        </div>
    );
}
  
export default StoreNameInput