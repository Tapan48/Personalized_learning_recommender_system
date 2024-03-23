import React from 'react';
import './pricing.css';

const PricingPage = () => {
  return (
    <div className="pricing-container">
      <h2>Pricing Plans</h2>
      <div className="pricing-cards">
        <div className="pricing-card">
          <h3>Basic</h3>
          <p className="price">$9.99/month</p>
          <ul>
            <li>Feature 1</li>
            <li>Feature 2</li>
            <li>Feature 3</li>
          </ul>
          <button>Select Plan</button>
        </div>
        <div className="pricing-card">
          <h3>Standard</h3>
          <p className="price">$19.99/month</p>
          <ul>
            <li>Feature 1</li>
            <li>Feature 2</li>
            <li>Feature 3</li>
            <li>Feature 4</li>
          </ul>
          <button>Select Plan</button>
        </div>
        <div className="pricing-card">
          <h3>Premium</h3>
          <p className="price">$29.99/month</p>
          <ul>
            <li>Feature 1</li>
            <li>Feature 2</li>
            <li>Feature 3</li>
            <li>Feature 4</li>
            <li>Feature 5</li>
          </ul>
          <button>Select Plan</button>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
