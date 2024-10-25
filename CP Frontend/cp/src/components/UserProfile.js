import React, { useState, useEffect } from 'react';
import { editProfile } from '../utils/api';

function UserProfile({ user }) {
  const [username, setUsername] = useState(user.username);
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleEditProfile = async (e) => {
    e.preventDefault();
    try {
      await editProfile({ username, password });
      setMessage('Profile updated successfully!');
    } catch (error) {
      setMessage('Failed to update profile.');
    }
  };

  return (
    <div>
      <h2>User Profile</h2>
      <p>ID: {user.id}</p>
      <p>Username: {user.username}</p>
      <form onSubmit={handleEditProfile}>
        <div className="mb-3">
          <label className="form-label">New Username</label>
          <input
            type="text"
            className="form-control"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">New Password</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">Update Profile</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default UserProfile;