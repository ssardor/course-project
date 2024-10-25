import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSelector from './LanguageSelector';

function Header({ isAuthenticated, onLogout, user }) {
  const { t } = useTranslation();

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <div className="d-flex justify-content-between">
        <Link className="navbar-brand" to="/">{t('home')}</Link>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {isAuthenticated ? (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/create-form">{t('createForm')}</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/create-template">Create Template</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/profile">{t('profile')}</Link>
                </li>
                <li className="nav-item">
                  <button className="nav-link btn btn-link" onClick={onLogout}>{t('logout')}</button>
                </li>
                <li className="nav-item">
                  <span className="navbar-text">{user.username}</span>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">{t('login')}</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/register">{t('register')}</Link>
                </li>
              </>
            )}
          </ul>
          <LanguageSelector />
        </div>
        </div>
       
      </div>
    </nav>
  );
}

export default Header;