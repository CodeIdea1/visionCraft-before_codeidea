import styles from '../styles/InsuranceMadeEasy.module.css';

export default function InsuranceMadeEasy() {
  return (
    <section className={styles.container}>
      <div className={styles.imageColumn}>
        <img src="/GL_HP_restyle_insurance_D_M.avif" alt="Insurance" className={styles.mainImage} />
      </div>

      <div className={styles.contentColumn}>
        <h2 className={styles.title}>Purchasing with insurance, made easy.</h2>
        <p className={styles.description}>
          This is our promise to you. We accept most vision insurance plans, both in and out-of-network.
        </p>
        <img src="/insurance_logos_D.webp" alt="Insurance Logos" className={styles.logosImage} />
        <div className={styles.buttons}>
          <button className={styles.primaryButton}>Shop with insurance</button>
          <button className={styles.secondaryButton}>LEARN MORE</button>
        </div>
      </div>
    </section>
  );
}
