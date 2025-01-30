"use client"

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { db, collection, getDocs } from '../firebaseConfig' // Firebase
import styles from '../styles/latestVideos.module.css'
import { Button } from './ui/button'

export function LatestVideos() {
  const [movies, setMovies] = useState([])

  // Fetch movies from Firebase
  useEffect(() => {
    async function fetchMovies() {
      try {
        const querySnapshot = await getDocs(collection(db, 'movies'))
        const movieList = []
        querySnapshot.forEach((doc) => {
          movieList.push(doc.data())
        })

        setMovies(movieList)
      } catch (error) {
        console.error('Failed to fetch movies from Firebase:', error)
      }
    }

    fetchMovies()
  }, [])

  // Handle clicking movie trailer
  const handleMovieClick = (youtubeId) => {
    window.open(`https://www.youtube.com/watch?v=${youtubeId}`, '_self')
  }

  return (
    <section className={styles.latestVideosSection}>
      <div className={styles.latestVideosContainer}>
        <h2 className={styles.latestVideosTitle}>Latest Movies</h2>

        {movies.length > 0 && (
          <>
            {/* Full Width Poster */}
            <div
              className={`${styles.videoItem} ${styles.fullWidth}`}
              onClick={() => handleMovieClick(movies[0].youtubeId)} // Assuming youtubeId exists in the data
            >
              <Image
                src={movies[0].poster}
                alt={movies[0].title}
                layout="responsive" // Make the image responsive
                width={800}
                height={450}
                className={styles.videoImage}
              />
              <div className={styles.videoOverlay}>
                <img src="/icons/play.svg" className="text-red-500" />
              </div>
              <div className={styles.videoInfo}>
              </div>
            </div>

            {/* Reference Movies */}
            <div className={styles.latestVideosGrid}>
              {movies.slice(1).map((movie, index) => (
                <div
                  key={index}
                  className={`${styles.videoItem} group`}
                  onClick={() => handleMovieClick(movie.youtubeId)} // Handle YouTube trailer click
                >
                  <Image
                    src={movie.poster} // Use the `poster` field from Firebase
                    alt={movie.title}
                    layout="responsive" // Make the image responsive
                    width={400}
                    height={225}
                    className={styles.videoImage}
                  />
                  <div className={`${styles.videoOverlay} group-hover:opacity-100`}>
                    <img src="/icons/play.svg" className="text-red-500" />
                  </div>
                  <div className={styles.videoInfo}>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        <div className={styles.buttonContainer}>
        <Button>Explore all movies</Button>
        </div>
      </div>
    </section>
  )
}
