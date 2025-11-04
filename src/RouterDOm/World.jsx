import React, { useState } from 'react';
import './AuthPage.css'; 

const World=() => {
  const [isLoginView, setIsLoginView] = useState(true);

  // Function to switch between Login and Register views
  const toggleView = () => {
    setIsLoginView(!isLoginView);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would handle API calls here
    alert(isLoginView ? 'Attempting to Log In...' : 'Attempting to Register...');
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h1 className="auth-title">{isLoginView ? 'Welcome Back' : 'Join Our Community'}</h1>
        
        {/* Value Proposition for News Site */}
        <p className="auth-value-prop">
          {isLoginView 
            ? 'Access your personalized feed and saved articles.' 
            : 'Get unlimited access, save your favorite stories, and receive custom newsletters.'
          }
        </p>

        {/* Social Login Options */}
        <div className="social-login">
          <button className="social-button google">
            <i className="fab fa-google"></i> Continue with Google
          </button>
          <button className="social-button facebook">
            <i className="fab fa-facebook-f"></i> Continue with Facebook
          </button>
        </div>

        <div className="divider">OR</div>

        {/* --- Dynamic Form Section --- */}
        <form className="auth-form" onSubmit={handleSubmit}>
          
          {!isLoginView && (
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" placeholder="Full Name" required />
            </div>
          )}

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" placeholder="email@example.com" required />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Min. 8 characters" required />
          </div>

          {!isLoginView && (
            <div className="form-group checkbox-group">
              <input type="checkbox" id="terms" required />
              <label htmlFor="terms">I agree to the <a href="/terms">Terms</a> and <a href="/privacy">Privacy Policy</a>.</label>
            </div>
          )}

          <button type="submit" className="submit-button">
            {isLoginView ? 'Log In' : 'Create Account'}
          </button>

          {isLoginView && (
            <p className="forgot-password">
              <a href="/forgot">Forgot Password?</a>
            </p>
          )}

        </form>
        {/* --- End Dynamic Form Section --- */}

        {/* Toggle Link */}
        <p className="auth-toggle">
          {isLoginView ? "Don't have an account?" : "Already have an account?"}
          <span onClick={toggleView}>
            {isLoginView ? ' Sign Up' : ' Log In'}
          </span>
        </p>

      </div>
    </div>
  );
};

export default World;