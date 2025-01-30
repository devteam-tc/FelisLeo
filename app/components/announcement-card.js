import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/announcements.module.css'

export default function AnnouncementCard({ announcement }) {
  return (
    <div className={styles.card}>
      <Link href={`/announcements/${announcement.id}`}>
        <Image
          src={announcement.image}
          alt={announcement.title}
          width={400}
          height={300}
          className={styles.image}
        />
        <div className={styles.cardContent} style={{textAlign: 'left'}}>
          <h3 className={styles.cardTitle}>{announcement.title}</h3>
          <p className={styles.cardDescription}>{announcement.description}</p>
          <span className={styles.readMore}>Read more</span>
        </div>
      </Link>
    </div>
  )
}

