// "use client";

// import React, { useEffect, useState } from 'react';
// import styles from '../styles/announcements.module.css'; // Importing the CSS module
// import { db,collection, getDocs } from '../firebaseConfig'; // Adjust the path as necessary
// import { Button } from './ui/button';

// const Announcements = () => {
//   const [announcements, setAnnouncements] = useState([]);
//   const [error, setError] = useState('');

//   // Fetch data from Firestore
//   useEffect(() => {
//     const fetchAnnouncements = async () => {
//       try {
//         const querySnapshot = await getDocs(collection(db, 'announcements'));
//         const data = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
//         console.log('Fetched data:', data); // Debugging output
//         setAnnouncements(data);
//       } catch (error) {
//         console.error('Error fetching announcements:', error);
//         setError('Failed to fetch announcements. Please check database permissions.');
//       }
//     };

//     fetchAnnouncements();
//   }, []);

//   return (
//     <div className={styles.container} style={{ backgroundColor: '#fff' }}>
//       <h2 className={styles.title}>ANNOUNCEMENTS</h2>
//       {error ? (
//         <p className={styles.error}>{error}</p>
//       ) : (
//         <div className={styles.announcementsGrid}>
//           {announcements.length > 0 ? (
//             announcements.map((item) => (
//               <div key={item.id} className={styles.card}>
//                 <img src={item.image} alt={item.title} className={styles.image} />
//                 <h3 className={styles.cardTitle}>{item.title}</h3>
//                 <p className={styles.cardSubtitle}><strong>{item.subtitle}</strong></p>
//                 <p className={styles.cardDescription}>{item.description}</p>
//                 <a href={item.link} className={styles.readMore}>Read more</a>
//               </div>
//             ))
//           ) : (
//             <p className={styles.noData}>No announcements available.</p>
//           )}
//         </div>
//       )}
//       <div className={styles.exploreMore}>
//         <Button className={styles.exploreButton}>Explore more &gt;&gt;</Button>
//       </div>
//     </div>
//   );
// };

// export default Announcements;


"use client";

import React, { useEffect, useState } from 'react';
import styles from '../styles/announcements.module.css'; // Importing the CSS module
import { db, collection, getDocs } from '../firebaseConfig'; // Adjust the path as necessary
import { Button } from './ui/button';

const Announcements = () => {
  const [announcements, setAnnouncements] = useState([]);
  const [error, setError] = useState('');

  // Fetch data from Firestore
  useEffect(() => {
    const fetchAnnouncements = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'announcements'));
        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        // Sort announcements by createdAt (newest first) and take the first three
        const sortedData = data
          .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
          .slice(0, 3);

        console.log('Sorted data:', sortedData); // Debugging output
        setAnnouncements(sortedData);
      } catch (error) {
        console.error('Error fetching announcements:', error);
        setError('Failed to fetch announcements. Please check database permissions.');
      }
    };

    fetchAnnouncements();
  }, []);

  return (
    <div className={styles.container} style={{ backgroundColor: '#fff' }}>
      <h2 className={styles.title}>ANNOUNCEMENTS</h2>
      {error ? (
        <p className={styles.error}>{error}</p>
      ) : (
        <div className={styles.announcementsGrid}>
          {announcements.length > 0 ? (
            announcements.map((item) => (
              <div key={item.id} className={styles.card}>
                <img src={item.image} alt={item.title} className={styles.image} />
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardSubtitle}><strong>{item.subtitle}</strong></p>
                <p className={styles.cardDescription}>{item.description}</p>
                <span href={item.link} className={styles.readMore}>Read more</span>
              </div>
            ))
          ) : (
            <p className={styles.noData}>No announcements available.</p>
          )}
        </div>
      )}
      <div className={styles.exploreMore}>
        <Button className={styles.exploreButton}>Explore more &gt;&gt;</Button>
      </div>
    </div>
  );
};

export default Announcements;
