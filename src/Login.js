import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="login-page">
      <h1>Login</h1>
      <form className="login-form">
        <label>Email:</label>
        <input type="email" placeholder="Enter Email" required />

        <label>Password:</label>
        <input type="password" placeholder="Enter Password" required />

        <button type="submit">Login</button>
      </form>
      <p>
        Don't have an account?{' '}
        <button className="link-btn" onClick={() => navigate('/signup')}>
          Signup
        </button>
      </p>
    </div>
  );
};

export default Login;
