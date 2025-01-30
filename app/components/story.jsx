import Image from 'next/image'
import styles from '../styles/story.module.css'
import { Button } from './ui/button'

export function Story() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
        <h2 className={styles.title}>Transforming Your Vision Into a <br/> Powerful Story</h2>
        <p className={styles.description}>We specialize in capturing your vision and transforming it into a compelling story. Through creativity and precision, we bring your ideas to life, creating impactful narratives that resonate with your audience.</p>
        <Button>Get Started</Button>
        </div>
        <div style={{ marginTop: '3rem' }}>
        <p className={styles.storytitle}>Story Behind Felis Leo</p>
        <div className={styles.grid}>
          
          <div className={styles.content}>
          
            <p className={styles.text}>
              The story of Falls Leo unfolds as a tale of resilience, courage, and 
              vision. From humble beginnings to becoming one of the most influential 
              film production houses in the industry, our journey has been defined by 
              a relentless pursuit of excellence and an unwavering commitment to 
              storytelling that leaves a beacon of inspiration.
            </p>
            <p className={styles.text}>
              We have grown from a small team of dreamers into a full-service 
              production powerhouse, tackling projects of all sizes with the same 
              passion for perfection and meticulous timing that strengthens our 
              position as a beacon of inspiration.
            </p>
          </div>
          <div className={styles.imageWrapper}>
            <Image
              src="/watching_felis_leo.png"
              alt="Falls Leo Story"
              fill
              className="object-cover"
            />
          </div>
        </div>
        </div>
      </div>
    </section>
  )
}

