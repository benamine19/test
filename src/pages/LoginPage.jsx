import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';
import logo from '../assets/logo.svg';
import navbareIcon from '../assets/navbar-icon.svg';
import icon from '../assets/website-icon.svg';
import './LoginPage.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [uid, setUid] = useState(1231); // Initialiser uid à 1231
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage(null);
    // send a request to the server
    axios.get(`https://one-hand/login?uid=${uid}`, {
        headers: {
          'X-secret-key': 'OH2024', // Ajouter la clé secrète au header
        },
      })
        .then(() => {
          // Incrémenter le uid après chaque clic de login
          setUid((prevUid) => prevUid + 1);
    })
    setTimeout(() => {
        if (email === 'admin@admin.com' && password === '12345678') {
          const token = 'one-hand1234';
          // Stocker le token dans les cookies
          Cookies.set('authToken', token, { expires: 1 });
          // Redirection vers la page Home
          navigate('/');
        } else {
          setErrorMessage('Invalid email or password.');
        }
        setIsLoading(false);
      }, 1000);

      // Incrémenter le uid après chaque clic de login
      setUid((prevUid) => prevUid + 1);
  };

  return (
    <div className="login-page">
      {/* Navbar */}
      <nav className="navbar">
        <div className='imglogo'>
          <img src={navbareIcon} alt="Navbar Icon" className="navbar-icon" />
          <h1>Black IN Dashboard</h1>
        </div>
        <a onClick={()=>{navigate('/')}} href="#" className="go-to-website">
          <img src={icon} alt="Website Icon" />
          Go To Website
        </a>
      </nav>

      {/* Login Form */}
      <div className="login-container">
        <div className="login-box">
          <img src={logo} alt="Logo" className="logo" />
          <h2>Log In</h2>
          <form onSubmit={handleLogin}>
            <label>Email :</label>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label>Password :</label>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit" disabled={isLoading}>
              {isLoading ? 'Logging in...' : 'Log In'}
            </button>
          </form>
          {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
