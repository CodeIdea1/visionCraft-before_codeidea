import styles from '../styles/HeroSection.module.css';

const HeroSection = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroWrapper}>
        <div className={styles.content}>
          <div className={styles.badge}>New Collection 2024</div>
          <h1 className={styles.title}>Clear Vision</h1>
          <p className={styles.subtitle}>Premium Eyewear Collection</p>
          <p className={styles.description}>Discover the perfect blend of style and clarity with our curated collection of premium eyewear.</p>
          <div className={styles.buttons}>
            <button className={styles.primaryBtn}>Shop Now</button>
            <button className={styles.secondaryBtn}>View Collection</button>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <div className={styles.imageWrapper}>
            <img src="/glasses2 (1).png" alt="Glasses" className={styles.glassesImage} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;