//Users.js

import React from 'react';

 const User = ({ user }) => {
  return (
    <div className='card-detail'>
      <img src={user.picture.large} />
      <h3>{user.name.first}{user.name.last}</h3>
    </div>
  )
}

export default User;