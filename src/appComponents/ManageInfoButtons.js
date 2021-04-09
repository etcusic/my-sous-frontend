import React from 'react';

const ManageInfoButtons = ({ changeView }) => {
    return (
        <div>
            <button onClick={ () => changeView("supply categories")}>Supplies By Category</button>
             - || - 
            <button onClick={ () => changeView("manage supplies")}>Manage Supplies</button>
             - || - 
            <button onClick={ () => changeView("store supplies")}>Store Supplies</button>
             - || - 
            <button onClick={ () => changeView("manage stores")}>Manage Stores</button>
        </div>
    );
}
  
export default ManageInfoButtons