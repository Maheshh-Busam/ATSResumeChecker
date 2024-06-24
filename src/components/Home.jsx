import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css'; 
import homeImage from '../assets/home_image.jpg'

const Home = () => {

  const navigate = useNavigate()

  return (
    <div className="home">
      <h3>ATSResumeChecker</h3>
      <div className="intro-section">
        <div className="intro-content">
          
          <h1>Welcome to ATS Resume Checker</h1>
          <p>Your pathway to a successful job application process starts here.</p>
          <button className='button' onClick={() => navigate('/howitworks')}>How it works</button>
        </div>
        <div className="intro-image">
          <img src={homeImage} alt="ATS Resume Checker" />
        </div>
      </div>
      <div className="login-register-block">
        <h2>Login or Register to Get Started</h2>
        <div className="button-group">
          <button className='button' onClick={() => navigate('/login')}>Login</button>
          <button className='button' onClick={() => navigate('/register')}>Register</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
