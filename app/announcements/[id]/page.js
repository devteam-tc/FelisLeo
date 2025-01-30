// import { db, doc, getDoc, collection, getDocs } from '../../firebaseConfig';
// import styles from '../announcementsSection.module.css';

// // Pre-generate dynamic routes
// export async function generateStaticParams() {
//   const announcementsRef = collection(db, 'announcements');
//   const querySnapshot = await getDocs(announcementsRef);

//   return querySnapshot.docs.map((doc) => ({
//     id: doc.id,
//   }));
// }

// // Fetch data and render the page
// export default async function AnnouncementPage({ params }) {
//   const { id } = params;

//   try {
//     const docRef = doc(db, 'announcements', id);
//     const docSnap = await getDoc(docRef);

//     if (!docSnap.exists()) {
//       return <div className={styles.error}>Announcement not found</div>;
//     }

//     const announcement = { id: docSnap.id, ...docSnap.data() };

//     return (
//       <main className={styles.insidePageSection}>
//         <div className="p-8">
//           <h1 className="text-3xl font-bold">{announcement.title}</h1>
//           <p>{announcement.description}</p>
//         </div>
//       </main>
//     );
//   } catch (error) {
//     console.error('Error fetching announcement:', error);
//     return <div className={styles.error}>Error loading announcement</div>;
//   }
// }


import { db, doc, getDoc, collection, getDocs } from '../../firebaseConfig';
import styles from '../announcementsSection.module.css';

// Pre-fetch announcement IDs for static paths
export async function generateStaticParams() {
  const announcementsRef = collection(db, 'announcements');
  const querySnapshot = await getDocs(announcementsRef);

  return querySnapshot.docs.map((doc) => ({
    id: doc.id,
  }));
}

// Fetch announcement data
async function fetchAnnouncement(id) {
  const docRef = doc(db, 'announcements', id);
  const docSnap = await getDoc(docRef);

  if (!docSnap.exists()) {
    return null;
  }

  return { id: docSnap.id, ...docSnap.data() };
}

// Static rendering of the announcement page
export default async function AnnouncementPage({ params }) {
  const { id } = params;
  const announcement = await fetchAnnouncement(id);

  if (!announcement) {
    return (
      <main className={styles.insidePageSection}>
        <div className={styles.error}>Announcement not found</div>
      </main>
    );
  }

  return (
    <main className={styles.insidePageSection}>
      <div className="p-8">
        <h1 className="text-3xl font-bold">{announcement.title}</h1>
        <p>{announcement.description}</p>
      </div>
    </main>
  );
}

export const dynamic = 'force-static'; // Ensures this page is rendered as static
