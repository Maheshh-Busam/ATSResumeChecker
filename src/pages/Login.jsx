import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginStart, loginSuccess, loginFailure } from '../redux/slices/authSlice';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const handleLogin = async () => {
    dispatch(loginStart());
    try {
      await signInWithEmailAndPassword(auth, email, password);
      const user = { email }; // You can pass the user's email or any other relevant data
      dispatch(loginSuccess(user));
      localStorage.setItem('user', JSON.stringify(user));
      navigate('/ats-checker');
    } catch (err) {
      if (err.code === 'auth/invalid-email') {
        dispatch(loginFailure('Please enter a valid email.'));
      } else if (err.code === 'auth/invalid-credential') {
        dispatch(loginFailure("Email and Password don't match. Please try again."));
      } else if (err.code === 'auth/invalid-email') {
        dispatch(loginFailure('Please enter a valid email to login.'));
      } else {
        dispatch(loginFailure(err.message));
      }
    }
  };

  return (
    
    <div className="container">
      <h2>Login</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="button" onClick={handleLogin}>
        Login
      </button>
      <p>Please register if you are a new user</p>
      <button className="button" onClick={() => navigate('/register')}>
        Register
      </button>
      {/* {loading && <p className="loading">Loading...</p>} */}
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default Login;
