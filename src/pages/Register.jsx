import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginStart, loginSuccess, loginFailure } from '../redux/slices/authSlice';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import './Register.css'; 

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [registered, setRegistered] = useState(false); // State to track registration status
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const handleRegister = async () => {
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    dispatch(loginStart());
    try {
      // Create a user with the provided email and password
      await createUserWithEmailAndPassword(auth, email, password);
      
      setRegistered(true);
      localStorage.setItem('user', JSON.stringify(user));

    } catch (err) {
      if (err.code === 'auth/email-already-in-use') {
        // Display an error message for duplicate email
        dispatch(loginFailure('User already exists with this email, Please try with another email'));
      } else if (err.code === 'auth/weak-password') {
        dispatch(loginFailure('Password should be at least 6 characters'))
      }
      else if (err.code === 'auth/invalid-email') {
        dispatch(loginFailure('Please Enter a Valid email to Register'));
      }
      else if (err.code === 'auth/missing-password') {
        dispatch(loginFailure('Please Enter a Valid password'));
      }
      else {
        // Display other errors normally
        dispatch(loginFailure(err.message));
      }
    }
  };

  return (
    <div className="container">
      
      {registered ? (
        <>
          <p>Registration successful! You can now login.</p>
          <button className='button' onClick={() => navigate('/login')}>
            Go to Login
          </button>
        </>

      ) : (
        <>
          <h2>Register</h2>
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
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <button className='button' onClick={handleRegister} disabled={loading}>
            Register
          </button>
          <p>Please Login if you're an existing user</p>
          <button className='button' onClick={() => navigate('/login')}>
            Login
          </button>
          {loading && <p className="loading">Loading...</p>}
          {error && <p className="error">{error}</p>}
        </>
      )}
    </div>
  );
};

export default Register;
