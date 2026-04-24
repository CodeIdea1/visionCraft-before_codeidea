import { useState } from 'react';
import styles from '../styles/LensTypes.module.css';

const lensData = [
  {
    id: 'transitions',
    name: 'Transitions®',
    title: 'Transitions®',
    description: 'Lenses that adapt to changing light conditions, providing optimal vision and protection indoors and outdoors.'
  },
  {
    id: 'blue-violet',
    name: 'Blue-violet light',
    title: 'Blue-violet light protection',
    description: 'Protect your eyes from harmful blue-violet light emitted by digital screens and artificial lighting.'
  },
  {
    id: 'prescription-sun',
    name: 'Prescription sun',
    title: 'Prescription sun',
    description: 'Protect your eyes from the sun, without compromising on your vision needs. Choose prescription sun lenses on any frame.'
  }
];

export default function LensTypes() {
  const [selectedLens, setSelectedLens] = useState(lensData[0]);

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.column}>
          <h2 className={styles.mainTitle}>Our lenses</h2>
          <ul className={styles.lensOptions}>
            {lensData.map((lens) => (
              <li 
                key={lens.id}
                className={selectedLens.id === lens.id ? styles.active : ''}
                onClick={() => setSelectedLens(lens)}
              >
                {lens.name}
              </li>
            ))}
          </ul>
          <button className={styles.discoverButton}>Discover all lenses</button>
        </div>

        <div className={styles.column}>
          <h3 className={styles.contentTitle}>{selectedLens.title}</h3>
          <p className={styles.contentDescription}>{selectedLens.description}</p>
          <button className={styles.shopButton}>Shop {selectedLens.name} lenses</button>
        </div>
      </div>
    </section>
  );
}
