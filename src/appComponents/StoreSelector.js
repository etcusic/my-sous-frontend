import React from 'react';

const StoreSelector = ({ stores, selectStore }) => {

    const storeOptions = () => {
        return stores.map(store => <option value={ store.id }>{ store.name }</option>)
    }

    return (
        <div>
           <select onChange={ event => selectStore(event.target.value) }>
            <option value="0">---</option>
            { storeOptions() }
           </select>
        </div>
    );
}
  
export default StoreSelector