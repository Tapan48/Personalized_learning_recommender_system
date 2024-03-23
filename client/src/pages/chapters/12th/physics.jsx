// PhysicsChapters12.js
import React from 'react';

const chaptersData = [
  {
    id: 1,
    title: 'Chapter 1: Electric Charges and Fields',
    description: 'Electric charge: Conservation of charge, Coulomb’s law-force between two point charges, forces between multiple charges; superposition principle and continuous charge distribution.',
  },
  {
    id: 2,
    title: 'Chapter 2: Electrostatic Potential and Capacitance',
    description: 'Electric potential, potential difference, electric potential due to a point charge, a dipole and system of charges; equipotential surfaces, electrical potential energy of a system of two point charges and of electric dipole in an electrostatic field.',
  },
  {
    id: 3,
    title: 'Chapter 3: Current Electricity',
    description: 'Electric current, flow of electric charges in a metallic conductor, drift velocity, mobility and their relation with electric current; Ohm’s law, electrical resistance, V-I characteristics (linear and non-linear), electrical energy and power, electrical resistivity and conductivity; temperature dependence of resistance.',
  },
  {
    id: 4,
    title: 'Chapter 4: Moving Charges and Magnetism',
    description: 'Concept of magnetic field, Oersted’s experiment. Biot - Savart law and its application to current carrying circular loop.',
  },
  {
    id: 5,
    title: 'Chapter 5: Magnetism and Matter',
    description: 'Current loop as a magnetic dipole and its magnetic dipole moment, magnetic dipole moment of a revolving electron, magnetic field intensity due to a magnetic dipole (bar magnet) along its axis and perpendicular to its axis, torque on a magnetic dipole (bar magnet) in a uniform magnetic field; bar magnet as an equivalent solenoid, magnetic field lines; Earth’s magnetic field and magnetic elements.',
  },
  // Add more chapters as needed
];

const PhysicsChapters12 = () => {
  return (
    <div>
      <h2>Physics Chapters - 12th Grade</h2>
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

export default PhysicsChapters12;
