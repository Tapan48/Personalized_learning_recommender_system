// ChemistryChapters11.js
// ChemistryChapters11.js
import React from 'react';
import './chemistry.css'; // Import the CSS file

const chaptersData = [
  {
    id: 1,
    title: 'Chapter 1: Some Basic Concepts of Chemistry',
    description: 'Importance of Chemistry, Nature of Matter, Laws of Chemical Combination, Dalton’s Atomic Theory: Concept of Elements, Atoms, and Molecules.',
  },
  {
    id: 2,
    title: 'Chapter 2: Structure of Atom',
    description: 'Discovery of Electron, Proton, and Neutron, Atomic Number, Isotopes, and Isobars. Thomson’s model and its limitations, Rutherford’s model and its limitations, Bohr’s model and its limitations, concept of shells and subshells, dual nature of matter and light, de Broglie’s relationship, Heisenberg uncertainty principle, concept of orbitals, quantum numbers, shapes of s, p, and d orbitals, rules for filling electrons in orbitals.',
  },
  {
    id: 3,
    title: 'Chapter 3: Classification of Elements and Periodicity in Properties',
    description: 'Need for classification, Modern periodic law and the present form of periodic table, Nomenclature of elements with atomic number > 100.',
  },
  {
    id: 4,
    title: 'Chapter 4: Chemical Bonding and Molecular Structure',
    description: 'Valence electrons, ionic bond, covalent bond, bond parameters, Lewis structure, polar character of covalent bond, covalent character of ionic bond, valence bond theory, resonance, geometry of covalent molecules, VSEPR theory, concept of hybridization, involving s, p, and d orbitals and shapes of some simple molecules, molecular orbital theory of homonuclear diatomic molecules (qualitative idea only), hydrogen bond.',
  },
  {
    id: 5,
    title: 'Chapter 5: States of Matter: Gases and Liquids',
    description: 'Three states of matter, intermolecular interactions, types of bonding, melting and boiling points, role of gas laws in elucidating the concept of the molecule, Boyle’s law, Charle’s law, Gay Lussac’s law, Avogadro’s law, ideal behavior, empirical derivation of gas equation, Avogadro’s number, ideal gas equation. Deviation from ideal behavior, liquefaction of gases, critical temperature, kinetic energy and molecular speeds (elementary idea), Liquid State – Vapor pressure, viscosity and surface tension (qualitative idea only, no mathematical derivations).',
  },
  // Add more chapters as needed
];

const ChemistryChapters11 = () => {
  return (
    <div>
      <h2>Chemistry Chapters - 11th Grade</h2>
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

export default ChemistryChapters11;
