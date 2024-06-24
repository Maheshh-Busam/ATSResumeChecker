import React, { useState } from 'react';
import './Header.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../redux/slices/authSlice';
import ThemeToggle from './ThemeToggle';
import { useAuth } from '../redux/slices/AuthContext';

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useAuth();

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem('user');
    navigate('/login');
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <header className="header">
      <div className="logo" onClick={() => { closeSidebar(); navigate('/home'); }}>ATSResumeChecker</div>
      <nav className={`nav ${isSidebarOpen ? 'open' : ''}`}>
        <ul className="nav-list">
          <li className="nav-item" onClick={() => { closeSidebar(); navigate('/home'); }}><a href="#">Home</a></li>
          <li className="nav-item" onClick={() => { closeSidebar(); navigate('/howitworks'); }}><a href="#">How it Works</a></li>
          <li className="nav-item" onClick={() => { closeSidebar(); navigate('/about'); }}><a href="#">About</a></li>
          {user && (
            <li className="nav-item" onClick={() => { closeSidebar(); navigate('/ats-checker'); }}><a href="#">ATS Checker</a></li>
          )}
        </ul>
        {user ? (
          <button className="button logout-btn" onClick={handleLogout}>Logout</button>
        ) : (
          <button className="button login-btn" onClick={() => { closeSidebar(); navigate('/login'); }}>Login</button>
        )}
      </nav>
      <button className="sidebar-toggle" onClick={toggleSidebar}>
        ☰
      </button>
      <ThemeToggle />
    </header>
  );
};

export default Header;
