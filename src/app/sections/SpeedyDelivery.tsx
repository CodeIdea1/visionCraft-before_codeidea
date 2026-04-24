import styles from '../styles/SpeedyDelivery.module.css';

export default function SpeedyDelivery() {
  return (
    <section className={styles.container}>
      <div className={styles.background}></div>
      <div className={styles.content}>
        <h2 className={styles.title}>Ray-Ban and Oakley Meta AI Glasses Are Here</h2>
        <p className={styles.description}>
          Shop Meta AI Glasses by Ray-Ban and Oakley now.<br />
          Starting from $75 a month with Klarna and PayPal.
        </p>
        <button className={styles.button}>Shop AI GLASSES</button>
      </div>
    </section>
  );
}
