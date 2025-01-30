import { Button } from './ui/button'
import styles from '../styles/cta.module.css'

export function CTA() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>Why Choose Us ?</h2>
          <p className={styles.description}>
          Felis Leo Cinemas strives to create unforgettable theatrical events. While there are many reasons we are a trusted name in the industry, here's a few:
          </p>
          <div className={styles.grid}>
            <h3>
              Creative Excellence
            </h3>
            <p>Experienced directors, writers, and artists deliver unique, immersive storytelling.</p>
          </div>
          <div className={styles.grid}>
            <h3>
            High-Quality Production
            </h3>
            <p>State-of-the-art technology ensures stunning visuals and top-tier narratives.</p>
          </div>
          <div className={styles.grid}>
            <h3>
            Passion for Storytelling
            </h3>
            <p>A commitment to inspiring and resonant stories that entertain worldwide.</p>
          </div>
          <div className={styles.grid}>
            <h3>Global Reach</h3>
            <p>Diverse expertise caters to global audiences while preserving cultural authenticity. </p>
          </div>
          <div className={styles.grid}>
            <h3>Original Storytelling</h3>
            <p> Emotionally engaging content blends entertainment with meaningful messages. </p>
          </div>
        </div>
        <div className={styles.imageWrapper}>
          <img src="/why_choose_us.png" alt="CTA" className={styles.image} />
        </div>
      </div>
    </section>
  )
}
