// MathematicsChapters11.js
import React from 'react';
import './maths.css'

const chaptersData = [
    {
      id: 1,
      title: 'Chapter 1: Sets',
      description: 'Introduction to sets and their representation',
    },
    {
      id: 2,
      title: 'Chapter 2: Relations and Functions',
      description: 'Types of relations, functions, and their properties',
    },
    {
      id: 3,
      title: 'Chapter 3: Trigonometry',
      description: 'Introduction to trigonometric functions and identities',
    },
    {
      id: 4,
      title: 'Chapter 4: Sequences and Series',
      description: 'Study of sequences, series, and their convergence',
    },
    {
      id: 5,
      title: 'Chapter 5: Straight Lines',
      description: 'Equations and properties of straight lines',
    },
    {
      id: 6,
      title: 'Chapter 6: Conic Sections',
      description: 'Study of conic sections: ellipse, hyperbola, parabola',
    },
    {
      id: 7,
      title: 'Chapter 7: Limits and Derivatives',
      description: 'Introduction to limits and derivatives',
    },
    {
      id: 8,
      title: 'Chapter 8: Mathematical Reasoning',
      description: 'Logical reasoning and mathematical statements',
    },
    {
      id: 9,
      title: 'Chapter 9: Statistics',
      description: 'Introduction to statistics: mean, median, mode, etc.',
    },
    {
      id: 10,
      title: 'Chapter 10: Probability',
      description: 'Basics of probability theory and its applications',
    },
    // Add more chapters as needed
  ];
  

const MathematicsChapters11 = () => {

    console.log("maths 11th chapters comp running")
  return (
    <div>
      <h2>Mathematics Chapters - 11th Grade</h2>
      <div className="ChapterCards">
        {chaptersData.map((chapter) => (
          <div key={chapter.id} className="ChapterCard">
            <h3>{chapter.title}</h3>
            <p>{chapter.description}</p>
            {/* You can add more details or links here if needed */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MathematicsChapters11;
