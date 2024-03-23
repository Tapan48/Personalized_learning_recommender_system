// MathematicsChapters12.js
import React from 'react';

const chaptersData = [
  {
    id: 1,
    title: 'Chapter 1: Relations and Functions',
    description: 'Types of relations, reflexive, symmetric, transitive and equivalence relations. One to one and onto functions, composite functions, inverse of a function. Binary operations.',
  },
  {
    id: 2,
    title: 'Chapter 2: Inverse Trigonometric Functions',
    description: 'Definition, range, domain, principal value branch. Graphs of inverse trigonometric functions. Elementary properties of inverse trigonometric functions.',
  },
  {
    id: 3,
    title: 'Chapter 3: Matrices',
    description: 'Concept, notation, order, equality, types of matrices, zero and identity matrix, transpose of a matrix, symmetric and skew symmetric matrices.',
  },
  {
    id: 4,
    title: 'Chapter 4: Determinants',
    description: 'Determinant of a square matrix (up to 3 x 3 matrices), properties of determinants, minors, co-factors, applications of determinants in finding the area of a triangle.',
  },
  {
    id: 5,
    title: 'Chapter 5: Continuity and Differentiability',
    description: 'Continuity and differentiability, derivative of composite functions, chain rule, derivatives of inverse trigonometric functions, derivative of implicit functions.',
  },
  // Add more chapters as needed
];

const MathematicsChapters12 = () => {
  return (
    <div>
      <h2>Mathematics Chapters - 12th Grade</h2>
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

export default MathematicsChapters12;
