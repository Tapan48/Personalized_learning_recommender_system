// EleventhGrade.js
import React from 'react';
import { Link } from 'react-router-dom';
import './11th.css';

const subjectsData = [
  {
    id: 1,
    subject: 'Mathematics',
    description: 'Explore the world of mathematics with these insightful books.',
    url: 'https://ncert.nic.in/textbook/pdf/kemh1cc.jpg', // Math subject cover image URL
    route: '/11th/maths', // Route for Mathematics subject
  },
  {
    id: 2,
    subject: 'Physics',
    description: 'Dive into the fascinating world of physics through these recommended books.',
    url: 'https://ncert.nic.in/textbook/pdf/keph2cc.jpg', // Physics subject cover image URL
    route: '/11th/physics', // Route for Physics subject
  },
  { 
    id: 3,
    subject: 'Chemistry',
    description: 'Discover the principles of chemistry with these engaging book recommendations.',
    url: 'https://ncert.nic.in/textbook/pdf/kech1cc.jpg',
    route: '/11th/chemistry', // Route for Chemistry subject
  },
  // Add more subjects as needed
];

const EleventhGrade = () => {
  return (
    <div>
      <h2>Welcome to 11th Grade!</h2>
      <div className="SubjectCards">
        {subjectsData.map((subject) => (
          <Link to={subject.route} key={subject.id} className="SubjectCard">
            <img src={subject.url} alt={`${subject.subject} Cover`} />
            <h3>{subject.subject}</h3>
            <p>{subject.description}</p>
            <button>View Details</button> {/* No need for onClick here */}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default EleventhGrade;
