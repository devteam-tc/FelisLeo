'use client';

import styles from './gallery.module.css';

export default function GalleryClient() {
  return (
    <section className={styles.section}>
        
      <h2 className={styles.sectionTitle}>Gallery</h2>

      {/* Under Construction Message */}
      <div className={styles.messageContainer}>
        <h3 className={styles.message}>This Page is Under Construction</h3>
        <p className={styles.messageDetails}>We are working hard to bring you an amazing experience. Stay tuned!</p>
      </div>
    </section>
  );
}
