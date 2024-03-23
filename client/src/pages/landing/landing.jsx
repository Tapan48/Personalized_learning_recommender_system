import React from 'react';
import { Link } from 'react-router-dom'; // If you're using React Router for navigation

const LandingPage = () => {
  return (
    <div className="LandingPage">
      <header className="LandingPage-header">
        <h1>Your App Name</h1>
        <p>Welcome to a fantastic experience!</p>
      </header>
      <section className="LandingPage-features">
        <div className="LandingPage-feature">
          <h2>Feature 1</h2>
          <p>Explore the amazing capabilities of Feature 1.</p>
        </div>
        <div className="LandingPage-feature">
          <h2>Feature 2</h2>
          <p>Discover the power of Feature 2 and how it enhances your experience.</p>
        </div>
        {/* Add more features as needed */}
      </section>
      <section className="LandingPage-cta">
        <p>Ready to get started?</p>
        <Link to="/signup">
          <button>Sign Up Now</button>
        </Link>
        <p>Already have an account? <Link to="/login">Log in here</Link>.</p>
      </section>
      <footer className="LandingPage-footer">
        <p>&copy; {new Date().getFullYear()} Your App Name. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;