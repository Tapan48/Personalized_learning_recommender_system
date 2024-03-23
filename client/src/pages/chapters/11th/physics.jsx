// PhysicsChapters11.js
import React from 'react';
import './physics.css'; // Import the CSS file

const chaptersData = [
  {
    id: 1,
    title: 'Chapter 1: Physical World',
    description: 'Scope and excitement of physics; nature of physical laws; physics, technology, and society.',
  },
  {
    id: 2,
    title: 'Chapter 2: Units and Measurements',
    description: 'Need for measurement; units of measurement; systems of units; SI units, fundamental and derived units. Length, mass and time measurements; accuracy and precision of measuring instruments; errors in measurement; significant figures.',
  },
  {
    id: 3,
    title: 'Chapter 3: Motion in a Straight Line',
    description: 'Position, path length, and displacement; average velocity and instantaneous velocity; acceleration; kinematic equations for uniformly accelerated motion; relative velocity.',
  },
  {
    id: 4,
    title: 'Chapter 4: Motion in a Plane',
    description: 'Scalar and vector quantities; position and displacement vectors; equality of vectors; multiplication of vectors by a real number; addition and subtraction of vectors. Relative velocity in two dimensions; projectile motion; uniform circular motion.',
  },
  {
    id: 5,
    title: 'Chapter 5: Laws of Motion',
    description: 'Intuitive concept of force. Inertia, Newton’s first law of motion; momentum and Newton’s second law of motion; impulse; Newton’s third law of motion. Law of conservation of linear momentum and its applications.',
  },
  {
    id: 6,
    title: 'Chapter 6: Work, Energy, and Power',
    description: 'Work done by a constant force and a variable force; kinetic and potential energies; work-energy theorem; power.',
  },
  // Add more chapters as needed
];

const PhysicsChapters11 = () => {
  return (
    <div>
      <h2>Physics Chapters - 11th Grade</h2>
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

export default PhysicsChapters11;
