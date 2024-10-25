import React from 'react';
import { Link } from 'react-router-dom';
import TemplateList from '../components/TemplateList';

function HomePage({ isAuthenticated }) {
  return (
    <div>
      <h1 className="text-center">Welcome to the Form Builder</h1>
      <div className="d-flex justify-content-center mb-4">
        {isAuthenticated && (
          <>
            <Link to="/create-form" className="btn btn-primary mx-2">Create Form</Link>
            <Link to="/profile" className="btn btn-secondary mx-2">Profile</Link>
          </>
        )}
        {!isAuthenticated && (
          <>
            <Link to="/register" className="btn btn-success mx-2">Register</Link>
            <Link to="/login" className="btn btn-warning mx-2">Login</Link>
          </>
        )}
        <Link to="/search-forms" className="btn btn-info mx-2">Search Forms</Link>
      </div>
      <TemplateList />
    </div>
  );
}

export default HomePage;