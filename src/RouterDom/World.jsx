import React from 'react';
import { Link } from 'react-router-dom';
// import './NotFound.css'; // Don't forget to import your styles

const World = () => {
  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <h1 className="not-found-code">404</h1>
        <h2 className="not-found-title">Oops! Page Not Found</h2>
        
        <p className="not-found-message">
          The news article or page you are looking for might have been removed,
          had its name changed, or is temporarily unavailable.
        </p>

        <p className="not-found-suggestion">
          Don't worry, let's get you back on track.
        </p>
        
        {/* Link back to the home page */}
        <Link to="/" className="not-found-link">
          Go to STACKLY Home
        </Link>
      </div>
    </div>
  );
};

export default World;