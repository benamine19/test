import React, { useEffect } from 'react';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';  // Pour la redirection

const Home = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = Cookies.get('authToken');
    if (!token || token !== 'one-hand1234') {
      navigate('/login');
    }
  }, [navigate]);  
  const handleLogout = () => {
    Cookies.remove('authToken');
    navigate('/login');
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1 style={{color:'white'}}>Welcome to the Dashboard</h1>
      <button onClick={handleLogout} style={{ marginTop: '20px' }}>
        Logout
      </button>
    </div>
  );
};

export default Home;
