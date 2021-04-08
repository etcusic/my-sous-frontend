import React from 'react';

const UnderConstruction = () => {
    return (
        <div>
            <img src={process.env.PUBLIC_URL + '/photos/under_construction.png'} alt="page under construction" />; 
        </div>
    );
}
  
export default UnderConstruction