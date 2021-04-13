import React from 'react';

const ManageInfoButtons = ({ changeView }) => {
    return (
        <div>
            <button onClick={ () => changeView("create supplies")}>Create Supplies</button>
             - || - 
            <button onClick={ () => changeView("edit supplies")}>Edit Supplies</button>
             - || - 
            <button onClick={ () => changeView("create store")}>Create Store</button>
             - || - 
            <button onClick={ () => changeView("edit store")}>Edit Store</button>
        </div>
    );
}
  
export default ManageInfoButtons