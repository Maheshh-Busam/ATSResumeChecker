// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { Provider, useSelector } from 'react-redux';
import { store } from './redux/store';
import Login from './pages/Login';
import Register from './pages/Register';
import ATSChecker from './components/ATSChecker';
import HowItWorks from './components/HowItWorks';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Home from './components/Home';
import { ThemeProvider } from './components/ThemeContext';
import { AuthProvider, useAuth } from './redux/slices/AuthContext';

const PrivateRoute = ({ children }) => {
  const { user } = useAuth();
  return user ? children : <Navigate to="/login" />;
};

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <Router>
          <Header />
          <Routes>
            <Route path="/home" element={<><Home /><Footer /></>} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/ats-checker"
              element={
                <PrivateRoute>
                  <ATSChecker />
                </PrivateRoute>
              }
            />
            <Route path="*" element={<Navigate to="/home" />} />
            <Route path="/howitworks" element={<HowItWorks />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
