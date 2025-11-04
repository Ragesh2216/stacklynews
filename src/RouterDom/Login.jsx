import React, { useState } from 'react';
import './AuthPage.css'; 

const Login = () => {
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

  // Conditionally apply a class to the wrapper for CSS animation
  const registerFieldsClass = isLoginView ? 'register-fields closed' : 'register-fields open';

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h1 className="auth-title">{isLoginView ? 'Welcome Back' : 'Join Our Community'}</h1>
        
        <p className="auth-value-prop">
          {isLoginView 
            ? 'Access your personalized feed and saved articles.' 
            : 'Get unlimited access, save your favorite stories, and receive custom newsletters.'
          }
        </p>

        {/* Social Login Options */}
        <div className="social-login">
          {/* NOTE: You need to include Font Awesome CSS for <i> icons to display! */}
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
          
          {/* WRAPPER FOR REGISTER-ONLY FIELDS */}
          {/* This wrapper ensures the fields collapse smoothly via CSS max-height transition */}
          <div className={registerFieldsClass}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" placeholder="Full Name" required={!isLoginView} />
            </div>
            
            <div className="form-group checkbox-group">
              <input type="checkbox" id="terms" required={!isLoginView} />
              <label htmlFor="terms">I agree to the <a href="/terms">Terms</a> and <a href="/privacy">Privacy Policy</a>.</label>
            </div>
          </div>
          {/* END WRAPPER */}

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" placeholder="email@example.com" required />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Min. 8 characters" required />
          </div>

          <button type="submit" className="submit-button">
            {isLoginView ? 'Log In' : 'Create Account'}
          </button>

          {/* Forgot Password Field - uses opacity transition */}
          <div className={`forgot-password-wrapper ${isLoginView ? 'visible' : 'hidden'}`}>
            <p className="forgot-password">
              <a href="/forgot">Forgot Password?</a>
            </p>
          </div>

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

export default Login;