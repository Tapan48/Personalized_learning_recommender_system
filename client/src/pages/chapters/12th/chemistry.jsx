// ChemistryChapters12.js
import React from 'react';

const chaptersData = [
  {
    id: 1,
    title: 'Chapter 1: The Solid State',
    description: 'General characteristics of solid state, amorphous and crystalline solids, unit cell in two dimensional and three dimensional lattices, packing efficiency, voids, number of atoms per unit cell in a cubic unit cell, point defects, electrical and magnetic properties.',
  },
  {
    id: 2,
    title: 'Chapter 2: Solutions',
    description: 'Types of solutions, expression of concentration of solutions of solids in liquids, solubility of gases in liquids, solid solutions, colligative properties – relative lowering of vapour pressure, Raoult’s law, elevation of boiling point, depression of freezing point, osmotic pressure, determination of molecular masses using colligative properties, abnormal molecular mass.',
  },
  {
    id: 3,
    title: 'Chapter 3: Electrochemistry',
    description: 'Redox reactions, conductance in electrolytic solutions, specific and molar conductivity, variations of conductivity with concentration, Kohlrausch’s Law, electrolysis and laws of electrolysis (elementary idea), dry cell-electrolytic cells and Galvanic cells, EMF of a cell, standard electrode potential, Nernst equation and its application to chemical cells, Relation between Gibbs energy change and EMF of a cell, fuel cells, corrosion.',
  },
  {
    id: 4,
    title: 'Chapter 4: Chemical Kinetics',
    description: 'Rate of a reaction (Average and instantaneous), factors affecting rates of reaction: concentration, temperature, catalyst; order and molecularity of a reaction; rate law and specific rate constant, integrated rate equations and half life (only for zero and first order reactions); concept of collision theory (elementary idea, no mathematical treatment).',
  },
  {
    id: 5,
    title: 'Chapter 5: Surface Chemistry',
    description: 'Adsorption – physisorption and chemisorption; factors affecting adsorption of gases on solids; catalysis: homogenous and heterogeneous, activity and selectivity: enzyme catalysis; colloidal state: distinction between true solutions, colloids and suspensions; lyophilic, lyophobic, multimolecular and macromolecular colloids; properties of colloids; Tyndall effect, Brownian movement, electrophoresis, coagulation; emulsions – types of emulsions.',
  },
  // Add more chapters as needed
];

const ChemistryChapters12 = () => {
  return (
    <div>
      <h2>Chemistry Chapters - 12th Grade</h2>
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

export default ChemistryChapters12;
