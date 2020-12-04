import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Profile = () => {
  const {user} = useAuth0();
  const {name, picture, email} = user;

  return (
    <div className="container">
      <div className="row align-items-center profile-header">
        <img src="{picture}" alt="Profile"
        className="rounded-circle img-fluid profile-picture mb-3 mb-mb-0"/>
      </div>
      <div className="col-md text-center text-md-left">
        <h2>{name}</h2>
        <p className="lead text-muted">{email}</p>
      </div>
      {/* {user.sub} user id code */}
    </div>
  )
}

export default Profile