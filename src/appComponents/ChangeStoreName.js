import React from 'react';

const ChangeStoreName = ({ storeName, changeStoreName }) => {

    return (
        <div>
            <h3>
                Change Store Name:  
                <input value={ storeName } onChange={ event => changeStoreName(event.target.value) }></input>
            </h3>            

        </div>
    );
}

export default ChangeStoreName