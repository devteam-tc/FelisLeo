import Link from 'next/link'
import Image from 'next/image'
import styles from '../movies/movies.module.css'

// Movie Card Component
// export function MovieCard({ movie }) {
//   return (
//     <Link href={`/movies/${movie.id}`} className={styles.movieCard}>
//       <Image
//         src={movie.posterUrl}
//         alt={movie.title}
//         width={300}
//         height={450}
//         className={styles.movieImage}
//         priority={false}
//       />
//     </Link>
//   )
// }

// export function MovieCard({ movie }) {
//     console.log('Movie:', movie)  // Log movie data
//     return (
//       <Link href={`/movies/${movie.id}`} className={styles.movieCard}>
//         <Image
//           src={movie.posterUrl}
//           alt={movie.title}
//           width={300}
//           height={450}
//           className={styles.movieImage}
//           priority={false}
//         />
//       </Link>
//     )
//   }


// export const MovieCard = ({ movie }) => {
//   return (
//     <div className={styles.movieCard}>
//       <Link href={`/movie/${movie.id}`}>
//         <img
//           src={movie.posterUrl}
//           alt={movie.title}
//           className={styles.movieImage}
//         />
//         <div className={styles.movieTitle}>{movie.title}</div>
//       </Link>
//     </div>
//   );
// };
  
export function MovieCard({ movie }) {
  console.log('Movie:', movie); // Log movie data
  return (
    <Link href={`/movies/${movie.id}`} className={styles.movieCard}>
      <Image
        src={movie.posterUrl}
        alt={movie.title}
        width={300}
        height={450}
        className={styles.movieImage}
        priority={false}
      />
      <div className={styles.movieTitle}>{movie.title}</div>
    </Link>
  );
}
