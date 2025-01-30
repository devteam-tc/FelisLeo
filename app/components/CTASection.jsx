import styles from '../styles/CTASection.module.css';
import { Button } from './ui/button';

export function CTASection(){
  return (
    <section className={styles.ctaSection}>
      <div className={styles.textContent}>
        <h1>Start Your Cinematic Journey Today</h1>
        <button className={styles.ctaButton}>Contact us</button>
      </div>
      <div className={styles.imageContainer}>
        <div className={styles.imageOverlay}></div>
      </div>
    </section>
  );
};

export default CTASection;
