import React from 'react';
import './footer.css'; // Import your custom CSS for styling

const Footer = () => {
  return (
    <footer className="Footer">
      <div className="Footer-content">
        <p>&copy; {new Date().getFullYear()} Your App Name. All rights reserved.</p>
        <div className="Footer-links">
          <a href="/privacy">Privacy Policy</a>
          <a href="/terms">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
