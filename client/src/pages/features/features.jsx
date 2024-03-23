import React from 'react';
import './features.css'; // You can create a <separa></separa>te CSS file for styling
import Card from 'react-bootstrap/Card';

const FeaturesComponent = () => {
  // Hardcoded data for testing
  const featureData = [
    {
      title: 'Chapter Summaries',
      content: 'Concise summaries of chapters...',
    },
    {
      title: 'MCQs',
      content: 'Multiple Choice Questions related to the topics...',
    },
    {
      title: 'Key Concepts',
      content: 'Important key concepts for better understanding...',
    },
    {
      title: 'Prerequisites',
      content: 'Prerequisites before diving into the chapters...',
    },
    {
      title: 'Performance Analytics',
      content: 'Track your performance with detailed analytics...',
    },
    {
      title: 'Interactive Flashcards',
      content: 'Engage in interactive learning with flashcards...',
    },
    {
      title: 'Smart Recommendations',
      content: 'Receive personalized recommendations for effective study...',
    },
    {
      title: 'Revision Timelines',
      content: 'Plan your revisions with customizable timelines...',
    },
  ];

  return (
    <div className="features-container">
      <h2>Web App Features</h2>

      <div className="card-container">
        {featureData.map((feature, index) => (
          <Card key={index} className="feature-card">
            <Card.Body>
              <Card.Title>{feature.title}</Card.Title>
              <Card.Text>{feature.content}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default FeaturesComponent;
