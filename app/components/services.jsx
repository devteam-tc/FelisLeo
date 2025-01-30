
import styles from '../styles/services.module.css'

export function Services() {
  const services = [
    { icon: '/icons/film.svg', title: 'Film Production', description: 'Felis Leo creates high-quality films across languages and genres, from blockbusters to dramas.' },
    { icon: '/icons/video.svg', title: 'Online Series', description: 'We create engaging web series and digital content to captivate audiences.' },
    { icon: '/icons/camera.svg', title: 'TV Production', description: 'Compelling TV commercials are crafted to promote brands and products effectively.' },
    { icon: '/icons/settings.svg', title: 'Post-Production', description: 'Editing, color correction, and visual effects are provided for polished results' },
    { icon: '/icons/play-circle.svg', title: 'Music Videos', description: 'Engaging music videos are produced with stunning visuals and storytelling.' },
    { icon: '/icons/file-text.svg', title: 'Script & Story board', description: 'Creative scripts and storyboards are developed for strong narratives and smooth execution.' },
    { icon: '/icons/calculator.svg', title: 'Budget & Planning', description: 'We offer precise budgeting and planning to optimize resources for every project. ' },
    { icon: '/icons/building2.svg', title: 'Corporate Films', description: 'Professional corporate films are produced to convey brand messages and build confidence.' },
  ]

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>What Services We Offer?</h2>
        <div className={styles.grid}>
          {services.map((service, index) => (
            <div key={index} className={styles.service}>
              <div>
                <img src={service.icon} alt={service.title} className={styles.icon} />
                </div>
              <div>
              <h3 className={styles.serviceTitle}>{service.title}</h3>
              <p className={styles.description}>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

