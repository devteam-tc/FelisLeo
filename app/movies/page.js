import { collection, getDocs, query } from 'firebase/firestore'
import Link from 'next/link'
import { db } from '../firebaseConfig'
import { MovieCard } from '../components/movie-card'
import styles from './movies.module.css'
import { Header } from '../components/header'
import { Footer } from '../components/footer'
import CTASection from '../components/CTASection'

async function getMovies() {
    const moviesCollection = collection(db, 'cinemas')
    const snapshot = await getDocs(moviesCollection)
  
    const movies = snapshot.docs
      .map(doc => ({
        id: doc.id,
        ...doc.data()
      }))
      .sort((a, b) => {
        const dateA = new Date(a.releaseYear, a.releaseMonth - 1, a.releaseDay)
        const dateB = new Date(b.releaseYear, b.releaseMonth - 1, b.releaseDay)
        return dateB - dateA
      })
  
    console.log(movies)  // Add this to check if the movies are being fetched correctly
    return movies
  }
  

// Metadata for the page
export const metadata = {
  title: 'Movies | Felis Leo  – A Legacy of Blockbuster Entertainment',
  description: 'Explore Felis Leo: A premier film production house known for blockbuster films. Discover cinematic masterpieces that redefine entertainment.',
  keywords: 'home, page, example, about',
}

// Movies Page Component
export default async function MoviesPage() {
    const movies = await getMovies()
  
    console.log('Movies:', movies)  // Log the movies data
  
    const moviesByCategory = {
      recommendations: movies.filter(movie => movie.category === 'recommendations'),
      comedy: movies.filter(movie => movie.category === 'comedy'),
      family: movies.filter(movie => movie.category === 'family'),
      melodrama: movies.filter(movie => movie.category === 'melodrama')
    }
  
    if (movies.length === 0) {
      return (
        <main>
          <Header />
          <section className={styles.hero}>
            <h1 className={styles.heroTitle}>No Movies Found</h1>
          </section>
          <Footer />
        </main>
      )
    }
  
    return (
      <main className={styles.main}>
        <Header />
        <section className={styles.hero}>
          <h1 className={styles.heroTitle}>Movies</h1>
        </section>
  
        {Object.entries(moviesByCategory).map(([category, movies]) => (
          <section key={category} className={styles.section}>
            <h2 className={styles.sectionTitle}>
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </h2>
            <div className={styles.movieGrid}>
              {movies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </div>
          </section>
        ))}
        
        <CTASection/>
        <Footer />
      </main>
    )
  }
  

