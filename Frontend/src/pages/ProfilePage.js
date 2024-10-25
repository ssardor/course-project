import React from 'react';
import UserProfile from '../components/UserProfile';

function ProfilePage({ user }) {
  return (
    <div>
      {user ? <UserProfile user={user} /> : <div>Loading...</div>}
    </div>
  );
}

export default ProfilePage;