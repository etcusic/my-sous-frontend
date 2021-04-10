import React from 'react';

const StoreNameInput = ({ storeName, changeName }) => {
    return (
        <div>
            <label>Name:  </label>
            <input value={ storeName } onChange={ event => changeName(event.target.value) }></input>
            <br></br><br></br>
        </div>
    );
}
  
export default StoreNameInput