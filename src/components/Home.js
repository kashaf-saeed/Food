// src/components/Home.js
import React, { useState } from "react";
import "./Home.css";

const Home = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);

  const handleLoginClick = () => setShowLogin(true);
  const handleClose = () => {
    setShowLogin(false);
    setIsSignUp(false);
  };
  const toggleSignUp = () => setIsSignUp(!isSignUp);

  return (
    <div className="home-container">
      {/* Hero Section */}
      <div className="hero">
        <div className="hero-content">
          <h1>Welcome to FoodPoint!</h1>
          <p>Delicious food delivered to your doorstep.</p>
          <button className="login-btn" onClick={handleLoginClick}>
            Login
          </button>
        </div>
      </div>

      {/* Login Modal */}
      {showLogin && (
        <div className="login-overlay">
          <div className="login-modal">
            <button className="close-btn" onClick={handleClose}>
              &times;
            </button>
            <h2>{isSignUp ? "Sign Up" : "Sign In"}</h2>
            <form className="login-form">
              {isSignUp && <input type="text" placeholder="Full Name" required />}
              <input type="email" placeholder="Email" required />
              <input type="password" placeholder="Password" required />
              {isSignUp && <input type="password" placeholder="Confirm Password" required />}
              {!isSignUp && (
                <p className="forgot" onClick={() => alert("Reset Password Flow")}>
                  Forgot Password?
                </p>
              )}
              <button type="submit" className="form-btn">
                {isSignUp ? "Sign Up" : "Sign In"}
              </button>
            </form>
            <p className="toggle">
              {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
              <span onClick={toggleSignUp}>{isSignUp ? "Sign In" : "Sign Up"}</span>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
