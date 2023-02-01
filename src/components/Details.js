import React, { useState } from 'react';

const Details = ({id, details,name, email, address, address1,phone,zipcode,username,website,company,description}) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    
    <div className='details-div'>
      <div className='card'>
       
        <span><h2>Name</h2>{name}</span>
        <span><h2>Email</h2>{email}</span>
        <span><h2>City</h2>{address}</span>
        <span><h2>Street</h2>{address1}</span>
        <br />
        <div className='card-button'>
          <button onClick={() => setShowDetails(!showDetails)}>
            {showDetails ? 'Hide Details' : 'View Details'}
          </button>
        </div>

        {showDetails && (
          <div className='user-details'>
            <h2>User Details</h2>
           
            <p>Username : {username}</p>
            <p>Email : {email}</p>
            <p>Address : {address}, {address1}</p>
            <p>zipcode :{zipcode}</p>
            <p>phone : {phone}</p>
            <p>Website : {website}</p>
            <p>Company Name : {company}</p>
            <p>Description : {description}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Details;
