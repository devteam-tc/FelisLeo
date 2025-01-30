import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { db, collection, getDocs, doc, getDoc, query, where, limit } from '../../firebaseConfig';
import { Header } from '../../components/header';
import { Footer } from '../../components/footer';
import { CTASection } from '../../components/CTASection';
import styles from './movie-detail.module.css';
import cardStyles from '../../styles/announcements.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink, faPlay } from '@fortawesome/free-solid-svg-icons';
import AnnouncementCard from "../../components/announcement-card"

async function getMovies() {
  const moviesCollection = collection(db, 'cinemas');
  const snapshot = await getDocs(moviesCollection);
  return snapshot.docs.map((doc) => doc.id);
}

export async function generateStaticParams() {
  const movieIds = await getMovies();
  return movieIds.map((id) => ({ id }));
}

async function getMovie(id) {
  try {
    const movieDoc = doc(db, 'cinemas', id);
    const snapshot = await getDoc(movieDoc);

    if (!snapshot.exists()) {
      console.log('Movie not found');
      return null;
    }

    return {
      id: snapshot.id,
      ...snapshot.data(),
    };
  } catch (error) {
    console.error('Error fetching movie:', error);
    return null;
  }
}

async function getMovieSuggestions(currentMovieId, genre, limitCount = 4) {
  try {
    if (!currentMovieId || !genre) {
      throw new Error('Missing required parameters: currentMovieId or genre');
    }

    const moviesCollection = collection(db, 'cinemas');
    const q = query(
      moviesCollection,
      where('genre', '==', genre),
      where('__name__', '!=', currentMovieId),
      limit(limitCount)
    );
    const snapshot = await getDocs(q);

    return snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  } catch (error) {
    console.error('Error fetching movie suggestions:', error);
    return [];
  }
}

export async function generateMetadata({ params }) {
  const movie = await getMovie(params.id);
  if (!movie) return {};

  return {
    title: `${movie.title} | Felis Leo – A Legacy of Blockbuster Entertainment`,
    description: movie.description,
  };
}

export default async function MoviePage({ params }) {
  const movie = await getMovie(params.id);

  if (!movie) {
    notFound();
  }

  const suggestions = await getMovieSuggestions(params.id, movie.genre);

  // Fetch the latest announcements
  const fetchLatestAnnouncements = async () => {
    try {
      const announcementsQuery = query(collection(db, 'announcements'), limit(3));
      const snapshot = await getDocs(announcementsQuery);
      return snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
    } catch (error) {
      console.error('Error fetching latest announcements:', error);
      return [];
    }
  };

  const latestAnnouncements = await fetchLatestAnnouncements();


  return (
    <main className={styles.main}>
      <Header />

      <div>
        <section className={styles.hero}>
          <div className={styles.container}>
            <div className={styles.posterContainer}>
              <img
                src={movie.posterUrl}
                alt={movie.title}
                className={styles.moviePoster}
                priority
              />
            </div>
            <div className={styles.movieInfo}>
              <h2 className={styles.title}>{movie.title}</h2>
              <p className={styles.metadata}>
                Released year: {movie.releaseYear} | Genre: {movie.genre}
              </p>
              <p className={styles.cast}>Cast: {movie.cast}</p>
              <p className={styles.director}>Director: {movie.director}</p>
              <div className={styles.actions}>
                <a
                  className={styles.trailerButton}
                  href={movie.trailerUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faLink} className={styles.icon} /> Trailer
                </a>
                <a
                  className={styles.watchButton}
                  href={movie.movieUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faPlay} className={styles.icon} /> Watch movie
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.synopsisSuggestionsContainer}>
          <div className={styles.synopsis}>
            {movie.description.map((desc, index) => (
              <>
              <p key={index}>{desc}</p>
              <br />
              </>
            ))}
          </div>

          {suggestions.length > 0 && (
            <div className={styles.suggestions}>
              <h2 className={styles.suggestionsTitle}>You Might Also Like</h2>
              <div className={styles.suggestionsGrid}>
                {suggestions.map((suggestion) => (
                  <Link
                    key={suggestion.id}
                    href={`/movies/${suggestion.id}`}
                    className={styles.suggestionCard}
                  >
                    <img
                      src={suggestion.posterUrl}
                      alt={suggestion.title}
                      className={styles.suggestionPoster}
                    />
                    <div className={styles.suggestionOverlay}>
                      <h3 className={styles.suggestionTitle}>{suggestion.title}</h3>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </section>

        <section className={styles.announcementSection} >
          <div className={cardStyles.container}>
            <h2 className={cardStyles.title} style={{textAlign: 'left', padding: '0.5rem', margin: '0px'}}>Latest Announcements</h2>
            <div className={cardStyles.announcementsGrid}>
              {latestAnnouncements.map((announcement) => (
                <AnnouncementCard key={announcement.id} announcement={announcement} />
              ))}
            </div>
          </div>
        </section>
      </div>

      <CTASection />
      <Footer />
    </main>
  );
}
