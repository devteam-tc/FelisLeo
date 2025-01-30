// import styles from '../styles/announcements.module.css'

// export default function Pagination({ currentPage, totalPages, onPageChange }) {
//   return (
//     <div className={styles.pagination}>
//       <button
//         className={styles.pageButton}
//         onClick={() => onPageChange(currentPage - 1)}
//         disabled={currentPage === 1}
//       >
//         Previous
//       </button>
      
//       {[...Array(totalPages)].map((_, i) => (
//         <button
//           key={i + 1}
//           className={`${styles.pageButton} ${currentPage === i + 1 ? styles.activePage : ''}`}
//           onClick={() => onPageChange(i + 1)}
//         >
//           {i + 1}
//         </button>
//       ))}
      
//       <button
//         className={styles.pageButton}
//         onClick={() => onPageChange(currentPage + 1)}
//         disabled={currentPage === totalPages}
//       >
//         Next
//       </button>
//     </div>
//   )
// }

import styles from '../styles/announcements.module.css';

export default function Pagination({ currentPage, totalPages, onPageChange }) {
  return (
    <div className={styles.pagination}>
      <button
        className={styles.pageButton}
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      {[...Array(totalPages)].map((_, i) => (
        <button
          key={i + 1}
          className={`${styles.pageButton} ${currentPage === i + 1 ? styles.activePage : ''}`}
          onClick={() => onPageChange(i + 1)}
        >
          {i + 1}
        </button>
      ))}
      <button
        className={styles.pageButton}
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
}
