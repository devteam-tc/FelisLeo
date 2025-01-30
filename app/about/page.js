import { Footer } from "../components/footer";
import { Header } from "../components/header";
import Image from 'next/image'
import Link from 'next/link'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion"
import styles from '../styles/about.module.css'
import CTASection from "../components/CTASection";

export const metadata = {
    title: 'About Us | Felis Leo – Crafting Exceptional Cinematic Experiences',
    description: 'Felis Leo is a leading film production company that creates memorable movies and brings fresh, innovative ideas to entertainment.',
    keywords: 'home, page, example, about',
}

import {FAQSection} from "../components/faq";

export default function about() {
    return (
        <main className={styles.main}>
            <Header />
        <section className={styles.hero}>
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>About us</h1>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.content}>
          <h2 className={styles.title}>OUR STORY</h2>
          <p className={styles.text}>
          Founded with a passion for storytelling, we bring compelling narratives to life through innovative filmmaking. 
          Our journey combines creativity, advanced production techniques, and a commitment to delivering films that entertain, inspire, and leave a lasting impact worldwide.
          
          </p>
        </div>
        <div className={styles.imageWrapper}>
          <img
            src="/about/top-section-image.png"
            alt="Cinematic scene"
            width={800}
            height={600}

            style={{justifyContent: 'start'}}
          />
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.grid}>
          <div className={styles.imageWrapper}>
            <img
              src="/about/our-trust.png"
              alt="Production equipment"
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div className={styles.content}>
            <h2 className={styles.title}>YOUR TRUSTED LEO FELIS CINEMAS</h2>
            <p className={styles.text}>
              Leo Felis Cinemas specializes in creating captivating films that connect, educate, and inspire. Our skilled team delivers innovative solutions, we deliver cinematic masterpieces that inspire, entertain, and leave a lasting impact worldwide.
            </p>
            <h3 className={styles.title}>OUR VISION</h3>
            <p className={styles.text}>
              To redefine storytelling by creating films that resonate across generations.
            </p>
            <h3 className={styles.title}>OUR MISSION</h3>
            <p className={styles.text}>
              To consistently deliver high-quality films with creative brilliance, innovation, and heart.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.grid}>
          <div className={styles.content}>
            <h2 className={styles.title}>WHAT WE DO</h2>
            <p className={styles.text}>
              At Leo Felis Cinemas, we combine technical excellence, creativity, and deliver a lasting impact. Our expertise spans across various forms of visual storytelling, combining creative vision with technical precision to create exceptional production value.
            </p>
            <h3 className={styles.title}>OUR APPROACH</h3>
            <p className={styles.text}>
              We shoot carefully, innovative, and precision to deliver productions that stand out. From pre-production planning to post-production finishing touches, every detail is crafted to make a story worth watching.
            </p>
          </div>
          <div className={styles.imageWrapper}>
            <img
              src="/about/what-we-do.png"
              alt="Behind the scenes"
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>
      </section>
      <FAQSection />
      <CTASection/>
      <Footer />
    </main>
    );
}