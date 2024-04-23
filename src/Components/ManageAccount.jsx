import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const ManageAccount = () => {
  const [user, setUser] = useState({ name: 'Arwa Arif', email: 'arwaarif@example.com' });
  const [error, setError] = useState('');

  const handleDeleteAccount = () => {
    // Here you can add your logic to delete the user account
    console.log('Deleting user account...');
    // You can also add error handling logic if deletion fails
    setError('Failed to delete user account. Please try again later.');
  };

  return (
    <div className="manage-account">
      <h2>Manage Account</h2>
      <div className="user-details">
        <p>Name: {user.name}</p>
        <p>Email: {user.email}</p>
      </div>
      <button onClick={handleDeleteAccount} className="btn-delete">Delete Account</button>
      {error && <div className="error-message">{error}</div>}
      <Link to="/Dashboard">Go back to Dashboard</Link>
    </div>
  );
};

export default ManageAccount;
