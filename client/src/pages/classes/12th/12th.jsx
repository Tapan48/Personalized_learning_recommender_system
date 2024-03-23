// TwelfthGrade.js
import React from 'react';
import { Link } from 'react-router-dom';
import './12th.css';

const subjectsData = [
  {
    id: 1,
    subject: 'Advanced Mathematics',
    description: 'Dive deeper into advanced mathematical concepts with these comprehensive books.',
    url: 'https://ncert.nic.in/textbook/pdf/lemh1cc.jpg', // Advanced Math subject cover image URL
    route: '/12th/maths', // Route for Advanced Mathematics subject
  },
  {
    id: 2,
    subject: 'Modern Physics',
    description: 'Explore modern physics theories and applications through these insightful books.',
    url: 'https://ncert.nic.in/textbook/pdf/leph2cc.jpg', // Modern Physics subject cover image URL
    route: '/12th/physics', // Route for Modern Physics subject
  },
  {
    id: 3,
    subject: 'Organic Chemistry',
    description: 'Delve into the world of organic chemistry with these in-depth book recommendations.',
    url: 'https://ncert.nic.in/textbook/pdf/lech1cc.jpg', // Organic Chemistry subject cover image URL
    route: '/12th/chemistry', // Route for Organic Chemistry subject
  },
  // Add more subjects as needed
];

const TwelfthGrade = () => {
  return (
    <div>
      <h2>Welcome to 12th Grade!</h2>
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

export default TwelfthGrade;

