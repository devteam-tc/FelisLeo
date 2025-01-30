import Link from 'next/link'
import Image from 'next/image'
import styles from './error404.module.css'
import CTASection from '../components/CTASection'
import { Button } from '../components/ui/button';

export default function Error404() {
  return (
    <main>
      <div className={styles.container}>
        <Image
          src="https://firebasestorage.googleapis.com/v0/b/tech-cloud-erp-1532582683650.firebasestorage.app/o/felisleo_latest_movies_images%2Ferror-img.png?alt=media&token=772ee9b6-72d3-4346-9fce-a942c8d40f4d"
          alt="404 Error Illustration"
          width={600}
          height={400}
          className={styles.image}
        />
        <h1 className={styles.title}>We can't find the page you're looking for.</h1>
        <Button href="/">
          Go to Home Page
        </Button>
      </div>
      
      <CTASection/>
    </main>
  )
}

